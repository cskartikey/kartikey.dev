"use client";
import Link from "next/link";
import React, { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "gallery",
    },
    {
      id: 3,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-24 py-12 dark:text-white dark:bg-background-black fixed nav backdrop-blur-xl">
      <div>
        <h1 className="text-5xl font-playfair ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Kartikey
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex font-playfair">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium bg- dark:text-white hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link} className="hover:bg-nav-black p-2 rounded-lg">
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      ></div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
