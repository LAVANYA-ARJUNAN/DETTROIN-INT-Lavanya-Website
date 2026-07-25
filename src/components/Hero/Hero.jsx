import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="h-screen flex items-center justify-center text-white relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Shaping Future <br /> Leaders
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
          Empowering students with world-class education, innovation, and
          values for a brighter tomorrow.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-700 px-8 py-3 rounded-full hover:bg-blue-800 transition">
            Explore Campus
          </button>

          <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
            Apply Now
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;