import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constans";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block z-[51]">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            onClick={toggleMenu}
            className="cursor-pointer z-50"
          />
        </div>
      </nav>
      {isMenuOpen && (
        <div
          className="absolute top-0 pt-[30%] right-0 w-[50%] h-[100vh] bg-[#ededed] z-50 
        shadow-lg max-lg:block max-md:text-3xl max-sm:text-2xl text-4xl transition-transform	"
        >
          <ul className="flex flex-col items-center gap-16 py-4">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal  text-slate-gray hover:text-coral-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
