import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext"; // adjust path if needed

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const isLight = theme === "light";

  return (
    <div
      className={`w-full py-6 px-6 h-auto grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-9 gap-8 transition-all duration-300 ${
        isLight ? "bg-bodyColor-light text-fontColor-light" : "bg-bodyColor-dark text-fontColor-dark"
      }`}
    >
      
      {/* Personal Info */}
      <div className="w-full h-full col-span-3">
        <h3 className="text-xl uppercase text-designColor dark:text-designColor-dark tracking-wider">
          Personal Info
        </h3>
        <ul className="flex flex-col gap-3 font-titleFont font-medium py-4 text-base">
          <li><strong>Profession:</strong> Student</li>
          <li><strong>Age:</strong> 22</li>
          <li><strong>Date of Birth:</strong> 25/09/2003</li>
          <li><strong>Marital Status:</strong>Single</li>
        </ul>
      </div>

      {/* Hobbies */}
      <div className="w-full h-full col-span-3">
        <h3 className="text-xl uppercase text-designColor dark:text-designColor-dark tracking-wider">
          Hobbies
        </h3>
        <ul className="flex flex-col gap-3 font-titleFont font-medium py-4 text-base">
          <li>Playing Chess</li>
          <li>Watching space-related videos & theories</li>
          <li>Pencil Sketching</li>
        </ul>
      </div>
      <div className="w-full h-full col-span-3">
        <h3 className="text-xl uppercase text-designColor dark:text-designColor-dark tracking-wider">
          Hobbies
        </h3>
        <ul className="flex flex-col gap-3 font-titleFont font-medium py-4 text-base">
          <li>Playing Chess</li>
          <li>Watching space-related videos & theories</li>
          <li>Pencil Sketching</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
