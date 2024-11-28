import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsBrightnessHighFill, BsFillMoonFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { DETAILS } from "../constants";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          {/* <img src={logo} className="mx-2" width={70} height={33} alt="Logo" /> */}
          <motion.p
            className="font-mali text-xl"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Hi there!
          </motion.p>
        </a>
      </div>
     
     <div className="flex items-center gap-10 mr-20">
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href={DETAILS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={DETAILS.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
      </div>
      {darkMode ?  <BsBrightnessHighFill className="cursor-pointer text-2xl" onClick={() => setDarkMode(!darkMode)}/>
      : 
      <BsFillMoonFill
        className="cursor-pointer text-2xl"
        onClick={() => setDarkMode(!darkMode)} 
        />
      }
      </div>
    </nav>
  );
};

export default Navbar;
