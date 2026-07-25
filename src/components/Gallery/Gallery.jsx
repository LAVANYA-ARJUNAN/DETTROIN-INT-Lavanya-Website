import { motion } from "framer-motion";

const Gallery = () => {

  const images = [
    {
      src: "https://placehold.co/600x400",
      title: "Smart Classroom"
    },
    {
      src: "https://placehold.co/600x400",
      title: "School Campus"
    },
    {
      src: "https://placehold.co/600x400",
      title: "Science Lab"
    },
    {
      src: "https://placehold.co/600x400",
      title: "Sports Activity"
    },
    {
      src: "https://placehold.co/600x400",
      title: "Library"
    },
    {
      src: "https://placehold.co/600x400",
      title: "School Events"
    }
  ];


  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-blue-700 font-semibold">
            OUR GALLERY
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Explore Our School Life
          </h2>

        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((image,index)=>(

            <motion.div
              key={index}
              initial={{
                opacity:0,
                scale:0.9
              }}
              whileInView={{
                opacity:1,
                scale:1
              }}
              transition={{
                duration:0.5
              }}
              viewport={{
                once:true
              }}
              className="group overflow-hidden rounded-2xl shadow-lg"
            >

              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />


              <div className="p-5">

                <h3 className="font-bold text-lg">
                  {image.title}
                </h3>

              </div>


            </motion.div>

          ))}

        </div>


      </div>

    </section>
  );
};


export default Gallery;