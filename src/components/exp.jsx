import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import Title from "./Title";

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
  }
];

const Exp = () => {
  const { theme } = useContext(ThemeContext);

  return (
  <section
  id="experience"
  className={`w-full py-20 border-b-[1px] ${
    theme === 'dark' 
      ? 'border-b-bodyColor-dark/50' 
      : 'border-b-bodyColor-light/50'
  } scroll-mt-[100px]`}
>
  {/* ✅ Center Title on mobile */}
  <div className="w-full flex flex-col items-center justify-center text-center">
    <Title title="Professional Experience" des="Work History" />
  </div>

  {/* Experience cards */}
  <div className="flex flex-col gap-12 mt-10">
    {experiences.map((exp, index) => (
      <div key={index} className={`flex flex-col md:flex-row items-center gap-8`}>
        {/* Company Logo */}
        <div className="w-32 h-32 bg-fontColor-dark/50 dark:bg-fontColor-dark/90 flex justify-center items-center rounded-3xl shadow-2xl">
          <img
            src={exp.logo}
            alt={`${exp.company} Logo`}
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Experience Info */}
        <div className="flex-1 bg-fontColor-dark/20 dark:bg-fontColor-dark/20 p-6 rounded-xl shadow-2xl">
          <h3 className="text-xl font-bold text-designColor-light dark:text-designColor-dark">{exp.company}</h3>
          <p className="text-lg text-fontColor-light/70 dark:text-fontColor-dark/70 mb-3">{exp.period}</p>
          <ul className="list-disc list-inside text-fontColor-light dark:text-fontColor-dark space-y-2">
            {exp.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</section>
  );
}

export default Exp;
