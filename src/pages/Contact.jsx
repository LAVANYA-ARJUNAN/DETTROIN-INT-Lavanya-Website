import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-blue-700 font-semibold">
            CONTACT US
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Get In Touch With Us
          </h1>

        </div>


        <div className="grid lg:grid-cols-2 gap-12">


          {/* Contact Information */}
          <div>

            <h2 className="text-3xl font-bold mb-6">
              Let's Connect
            </h2>


            <p className="text-gray-600 leading-7 mb-8">
              Have questions about admissions or school programs?
              Our team will be happy to assist you.
            </p>


            <div className="space-y-6">


              <div className="flex items-center gap-4">

                <FaMapMarkerAlt className="text-blue-700 text-xl" />

                <p>
                  Aligarh, India
                </p>

              </div>


              <div className="flex items-center gap-4">

                <FaPhoneAlt className="text-blue-700 text-xl" />

                <p>
                  +91 98765 43210
                </p>

              </div>


              <div className="flex items-center gap-4">

                <FaEnvelope className="text-blue-700 text-xl" />

                <p>
                  info@vasantvalley.com
                </p>

              </div>


            </div>


          </div>



          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">


            <form className="space-y-5">


              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border outline-none"
              />


              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border outline-none"
              />


              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-4 rounded-lg border outline-none"
              />


              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-lg border outline-none"
              />


              <button
                className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
              >
                Send Message
              </button>


            </form>


          </div>


        </div>

      </div>

    </div>
  );
};

export default Contact;