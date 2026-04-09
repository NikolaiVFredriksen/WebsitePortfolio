import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 60,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/90 backdrop-blur-sm border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[13px] text-[#e8e5e0] font-medium tracking-tight hover:text-white transition-colors"
        >
          NVF |{" "}
          <span className="font-semibold">Nikolai Villanueva Fredriksen</span>
        </Link>
        <div className="flex items-center gap-6">
          <a
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer text-[13px] text-[#555] hover:text-[#e8e5e0] transition-colors"
          >
            projects
          </a>
          <a
            onClick={() => scrollToSection("experience")}
            className="cursor-pointer text-[13px] text-[#555] hover:text-[#e8e5e0] transition-colors"
          >
            experience
          </a>
          <a
            onClick={() => scrollToSection("about")}
            className="cursor-pointer text-[13px] text-[#555] hover:text-[#e8e5e0] transition-colors"
          >
            about
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
