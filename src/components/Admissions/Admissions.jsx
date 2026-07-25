import { motion } from "framer-motion";
import { FaClipboardCheck, FaUserGraduate, FaSchool } from "react-icons/fa";

const Admissions = () => {

  const steps = [
    {
      icon: <FaClipboardCheck />,
      title: "Submit Application",
      desc: "Complete the admission application form with required details."
    },
    {
      icon: <FaUserGraduate />,
      title: "Student Assessment",
      desc: "Students participate in an interaction or assessment process."
    },
    {
      icon: <FaSchool />,
      title: "Admission Confirmation",
      desc: "Selected students receive confirmation and enrollment details."
    }
  ];


  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-blue-700 font-semibold uppercase tracking-wider">
            Admissions
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Begin Your Child's Learning Journey
          </h1>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Join Vasant Valley School and provide your child with
            quality education, creativity, and opportunities to grow.
          </p>

        </div>



        {/* Admission Steps */}
        <div className="grid md:grid-cols-3 gap-8">


          {steps.map((step, index) => (

            <motion.div
              key={index}
              initial={{opacity:0, y:40}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.5}}
              viewport={{once:true}}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >

              <div className="text-5xl text-blue-700 flex justify-center">
                {step.icon}
              </div>


              <h2 className="text-xl font-bold mt-6">
                {step.title}
              </h2>


              <p className="text-gray-600 mt-3 leading-7">
                {step.desc}
              </p>

            </motion.div>

          ))}


        </div>



        {/* CTA */}
        <div className="text-center mt-12">

          <button className="bg-blue-700 text-white px-10 py-3 rounded-full hover:bg-blue-800 transition">
            Apply Now
          </button>

        </div>


      </div>

    </section>
  );
};


export default Admissions;