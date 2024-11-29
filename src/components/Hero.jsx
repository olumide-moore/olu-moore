import profilePic2 from "../assets/olumide_moore.webp"
import profilePic from "../assets/olumide_moore-black&white.webp";
import { DESCRIPTION } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Olumide Moore"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className=" flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 font-mali text-4xl tracking-tighter lg:text-8xl"
            >
              I am Olumide Moore
            </motion.h2>
            {/* <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-700 to-stone-500 dark:from-stone-300 dark:to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Backend Developer
            </motion.span> */}
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {DESCRIPTION}
            </motion.p>
            <div className="w-3/4 justify-center flex flex-wrap items-center gap-x-8">
              <div className="flex flex-wrap items-center justify-center">
                <div class="flex items-center space-x-2">
                  <div class="relative">
                    <img
                      src={profilePic2}
                      alt="Pic"
                      class="w-10 h-10 rounded-full"
                    />
                    <span class="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-100 "></span>
                  </div>
                </div>

                <p className="p-4">Available for work</p>
              </div>
              <motion.a
                variants={childVariants}
                href="Olumide%20Oluwole-Moore%20CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="dark:bg-white bg-black text-white rounded-full p-4 text-sm dark:text-stone-800"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
