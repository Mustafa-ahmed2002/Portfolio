"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
const projectsInfo = [
  {
    id: 1,
    title: "React Movie App",
    description:
      "Crafted a dynamic movie database website using React, integrated with TMDB API, and implemented intuitive search functionality for a seamless cinematic exploration.",
    image: "/images/ReactMovie.png",
    gitUrl: "https://github.com/Mustafa-ahmed2002/Aon-React-Movie-App",
    previewUrl: "https://aon-react-movie-app-b3gu.vercel.app/",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description:
      "Developed a dynamic admin dashboard with Vite, React, and Ant Design, integrating seamlessly with a Fake Store API for streamlined product management.",
    image: "/images/Admin.png",
    gitUrl: "https://github.com/Mustafa-ahmed2002/AON_ADMINTALBE",
    previewUrl: "https://aon-admintalbe.vercel.app/",
  },
  {
    id: 3,
    title: "Blog App",
    description:
      "Built a dynamic blog app with Next.js, featuring advanced routing and data fetching for an enhanced user experience.",
    image: "/images/blog.png",
    gitUrl: "https://github.com/Mustafa-ahmed2002/Next-API-Blog",
    previewUrl: "https://aon-landing-page-xv1r.vercel.app/",
  },
  {
    id: 4,
    title: "Pos App",
    description:
      "Developed a Full-Stack POS System App using Prisma and Next.js, streamlining restaurant operations with an intuitive interface for product management, dynamic pricing, and detailed order tracking.",
    image: "/images/pos.png",
    gitUrl: "https://github.com/Mustafa-ahmed2002/pos-aon",
    previewUrl: "https://pos-aon-mustafa-ahmed2002s-projects.vercel.app/",
  },
];
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
      <h2 className="flex items-center justify-center pb-10 text-4xl">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md-gap-12">
        {projectsInfo.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              imgUrl={project.image}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
