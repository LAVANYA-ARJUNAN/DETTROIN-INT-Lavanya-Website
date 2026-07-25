import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* School Info */}
        <div>
          <h2 className="text-2xl font-bold">
            Vasant Valley School
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
A modern learning environment focused on
academic excellence, creativity and holistic development.
          </p>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Academics</li>
            <li>Admissions</li>
            <li>Gallery</li>
          </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            📍 Aligarh, India
          </p>

          <p className="text-gray-400 mt-3">
            📞 +91 98765 43210
          </p>

          <p className="text-gray-400 mt-3">
            ✉ info@vasantvalley.com
          </p>
        </div>


        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4 text-2xl">

            <FaFacebook className="hover:text-blue-400 cursor-pointer" />

            <FaInstagram className="hover:text-pink-400 cursor-pointer" />

            <FaTwitter className="hover:text-blue-300 cursor-pointer" />

            <FaLinkedin className="hover:text-blue-500 cursor-pointer" />

          </div>

        </div>

      </div>


      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">

        © 2026 Vasant Valley School. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;