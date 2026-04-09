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
    window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
  };

  return (
    <nav
      style={{
        background: scrolled ? "rgba(17,17,17,0.9)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[13px] font-medium tracking-tight transition-colors"
          style={{ color: "var(--text-primary)" }}
        >
          NVF |{" "}
          <span className="font-semibold">Nikolai Villanueva Fredriksen</span>
        </Link>
        <div className="flex items-center gap-6">
          {["projects", "experience", "about"].map((section) => (
            <a
              key={section}
              onClick={() => scrollToSection(section)}
              className="cursor-pointer text-[13px] transition-colors hover:text-[var(--text-primary)]"
              style={{ color: "var(--text-faint)" }}
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
