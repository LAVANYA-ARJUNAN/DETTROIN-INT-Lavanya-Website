import { motion } from "framer-motion";
import { FaGraduationCap, FaUsers, FaAward } from "react-icons/fa";

const About = () => {
  const achievements = [
    {
      icon: <FaGraduationCap />,
      title: "Quality Education",
      desc: "Providing innovative learning methods for student growth."
    },
    {
      icon: <FaUsers />,
      title: "Experienced Faculty",
      desc: "Dedicated teachers guiding students towards success."
    },
    {
      icon: <FaAward />,
      title: "Excellence",
      desc: "Recognized for academic and extracurricular achievements."
    }
  ];

  return (
    <div className="pt-32 pb-20">

      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{opacity:0,x:-50}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
        >
          <img
            src="https://placehold.co/700x500"
            alt="School campus"
            className="rounded-3xl shadow-xl"
          />
        </motion.div>


        <motion.div
          initial={{opacity:0,x:50}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
        >

          <p className="text-blue-700 font-semibold">
            ABOUT OUR SCHOOL
          </p>

          <h1 className="text-5xl font-bold mt-4">
            Creating Future Leaders Through Education
          </h1>

          <p className="mt-6 text-gray-600 leading-8">
            Our school focuses on academic excellence, creativity,
            innovation and character development. We provide students
            with a supportive environment where they can discover
            their potential.
          </p>

        </motion.div>

      </section>


      <section className="max-w-7xl mx-auto px-6 mt-20">

        <div className="grid md:grid-cols-3 gap-8">

          {achievements.map((item,index)=>(

            <motion.div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl shadow"
              whileHover={{scale:1.05}}
            >

              <div className="text-4xl text-blue-700">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mt-5">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default About;