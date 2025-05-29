import { motion } from "framer-motion";
import { useContext } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { ThemeContext } from "../context/themeContext";

const ProjCard = ({
  title,
  des,
  src,
  projLink,
  gitLink,
  className,
  iconClass,
  tags = [],
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`w-full p-6 rounded-xl flex flex-col bg-white dark:bg-gray-800 shadow-lg ${className} ${
        theme === "dark"
          ? "text-gray-300"
          : "text-gray-800"
      }`}
    >
      <div className="relative w-full h-[180px] overflow-hidden rounded-lg shadow-inner">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${iconClass} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
        ></div>
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-col mt-6 gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex gap-3">
            {gitLink && (
              <a
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:text-designColor dark:hover:text-designColor-dark transition"
              >
                <BsGithub size={20} />
              </a>
            )}
            {projLink && (
              <a
                href={projLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:text-designColor dark:hover:text-designColor-dark transition"
              >
                <FaGlobe size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm leading-relaxed">{des}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-designColor/20 text-designColor dark:bg-designColor-dark/20 dark:text-designColor-dark text-xs font-semibold px-3 py-1 rounded-full select-none"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjCard;
