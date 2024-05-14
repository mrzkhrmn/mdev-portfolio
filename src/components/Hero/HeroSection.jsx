import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-580%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
};

export const HeroSection = () => {
  return (
    <div className="hero">
      <div className=" max-w-[1360px] h-full m-auto">
        <motion.div
          className=" h-full w-[100%] flex flex-col justify-center gap-10"
          variants={textVariants}
          initial={"initial"}
          animate={"animate"}
        >
          <motion.h2
            className=" text-3xl text-purple-700 tracking-[10px] uppercase"
            variants={textVariants}
          >
            Mirza Kahraman
          </motion.h2>
          <motion.h1 className="text-[88px]" variants={textVariants}>
            Frontend and MERN <br /> Stack Developer
          </motion.h1>
          <motion.div>
            <motion.button
              className="p-5 border border-white rounded-md bg-transparent text-white mr-[20px] cursor-pointer font-light z-50"
              variants={textVariants}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              className="p-5 border border-white rounded-md bg-transparent text-white mr-[20px] cursor-pointer font-light z-50"
              variants={textVariants}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute text-[50vh] bottom-[-120px] whitespace-nowrap text-[#ffffff09] w-[50%] font-bold"
        variants={sliderVariants}
        initial={"initial"}
        animate={"animate"}
      >
        Proactive Efficient Collabrate
      </motion.div>
    </div>
  );
};
