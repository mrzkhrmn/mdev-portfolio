import { motion } from "framer-motion";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import resume from "/MirzaResume.pdf";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const Contact = () => {
  const form = useRef();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  function sendEmail(e) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    emailjs
      .sendForm("service_jn9lpee", "template_ub1uq78", form.current, {
        publicKey: "z1RjgFzmSSN1A5iYo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
        }
      );
  }

  return (
    <motion.div
      className="h-full max-w-[1366px] m-auto flex items-center gap-[50px]"
      variants={variants}
      initial="initial"
      whileInView={"animate"}
    >
      <motion.div
        className="flex-1 flex flex-col gap-[40px]"
        variants={variants}
      >
        <motion.h1
          variants={variants}
          className="text-[100px] font-semibold leading-[96px]"
        >
          Let&apos;s work together!
        </motion.h1>
        <motion.div variants={variants}>
          <h2 className="font-semibold text-2xl">Mail</h2>
          <span className="font-[300]">mrzkhrmn1@gmail.com</span>
        </motion.div>
        <motion.div variants={variants}>
          <h2 className="font-semibold text-2xl">Address</h2>
          <span className="font-[300]">Istanbul/Maltepe Turkey</span>
        </motion.div>
        <motion.div variants={variants}>
          <h2 className="font-semibold text-2xl">Phone</h2>
          <span className="font-[300]">+90 531 205 5650</span>
        </motion.div>
        <motion.div variants={variants}>
          <a
            download={resume}
            href={resume}
            className="flex w-[200px] items-center gap-1 bg-orange-400 text-black rounded-lg px-6 py-2 transition duration-200 hover:bg-orange-500"
          >
            <span className="text-lg font-semibold">Download CV</span>{" "}
            <HiOutlineDocumentDownload className="text-3xl" />
          </a>
        </motion.div>
      </motion.div>
      <div className="flex-1">
        <form
          className="flex flex-col gap-[20px]"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            className="p-5 bg-transparent border border-white text-white rounded-lg"
            required
            placeholder="Name"
            name="name"
          />
          <input
            type="email"
            className="p-5 bg-transparent border border-white text-white rounded-lg"
            required
            placeholder="Email"
            name="email"
          />
          <textarea
            rows={8}
            required
            placeholder="Message"
            name="message"
            className="p-5 bg-transparent border border-white text-white rounded-lg"
          />
          <button className="bg-orange-400 text-black py-4 font-bold">
            Submit
          </button>
          <p className={`text-${success === true ? "green" : "red"}-500`}>
            {error && "Failed"}
            {success && "Success"}
          </p>
        </form>
      </div>
    </motion.div>
  );
};
