import About from "./sections/About";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Portifolio from "./sections/Portifolio";
import Services from "./sections/Services";
import Team from "./sections/Team";
import Testimonial from "./sections/Testimonial";
import WhyChooseUs from "./sections/WhyChooseUs";
import 'swiper/css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Portifolio />
      <Team />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
