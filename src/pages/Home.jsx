import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Features from "../components/Features/Features";
import Gallery from "../components/Gallery/Gallery";
import Testimonials from "../components/Testimonials/Testimonials";
import AdmissionCTA from "../components/AdmissionCTA/AdmissionCTA";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Testimonials />
      <AdmissionCTA />
    </>
  );
};

export default Home;