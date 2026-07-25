import { motion } from "framer-motion";
import heroImage from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <section
      className="h-screen flex items-center justify-center text-white relative"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>


      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Inspiring Excellence <br />
          Creating Future Leaders
        </h1>


        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
          A nurturing learning environment where students develop
          knowledge, creativity, confidence, and leadership skills.
        </p>


        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">


          <button
            className="bg-blue-700 px-8 py-3 rounded-full 
            hover:bg-blue-800 transition"
          >
            Explore School
          </button>


          <button
            className="border border-white px-8 py-3 rounded-full 
            hover:bg-white hover:text-black transition"
          >
            Apply Now
          </button>


        </div>


      </motion.div>


    </section>
  );
};


export default Hero;