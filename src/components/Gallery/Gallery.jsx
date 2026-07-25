import { motion } from "framer-motion";

import campus from "../../assets/images/campus.png";
import classroom from "../../assets/images/classroom.png";
import library from "../../assets/images/library.png";
import science from "../../assets/images/science.png";
import sports from "../../assets/images/sports.png";
import events from "../../assets/images/events.png";

const Gallery = () => {

  const images = [
    {
      title: "School Campus",
      image: campus
    },
    {
      title: "Modern Classroom",
      image: classroom
    },
    {
      title: "School Library",
      image: library
    },
    {
      title: "Science Laboratory",
      image: science
    },
    {
      title: "Sports Activities",
      image: sports
    },
    {
      title: "School Events",
      image: events
    }
  ];


  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-blue-700 font-semibold uppercase tracking-wider">
            Our Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Explore Our School Life
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our campus, classrooms, activities and memorable
            moments at Vasant Valley School.
          </p>

        </div>



        {/* Gallery Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">


          {images.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              viewport={{
                once: true
              }}
              className="group overflow-hidden rounded-2xl shadow-lg bg-white"
            >


              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

              </div>



              <div className="p-5">

                <h3 className="font-bold text-xl">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  Creating unforgettable learning experiences.
                </p>

              </div>


            </motion.div>

          ))}


        </div>


      </div>


    </section>
  );
};


export default Gallery;