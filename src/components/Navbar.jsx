import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "testimonials", "contact"];
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 80) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}

        <div className="text-2xl font-bold text-black">
          <span className="text-blue-500">ABC</span> Company
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          {["about", "testimonials", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`hover:text-blue-600 transition ${
                activeSection === id ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <nav className="flex flex-col gap-4">
            {["hero", "about", "testimonials", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`hover:text-blue-600 transition ${
                  activeSection === id ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
