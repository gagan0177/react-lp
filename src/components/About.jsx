import React from "react";

const About = () => {
  return (
    <section className="py-16 px-4 bg-white" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="flex-1" data-aos="fade-right">
          <img
            src="/images/about.jpg"
            alt="About"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1" data-aos="fade-left">
          <h2
            className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 leading-tight"
            data-aos="fade-up"
          >
            About <span className="text-gray-800">Us</span>
          </h2>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            We’re a passionate team building intuitive solutions to help teams
            collaborate, grow, and succeed. Our product is designed to simplify
            workflows, increase productivity, and deliver exceptional user
            experiences — whether you’re a solo creator or part of a global
            enterprise.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Trusted by thousands, we prioritize performance, simplicity, and
            innovation — all while keeping your needs at the heart of what we
            do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
