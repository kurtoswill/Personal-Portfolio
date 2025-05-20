"use client";
import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Skills", href: "#" },
  { name: "Portfolio", href: "#" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-background">
      {/* Logo */}
      <div>
        <div className="w-12 h-12 rounded-full bg-background shadow-lg" />
      </div>
      {/* Navigation Links */}
      <ul className="flex gap-8 text-lg font-medium items-center text-black">
        {navLinks.map((link) => (
          <li key={link.name}>
            <div className="rounded-full transition hover:shadow-lg hover:scale-110 active:scale-100 active:shadow-none">
              <a
                href={link.href}
                onClick={() => setActive(link.name)}
                className="block px-3 py-1"
              >
                <span className={active === link.name ? "font-semibold" : ""}>
                  {link.name}
                </span>
              </a>
            </div>
          </li>
        ))}
      </ul>
      {/* Contact Me Button */}
      <a
        href="#"
        className="bg-background shadow-lg rounded-full px-6 py-2 font-bold text-lg text-black transition hover:shadow-none hover:scale-95 active:scale-100 active:shadow-lg"
      >
        Contact Me
      </a>
    </nav>
  );
};

export default Navbar;
