import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Academics",
      path: "/academics",
    },
    {
      name: "Admissions",
      path: "/admissions",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <footer className="bg-blue-950 text-white py-12">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">


        {/* School Info */}
        <div>

          <h2 className="text-2xl font-bold">
            Vasant Valley School
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            Nurturing young minds through excellence,
            creativity, values and quality education.
          </p>

        </div>



        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>


          <ul className="space-y-3">

            {links.map((link) => (
              <li key={link.name}>

                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-white transition"
                >
                  {link.name}
                </Link>

              </li>
            ))}

          </ul>

        </div>



        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold mb-4">
            Contact Us
          </h3>

          <p className="text-gray-300">
            📍 New Delhi, India
          </p>

          <p className="text-gray-300 mt-2">
            📞 +91 98765 43210
          </p>

          <p className="text-gray-300 mt-2">
            ✉ info@vasantvalleyschool.com
          </p>

        </div>


      </div>



      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400">

        © {new Date().getFullYear()} Vasant Valley School. All Rights Reserved.

      </div>


    </footer>
  );
};


export default Footer;