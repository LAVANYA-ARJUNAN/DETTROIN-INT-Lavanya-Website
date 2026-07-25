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

        <Link 
  to="/" 
  onClick={() => setIsOpen(false)}
>
  <h1 className="text-2xl font-bold text-blue-900">
    Vasant Valley School
  </h1>

  <p className="text-xs text-gray-500">
    Nurturing Young Minds
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
        <div className="hidden md:flex items-center gap-4">

  <Link
    to="/login"
    className="text-blue-700 font-medium hover:text-blue-900"
  >
    Login
  </Link>


  <Link
    to="/register"
    className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition"
  >
    Register
  </Link>

</div>


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
          <div className="mt-4 flex flex-col gap-3">

  <Link
    to="/login"
    onClick={() => setIsOpen(false)}
    className="text-blue-700 font-medium"
  >
    Login
  </Link>


  <Link
    to="/register"
    onClick={() => setIsOpen(false)}
    className="bg-blue-700 text-white text-center py-2 rounded-lg"
  >
    Register
  </Link>

</div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;