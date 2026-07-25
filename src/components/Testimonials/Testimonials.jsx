import { motion } from "framer-motion";

const Testimonials = () => {

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      message:
        "The school provides excellent education with great care and support for students."
    },
    {
      name: "Rahul Kumar",
      role: "Student",
      message:
        "The learning environment helped me improve my confidence and skills."
    },
    {
      name: "Anita Verma",
      role: "Parent",
      message:
        "Modern facilities and dedicated teachers make this school special."
    }
  ];


  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-blue-700 font-semibold">
            TESTIMONIALS
          </p>

          <h2 className="text-4xl font-bold mt-3">
            What People Say About Us
          </h2>

        </div>


        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item,index)=>(

            <motion.div
              key={index}
              initial={{
                opacity:0,
                y:40
              }}
              whileInView={{
                opacity:1,
                y:0
              }}
              transition={{
                duration:0.5,
                delay:index*0.1
              }}
              viewport={{
                once:true
              }}
              className="bg-white p-8 rounded-2xl shadow-md"
            >

              <p className="text-gray-600 leading-7">
                "{item.message}"
              </p>


              <div className="mt-6">

                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>

                <p className="text-blue-700">
                  {item.role}
                </p>

              </div>


            </motion.div>

          ))}

        </div>


      </div>

    </section>
  );
};


export default Testimonials;