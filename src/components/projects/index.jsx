import { useContext } from "react";
import Title from "../Title";
import { ThemeContext } from "../../context/themeContext";
import ProjCard from "../projCard";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="projects"
      className={`w-full py-20 border-b-[1px] ${
        theme === 'dark' ? 'border-b-bodyColor-dark/50' : 'border-b-bodyColor-light/50'
      } scroll-mt-[100px]`}
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
        <ProjCard
          title="Active Prosthetic Ankle"
          des="An IoT-based prosthetic ankle with real-time adaptability."
          src="/projects/image.png"
          className="hover:border-designColor-light dark:hover:border-designColor-dark border-2 border-transparent transition-all duration-300"
          iconClass="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg"
        />
        <ProjCard
          title="BLOG Website with CRUD"
          des="A full-stack blog website using React and Firebase."
          src="/assets/reactLogo.png"
          className="hover:border-designColor-light dark:hover:border-designColor-dark border-2 border-transparent transition-all duration-300"
          iconClass="bg-gradient-to-br from-cyan-400 to-blue-600 p-2 rounded-lg"
        />
        <ProjectsCard
          title="Travel App"
          des="A travel planning app featuring dynamic itineraries."
          src="/assets/reactLogo.png"
          className="hover:border-designColor-light dark:hover:border-designColor-dark border-2 border-transparent transition-all duration-300"
          iconClass="bg-gradient-to-br from-cyan-400 to-blue-600 p-2 rounded-lg"
        />
        <ProjectsCard
          title="Registration Form"
          des="User-friendly registration form integrated with MySQL."
          src="/assets/sql.png"
          className="hover:border-designColor-light dark:hover:border-designColor-dark border-2 border-transparent transition-all duration-300"
          iconClass="bg-gradient-to-br from-amber-500 to-orange-600 p-2 rounded-lg"
        />
        <ProjectsCard
          title="Coffee Shop App Design"
          des="A UI/UX design for a digital coffee ordering system."
          src="/assets/figma.png"
          className="hover:border-designColor-light dark:hover:border-designColor-dark border-2 border-transparent transition-all duration-300"
          iconClass="bg-gradient-to-br from-pink-500 to-purple-600 p-2 rounded-lg"
        />
        <ProjectsCard
          title="Library Management System"
          des="A Java-based system for managing book transactions."
          src="/assets/java.png"
          className="hover:border-designColor-light dark:hover:border-designColor-dark border-2 border-transparent transition-all duration-300"
          iconClass="bg-gradient-to-br from-red-500 to-amber-600 p-2 rounded-lg"
        />
      </div>
    </section>
  );
};

export default Projects;
