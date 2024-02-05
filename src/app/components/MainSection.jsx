"use client";
import Image from "next/image";
import React from "react";
import memoji from "../../../public/images/memoji.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const MainSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="home" className=" ">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-600">
              {" "}
              Hello, I Am {""}
            </span>
            <TypeAnimation
              sequence={["Mustafa", 1000, "Frontend Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
            I'm a Frontend Wizard conjuring magic in the realm of user
            interfaces. Crafting enchanting web experiences with a touch of
            brilliance. Let's create magic together! ✨🚀
          </p>
          <div>
            <button
              onClick={scrollToContact}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black"
            >
              Contact Me
            </button>
            <a
              href="https://drive.usercontent.google.com/download?id=1GZia-9Kx7ncswP8IRMQeGz2luSy8eY7Z&export=download&authuser=0"
              download="Mustafa.pdf"
            >
              <button className="px-6 py-3  w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
                Download CV
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-5"
        >
          <div className="rounded-full bg-gradient-to-r from-white to-black-0 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={300}
              height={300}
              alt="memoji image"
              src={memoji}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainSection;
