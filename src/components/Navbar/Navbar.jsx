import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-900">
            EduNova
          </h1>
          <p className="text-xs text-gray-500">
            Excellence in Education
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer text-gray-700 hover:text-blue-700 font-medium transition"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Apply Button */}
        <button className="hidden md:block bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">
          Apply Now
        </button>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <li
                key={link}
                className="text-gray-700 font-medium hover:text-blue-700"
              >
                {link}
              </li>
            ))}

            <button className="bg-blue-700 text-white py-2 rounded-lg">
              Apply Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;