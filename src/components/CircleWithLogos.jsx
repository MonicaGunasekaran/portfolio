import React from "react";

const logos = [
  "/assets/java.png",
  "/assets/sql.png",
  "/assets/figma.png",
  "/assets/github.png",
  "/assets/reactLogo.png",
  "/assets/iot.png",
];

const DigitalToolbox = () => {
  return (
    <div className="flex items-center justify-start min-h-screen w-full px-10 gap-[200px]">
      {/* Circle with Rotating Effect */}
      <div className="relative w-[650px] h-[650px] flex justify-center items-center 
                bg-designColor-light rounded-full shadow-lg 
                transition-colors duration-700 ease-in-out 
                hover:rotate-[360deg] hover:bg-designColor-light/90">

        {/* Logos positioned in a circular layout */}
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className={`absolute w-[130px] h-[130px] object-contain
              ${index === 0 ? "top-[10%] left-[50%] -translate-x-1/2 -translate-y-1/2" : ""}
              ${index === 1 ? "top-[30%] left-[85%] -translate-x-1/2 -translate-y-1/2" : ""}
              ${index === 2 ? "top-[65%] left-[85%] -translate-x-1/2 -translate-y-1/2" : ""}
              ${index === 3 ? "top-[85%] left-[50%] -translate-x-1/2 -translate-y-1/2" : ""}
              ${index === 4 ? "top-[65%] left-[15%] -translate-x-1/2 -translate-y-1/2" : ""}
              ${index === 5 ? "top-[30%] left-[15%] -translate-x-1/2 -translate-y-1/2" : ""}
            `}
          />
        ))}
      </div>

      {/* Right Side Content */}
      <div className="flex-grow min-w-[300px] min-h-[250px] -mt-[650px]">
        <h2 className="text-4xl font-light text-designColor-light dark:text-designColor-dark mt-[300px] ml-5">My Digital Toolbox</h2>
        <ul className="mt-5 pl-10 list-disc space-y-3">
          <li className="text-xl font-light text-fontColor-light dark:text-fontColor-dark ml-24">Java</li>
          <li className="text-xl font-light text-fontColor-light dark:text-fontColor-dark ml-24">SQL</li>
          <li className="text-xl font-light text-fontColor-light dark:text-fontColor-dark ml-24">Python</li>
          <li className="text-xl font-light text-fontColor-light dark:text-fontColor-dark ml-24">JavaScript</li>
          <li className="text-xl font-light text-fontColor-light dark:text-fontColor-dark ml-24">React</li>
          <li className="text-xl font-light text-fontColor-light dark:text-fontColor-dark ml-24">Git</li>
        </ul>

      </div>
    </div>
  );
};

export default DigitalToolbox;
