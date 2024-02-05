import Image from "next/image";
import React from "react";
import about from "../../../public/images/about.png";
const About = () => {
  return (
    <section id="about" className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="Ai image about coding in the clouds above high buildings"
          src={about}
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            I&apos;m a Frontend Developer with a knack for crafting interactive
            and responsive web applications. My toolkit includes JavaScript,
            React, NextJS, HTML, CSS, and Git. Eager to learn and grow,
            I&apos;ve also delved into the world of full-stack development,
            working with technologies like Node.js, Express, PostgreSQL, and
            Prisma. As a quick learner and a team player, I&apos;m always
            excited to collaborate on projects that push boundaries and create
            amazing user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
