import React from "react";
const experiences = [
  {
    company: "ApproLabs",
    period: "Dec 2022 - June 2023",
    description: [
      "Created engaging and impactful technical content to drive brand visibility.",
      "Managed LinkedIn Sales Navigator for efficient lead generation and prospecting.",
      "Collaborated with teams to align marketing strategies with business goals."
    ],
    logo: "/assets/approlabs.png",
    reverse: false,
  },
  {
    company: "Atulah Power Solutions",
    period: "August 2023 - Present",
    description: [
      "Contributed to the dashboard project by optimizing data presentation and functionality.",
      "Created engaging digital content to enhance brand visibility and user engagement.",
      "Supported operational workflows by aligning technical and creative tasks effectively."
    ],
    logo: "/assets/atulah.png",
    reverse: true,
  }
];

export default function Experience() {
  return (
    <div className="py-10 px-8 bg-bodyColor-light dark:bg-bodyColor-dark">
      <h2 className="text-4xl font-bold text-designColor-light dark:text-designColor-dark text-center mb-10">🚀Experience That Shapes Me ✨</h2>

      <div className="flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <div key={index} className={`flex items-center gap-16 ${exp.reverse ? "flex-row-reverse" : ""}`}>
            {/* Diamond Logo */}
            <div className="w-48 h-48 bg-designColor-light/50 dark:bg-designColor-dark/50 flex justify-center items-center rounded-xl transform rotate-45 shadow-lg">
              <img
                src={exp.logo}
                alt={`${exp.company} Logo`}
                className="w-36 h-36 object-contain transform -rotate-45"
              />
            </div>

            {/* Experience Info */}
            <div className="w-[900px] bg-bodyColor-light/80 dark:bg-bodyColor-dark/80 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold italic text-designColor-light dark:text-designColor-dark">{exp.company}</h3>
              <p className="text-lg italic text-fontColor-light/70 dark:text-fontColor-dark/70">{exp.period}</p>
              <ul className="mt-3 list-disc list-inside text-fontColor-light dark:text-fontColor-dark">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
