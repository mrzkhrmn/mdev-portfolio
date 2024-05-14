import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="h-full flex flex-col justify-between"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div
        className="flex-1 self-end flex items-center gap-5 "
        variants={variants}
      >
        <p className="font-[200] text-lg text-gray-400 text-right">
          I focus on proactive solutions
          <br /> and help each other
        </p>
        <hr className="w-[500px] border-t border-t-gray-400" />
      </motion.div>
      <motion.div
        className=" flex-[2] flex flex-col items-center gap-6"
        variants={variants}
      >
        <div className="flex items-center gap-[50px]">
          <h1 className="text-[36px] sm:text-8xl font-thin">
            <motion.b whileHover={{ color: "orange" }}>Practicle</motion.b>{" "}
            Solutions
          </h1>
        </div>
        <div className="flex items-center gap-[50px]">
          <h1 className="text-[36px] sm:text-8xl font-thin">
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <a className="w-[150px] h-[50px] sm:w-[300px] sm:h-[100px] text-center content-center bg-orange-400 text-black rounded-full text-lg sm:text-2xl px-16 uppercase">
            What I Do?
          </a>
        </div>
      </motion.div>
      <motion.div
        className="max-w-[1366px] m-auto flex flex-col sm:flex-row"
        variants={variants}
      >
        <motion.div
          className="p-[10px] gap-8 sm:px-[50px] sm:py-[36px]  sm:border sm:border-gray-400 flex flex-col justify-between"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="font-semibold">Problem Solving</h2>
          <p>
            We face many problems, big and small, on a daily basis. And as a
            developer, I need to produce the fastest and most practical
            solutions to these problems.
          </p>
          <a className="w-full text-center bg-orange-400 text-black py-3 cursor-pointer">
            Go
          </a>
        </motion.div>
        <motion.div
          className="p-[10px] gap-8 sm:px-[50px] sm:py-[36px]  sm:border sm:border-gray-400 flex flex-col justify-between"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="font-semibold">Love of Learning</h2>
          <p>
            As a developer, learning is an endless process for me. My greatest
            pleasure is to apply what I have learned, to improve upon the old
            ones, to share them with other people and to teach them a little
            something.
          </p>
          <a className="w-full text-center bg-orange-400 text-black py-3 cursor-pointer">
            Go
          </a>
        </motion.div>
        <motion.div
          className="p-[10px] gap-8 sm:px-[50px] sm:py-[36px]  sm:border sm:border-gray-400 flex flex-col justify-between"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="font-semibold">Team Player</h2>
          <p>
            A developer has no friends other than another developer! Joking
            aside, just as I believe that I will develop a project on my own, I
            also believe that someone more experienced than me will develop
            it.It is important to be open minded in this regard.
          </p>
          <a className="w-full text-center bg-orange-400 text-black py-3 cursor-pointer">
            Go
          </a>
        </motion.div>
        <motion.div
          className="p-[10px] gap-8 sm:px-[50px] sm:py-[36px]  sm:border sm:border-gray-400 flex flex-col justify-between"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="font-semibold">Creativity</h2>
          <p>
            There is nothing impossible! I think ideal software developers must
            be able to think outside the box and be imaginative. On the other
            hand, we should likewise be aware of when to utilize some answers to
            technical challenges and stay away from reinventing the wheel.
          </p>
          <a className="w-full text-center bg-orange-400 text-black py-3 cursor-pointer">
            Go
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
