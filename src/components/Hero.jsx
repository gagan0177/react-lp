import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
const slides = [
  {
    img: "/images/slide1.jpg",
    heading: "Build Smarter, Grow Faster",
    subheading:
      "Turn your vision into reality with intuitive tools designed for modern businesses.",
    cta: "Start Your Journey",
  },
  {
    img: "/images/slide2.jpg",
    heading: "Connect. Collaborate. Succeed.",
    subheading:
      "Empower your remote teams with real-time collaboration and streamlined workflows.",
    cta: "Explore Features",
  },
  {
    img: "/images/slide3.jpg",
    heading: "Maximize Every Minute",
    subheading:
      "Stay focused with smart automation, task management, and real-time insights.",
    cta: "Boost Productivity",
  },
];
const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative w-full h-[75vh] md:h-[80vh]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-full bg-cover bg-center flex items-center justify-center relative"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="relative text-center text-white px-4 max-w-2xl">
                <motion.h1
                  key={`heading-${i}-${activeIndex}`}
                  className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {slide.heading}
                </motion.h1>

                <motion.p
                  key={`subheading-${i}-${activeIndex}`}
                  className="text-lg md:text-xl mb-6 drop-shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {slide.subheading}
                </motion.p>

                <motion.button
                  key={`button-${i}-${activeIndex}`}
                  className="bg-[#2563eb] hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold transition duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  {slide.cta}
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
