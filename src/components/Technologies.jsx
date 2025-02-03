import { BiLogoPostgresql } from "react-icons/bi";
import { DiDjango, DiJava, DiPython } from "react-icons/di";
import { FaAws, FaDocker } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";

const iconVarinats = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarinats(2.5)}
          className="p-4 justify-items-center"
        >
          <DiPython className="text-7xl  text-sky-700" size={50} />
          <p>Python</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarinats(2)}
          className="p-4 justify-items-center"
        >
          <DiJava className="text-7xl"  size={70}/>
          <p>Java</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarinats(6)}
          className="p-4 justify-items-center"
        >
          <SiJavascript className="text-7xl text-yellow-400"size={45} />
          <p>JavaScript</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarinats(6)}
          className="p-4 justify-items-center"
        >
          <DiDjango className="text-7xl" size={55}/>
          <p>Django</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarinats(6)}
          className="p-4 justify-items-center"
        >
          <RiReactjsFill className="text-7xl text-cyan-600" size={50} />
          <p>React</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarinats(6)}
          className="p-4 justify-items-center"
        >
          <RiTailwindCssFill className="text-7xl text-sky-400" size={50}/>
          <p>Tailwind CSS</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarinats(4)}
          className="p-4 justify-items-center"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" size={50}/>
          <p>SQL</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarinats(5)}
          className="p-4 justify-items-center"
        >
          <SiMongodb className="text-7xl text-lime-600" size={50}/>
          <p>MongoDB</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarinats(3)}
          className="p-4 justify-items-center"
        >
          <FaDocker className="text-7xl text-blue-600" size={50}/>
          <p>Docker</p>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarinats(4)}
          className="p-4 justify-items-center"
        >
          <FaAws className="text-7xl text-sky-700" size={50}/>
          <p>AWS Cloud</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
