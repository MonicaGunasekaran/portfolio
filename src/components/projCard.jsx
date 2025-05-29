import { motion } from "framer-motion";
import { useContext } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { ThemeContext } from "../context/themeContext";

const ProjCard = ({ title, des, src, projLink, gitLink, className, iconClass }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full p-6 rounded-xl flex flex-col group ${
        theme === 'dark' 
          ? 'bg-bodyColor-light/20 shadow-2xl' 
          : 'bg-fontColor-dark/40 shadow-2xl'
      } hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      <div className="w-full h-[180px] overflow-hidden rounded-lg relative shadow-inner  ">
        <div className={`absolute inset-0 bg-gradient-to-br ${iconClass} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
        <img
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 duration-300"
          src={src}
          alt={title}
        />
      </div>

      <div className="w-full mt-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-lg xl:text-xl font-bold ${
            theme === 'dark' ? 'text-fontColor-dark' : 'text-fontColor-light'
          }`}>
            {title}
          </h3>
          <div className="flex gap-3">
            {gitLink && (
              <a
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repository"
              >
                <span className={`text-lg w-10 h-10 rounded-full inline-flex justify-center items-center hover:text-designColor dark:hover:text-designColor-dark transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-bodyColor-dark/80 text-fontColor-dark/80' 
                    : 'bg-bodyColor-light/80 text-fontColor-light/80'
                }`}>
                  <BsGithub />
                </span>
              </a>
            )}
            {projLink && (
              <a
                href={projLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
              >
                <span className={`text-lg w-10 h-10 rounded-full inline-flex justify-center items-center hover:text-designColor dark:hover:text-designColor-dark transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-bodyColor-dark/80 text-fontColor-dark/80' 
                    : 'bg-bodyColor-light/80 text-fontColor-light/80'
                }`}>
                  <FaGlobe />
                </span>
              </a>
            )}
          </div>
        </div>

        <p className={`text-sm xl:text-base tracking-wide leading-relaxed ${
          theme === 'dark' 
            ? 'text-fontColor-dark/80 group-hover:text-fontColor-dark' 
            : 'text-fontColor-light/80 group-hover:text-fontColor-light'
        } transition-colors duration-300`}>
          {des}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjCard;
