import { FaBookOpen, FaLaptop, FaMicroscope } from "react-icons/fa";

const Academics = () => {

  const programs = [
    {
      icon:<FaBookOpen />,
      title:"Primary Education",
      desc:"Building strong foundations through creative learning."
    },
    {
      icon:<FaLaptop />,
      title:"Digital Learning",
      desc:"Technology-based classrooms for modern education."
    },
    {
      icon:<FaMicroscope />,
      title:"Science Programs",
      desc:"Practical learning through experiments and projects."
    }
  ];


  return (
    <div className="pt-32 pb-20">

      <div className="text-center px-6">

        <p className="text-blue-700 font-semibold">
          ACADEMICS
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Learning Beyond Classrooms
        </h1>

        <p className="mt-5 text-gray-600">
          Our curriculum encourages curiosity, creativity and innovation.
        </p>

      </div>


      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 mt-14">

        {programs.map((item,index)=>(

          <div
            key={index}
            className="p-8 bg-white shadow rounded-2xl"
          >

            <div className="text-4xl text-blue-700">
              {item.icon}
            </div>

            <h2 className="text-xl font-bold mt-5">
              {item.title}
            </h2>

            <p className="text-gray-600 mt-3">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Academics;