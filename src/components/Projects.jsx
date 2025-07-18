import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="flex flex-col gap-10">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-10 flex flex-wrap lg:justify-center lg:gap-10">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a href={project.url} target="_blank">
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded border-2 bg-stone-300 border-stone-400"
              />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-2xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-900 dark:text-stone-400">{project.description}</p>
              <div className="flex flex-wrap">
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 my-1 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300"
                  key={index}
                >
                  {tech}
                </span>
              ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
