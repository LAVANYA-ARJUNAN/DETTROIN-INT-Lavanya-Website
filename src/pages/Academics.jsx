import { FaBookOpen, FaLaptop, FaFlask, FaPalette } from "react-icons/fa";

const Academics = () => {

  const programs = [
    {
      icon: <FaBookOpen />,
      title: "Primary Education",
      desc: "Building strong foundations through creative learning and interactive activities."
    },
    {
      icon: <FaLaptop />,
      title: "Digital Learning",
      desc: "Smart classrooms and technology-based learning experiences for students."
    },
    {
      icon: <FaFlask />,
      title: "Science & Innovation",
      desc: "Practical experiments and research-based learning to encourage curiosity."
    },
    {
      icon: <FaPalette />,
      title: "Creative Development",
      desc: "Encouraging art, creativity, communication and personality development."
    }
  ];


  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-blue-700 font-semibold uppercase tracking-wider">
            Academics
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Learning Beyond Classrooms
          </h1>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Our academic approach focuses on knowledge, creativity,
            innovation and overall student development.
          </p>

        </div>



        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


          {programs.map((item,index)=>(

            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition"
            >

              <div className="text-4xl text-blue-700">
                {item.icon}
              </div>


              <h2 className="text-xl font-bold mt-5">
                {item.title}
              </h2>


              <p className="text-gray-600 mt-3 leading-7">
                {item.desc}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
};


export default Academics;