import { motion } from "framer-motion";

const AdmissionCTA = () => {
  return (
    <section className="py-20 bg-blue-700">

      <div className="max-w-6xl mx-auto px-6 text-center text-white">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl md:text-5xl font-bold">
            Start Your Child's Journey With Us
          </h2>

          <p className="mt-5 text-lg text-blue-100 max-w-2xl mx-auto">
            Join a community that inspires learning, creativity, confidence,
            and success for every student.
          </p>


          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-5">

            <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Apply Now
            </button>


            <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-700 transition">
              Contact Us
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default AdmissionCTA;