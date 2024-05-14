import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Todo App",
    description:
      "This is my first live project. It is an application where you list your daily or long-term to-do items so that you do not forget. Tailwindcss and redux tool kit were used while making it. It has functions such as searching for your to-do items and filtering them as completed or incomplete. Since it was the first application I used RTK, it had a great impact on me.",
    image: "/todoApp.png",
    href: "https://todo-app-wzba.onrender.com/",
  },
  {
    id: 2,
    title: "Berserkr Shop",
    description:
      "This is my first MERN stack project.Actually, this application is a website where a streamer I like sells its own products. I saw and liked its design very much, and I tried to make a copy to practice and improve myself in the backend. It still has some minor problems, but it made me a little tired, so I turned to other projects. Login, logout, signup, google auth, user update, adding and removing items to the cart and amount calculation functionalitys are available. (It may take time to load)",
    image: "/berserkr.png",
    href: "https://berserkr-shop-mern.onrender.com",
  },
  {
    id: 3,
    title: "M-Estate",
    description:
      "Modern MERN stack Estate project that has completed its purpose. This is a house buying, selling and renting application. It is an application that makes me feel like I am improving myself. It has functions such as uploading and updating images using firebase, filtering in the backend using URLs, and sending e-mails to the publisher. It is a similar but much more advanced application to the previous one. (It may take time to load)",
    image: "/mestate.png",
    href: "https://m-estate-15ds.onrender.com",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="flex items-center justify-center w-full h-full overflow-hidden">
        <div className="max-w-[1366px] h-full m-auto flex gap-[50px] items-center justify-center">
          <div className="flex-1 h-[50%] rounded-lg overflow-hidden" ref={ref}>
            <img
              src={item.image}
              alt="portfolioImage"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div className="flex-1 flex flex-col gap-[30px]" style={{ y }}>
            <h2 className="text-[72px]">{item.title}</h2>
            <p className="text-gray-400 text-[20px]">{item.description}</p>
            <a
              className="bg-orange-400 border-none rounded-full p-3 w-[200px] text-black text-center font-semibold"
              target="_blank"
              href={item.href}
            >
              See Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative" ref={ref}>
      <div className="sticky top-0 left-0 pt-[50px] text-center text-orange-400 text-[36px]">
        <h1>Featured Works</h1>
        <motion.div
          className="h-[5px] bg-white"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item._id} item={item} />
      ))}
    </div>
  );
};
