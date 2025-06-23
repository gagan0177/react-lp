import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BackToTop from "./components/BackToTop"; // optional
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="pt-2">
        <Hero />
        <About />
        <Testimonials />
        <ContactForm />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
