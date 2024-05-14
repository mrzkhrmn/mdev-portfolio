import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Sidebar } from "./Sidebar/Sidebar";

export const Navbar = () => {
  return (
    <nav className="h-[100px]">
      <Sidebar />
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        <div className="flex flex-shrink-0 items-center">
          <h1 className="text-2xl font-light">M-Dev</h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://github.com/mrzkhrmn?tab=repositories"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mirza-kahraman-577395254/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
};
