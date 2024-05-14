import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div
      className="w-full h-full relative flex items-center justify-center overflow-hidden"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }} className="text-[100px]">
        {type === "services" ? "What I Do?" : "What we did?"}
      </motion.h1>
      <motion.div className="bg-[url('/mountains.png')] bg-cover bg-bottom w-full h-full absolute z-[3]"></motion.div>
      <motion.div
        className={` bg-cover bg-bottom w-full h-full absolute z-[2]`}
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div
        className="bg-[url('/stars.png')] bg-cover bg-bottom w-full h-full absolute z-[1]"
        style={{ x: yBg }}
      ></motion.div>
    </div>
  );
};
