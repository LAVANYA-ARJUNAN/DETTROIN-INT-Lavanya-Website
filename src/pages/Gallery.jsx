import { motion } from "framer-motion";

const Gallery = () => {

  const images = [
    {
      title: "Modern Classroom",
      image: "https://placehold.co/600x400"
    },
    {
      title: "School Campus",
      image: "https://placehold.co/600x400"
    },
    {
      title: "Science Laboratory",
      image: "https://placehold.co/600x400"
    },
    {
      title: "Sports Activities",
      image: "https://placehold.co/600x400"
    },
    {
      title: "Library",
      image: "https://placehold.co/600x400"
    },
    {
      title: "School Events",
      image: "https://placehold.co/600x400"
    }
  ];


  return (
    <div className="pt-32 pb-20">

      {/* Heading */}
      <div className="text-center px-6">

        <p className="text-blue-700 font-semibold">
          OUR GALLERY
        </p>

        <h1 className="text-5xl font-bold mt-4">
          Moments From Our School Life
        </h1>

        <p className="mt-5 text-gray-600">
          Explore our campus, activities and memorable events.
        </p>

      </div>


      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">


        {images.map((item,index)=>(

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
            className="overflow-hidden rounded-2xl shadow-lg bg-white"
          >

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover hover:scale-110 transition duration-500"
            />


            <div className="p-5">

              <h2 className="font-bold text-xl">
                {item.title}
              </h2>

              <p className="text-gray-600 mt-2">
                School memories and experiences.
              </p>

            </div>


          </motion.div>

        ))}


      </div>


    </div>
  );
};


export default Gallery;