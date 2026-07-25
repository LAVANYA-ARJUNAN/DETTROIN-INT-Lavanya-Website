import { motion } from "framer-motion";
import {
  FaBook,
  FaFlask,
  FaBasketballBall,
  FaBus,
  FaLaptop,
  FaPaintBrush,
} from "react-icons/fa";

const Features = () => {

  const features = [
    {
      icon: <FaLaptop />,
      title: "Smart Classrooms",
      description:
        "Technology-enabled classrooms for interactive learning."
    },
    {
      icon: <FaFlask />,
      title: "Science Labs",
      description:
        "Modern laboratories for practical education."
    },
    {
      icon: <FaBasketballBall />,
      title: "Sports Facilities",
      description:
        "Encouraging physical fitness and teamwork."
    },
    {
      icon: <FaBook />,
      title: "Library",
      description:
        "A resourceful library to develop reading habits."
    },
    {
      icon: <FaBus />,
      title: "Transportation",
      description:
        "Safe and reliable transport facilities."
    },
    {
      icon: <FaPaintBrush />,
      title: "Arts & Culture",
      description:
        "Creative activities for overall development."
    }
  ];


  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-blue-700 font-semibold">
            OUR FACILITIES
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Everything Students Need To Grow
          </h2>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item,index)=>(

            <motion.div
              key={index}
              initial={{opacity:0,y:30}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.5,delay:index*0.1}}
              viewport={{once:true}}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >

              <div className="text-4xl text-blue-700 mb-5">
                {item.icon}
              </div>


              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>


              <p className="text-gray-600">
                {item.description}
              </p>


            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};


export default Features;