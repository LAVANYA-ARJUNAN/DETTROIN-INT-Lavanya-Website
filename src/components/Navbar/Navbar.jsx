import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Academics",
    "Admissions",
    "Gallery",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link to="/">
  <h1 className="text-2xl font-bold text-blue-900">
    Vasant Valley School
  </h1>

  <p className="text-xs text-gray-500">
    Excellence in Education
  </p>
</Link>


        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-700 font-medium"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>


        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>


      {isOpen && (
        <div className="md:hidden bg-white p-6">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="block py-2"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      )}

    </nav>
  );
};

export default Navbar;