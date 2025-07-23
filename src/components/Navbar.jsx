import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Nikolai Villanueva Fredriksen{" "}
            <span className="sm:block hidden">| Developer Portfolio</span>
          </p>
        </Link>
        <div className="bg-primary text-white p-2">
          Testing bg-primary (should be dark blue)
        </div>
        <div className="bg-secondary text-white p-2">
          Testing bg-secondary (should be light purple)
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }
              hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                console.log("Clicked:", link.title); // Add this line
                console.log("Current active:", active); // Add this line
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
