import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="bg-gradient-to-tl from-blue-50 via-white to-purple-50 py-20 px-4"
      id="contact"
    >
      <div
        className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-xl"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          <span className="text-blue-600">Contact</span> Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg bg-gray-100 px-4 pt-6 pb-2 text-gray-900 focus:outline-none "
            />
            <label className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-600">
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg bg-gray-100 px-4 pt-6 pb-2 text-gray-900 focus:outline-none "
            />
            <label className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-600">
              Email Address
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-lg bg-gray-100 px-4 pt-6 pb-2 text-gray-900 focus:outline-none  resize-none"
            ></textarea>
            <label className="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-600">
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 w-full sm:w-auto mx-auto"
          >
            <FiSend className="text-lg" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
