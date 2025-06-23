import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Gagandeep Singh",
    quote:
      "This product has transformed the way our team works. Simple, fast, and effective!",
    img: "/images/user1.jpg",
  },
  {
    id: 2,
    name: "Aman Singh",
    quote:
      "I love how intuitive and polished everything feels. Highly recommended!",
    img: "/images/user2.jpg",
  },
  {
    id: 3,
    name: "Happy Singh",
    quote:
      "Excellent design and great support. It’s the best tool we’ve used so far.",
    img: "/images/user3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16 px-4" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-blue-600 mb-12 leading-tight"
          data-aos="fade-up"
        >
          What <span className="text-gray-800"> Our Users </span>Say
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 text-left transform transition duration-300 hover:scale-105 hover:shadow-lg"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border border-gray-300"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                “{testimonial.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
