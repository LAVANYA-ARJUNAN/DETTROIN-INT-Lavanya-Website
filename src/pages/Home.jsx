import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Features from "../components/Features/Features";
import Gallery from "../components/Gallery/Gallery";
import Testimonials from "../components/Testimonials/Testimonials";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Testimonials />
    </>
  );
};

export default Home;