import React from "react";
import { FaReact } from "react-icons/fa";

const skillsList = [
  { title: "HTML" },
  { title: "CSS" },
  { title: "JavaScript" },
  { title: "React" },
  { title: "NextJS" },
  { title: "Node.js" },
  { title: "Express.js" },
  { title: "Next Api" },
  { title: "Prisma" },
  { title: "PostgreSQL" },
  { title: "Git" },
  { title: "GitHub" },
];

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="text-4xl text-white text-center mb-10">Skills</h1>
      <div className="flex flex-wrap justify-center items-center mb-10 max-w-full scroll-mt-28 text-center sm:mb-40 gap-8 ">
        {skillsList.map((skill, i) => (
          <div className="text-lg text-gray-800 mb-3" key={i}>
            <p className="bg-white borderBlack rounded-xl px-5 py-3 bg-white/10 text-white/80">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
