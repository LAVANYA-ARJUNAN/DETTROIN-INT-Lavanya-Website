import { motion } from "framer-motion";
import aboutImage from "../../assets/images/about.jpg";
const About = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
  src={aboutImage}
  alt="About School"
  className="w-full h-auto rounded-3xl shadow-2xl"
/>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-700 font-semibold uppercase tracking-widest">
            About Our School
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Inspiring Young Minds for a Better Tomorrow
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            We provide a nurturing environment where students grow
            academically, socially and personally through innovative learning,
            experienced educators and modern facilities.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-3xl font-bold text-blue-700">25+</h3>
              <p className="text-gray-600 mt-2">Years of Excellence</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-3xl font-bold text-blue-700">3000+</h3>
              <p className="text-gray-600 mt-2">Students</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-3xl font-bold text-blue-700">150+</h3>
              <p className="text-gray-600 mt-2">Teachers</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-3xl font-bold text-blue-700">100%</h3>
              <p className="text-gray-600 mt-2">Smart Classrooms</p>
            </div>

          </div>

          <button className="mt-10 bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition">
            Learn More
          </button>

        </motion.div>

      </div>
    </section>
  );
};

export default About;