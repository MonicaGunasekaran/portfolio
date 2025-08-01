import { useContext } from "react";
import Title from "../Title";
import { ThemeContext } from "../../context/themeContext";
import ProjCard from "../projCard";

const projectsData = [
  {
    title: "Active Prosthetic Ankle",
    des: "An IoT-based prosthetic ankle with real-time adaptability.",
    src: "/projects/image.png",
    iconClass: "from-blue-500 to-purple-600",
    projLink: "https://www.linkedin.com/pulse/revolutionizing-mobility-lower-limb-amputees-adaptive-gnanaprakash-g-11ape/",
    gitLink: "#",
    tags: ["IoT", "Hardware", "Embedded"]
  },
  {
    title: "BLOG Website with CRUD",
    des: "A full-stack blog website using MERN Stack.",
    src: "/assets/reactLogo.png",
    iconClass: "from-cyan-400 to-blue-600",
    projLink: "#",
    gitLink: "#",
    tags: ["React", "Firebase", "CRUD"]
  },
  {
    title: "Travel App",
    des: "A travel planning app featuring dynamic itineraries.",
    src: "/assets/reactLogo.png",
    iconClass: "from-cyan-400 to-blue-600",
    projLink: "https://firstproj-on-travel-app.netlify.app/",
    gitLink: "#",
    tags: ["React", "Mobile", "UX"]
  },
  {
    title: "Registration Form",
    des: "User-friendly registration form integrated with MySQL.",
    src: "/assets/sql.png",
    iconClass: "from-amber-500 to-orange-600",
    projLink: "#",
    gitLink: "#",
    tags: ["MySQL", "Backend", "Forms"]
  },
  {
    title: "Coffee Shop App Design",
    des: "A UI/UX design for a digital coffee ordering system.",
    src: "/assets/figma.png",
    iconClass: "from-pink-500 to-purple-600",
    projLink: "#",
    gitLink: "#",
    tags: ["Figma", "UI/UX", "Design"]
  },
  {
    title: "Cycle Store app design",
    des: "A Java-based system for managing book transactions.",
    src: "/assets/reactLogo.png",
    iconClass: "from-red-500 to-amber-600",
    projLink: "https://reacthooksminiproject.netlify.app/",
    gitLink: "#",
    tags: ["React", "Desktop", "Management"]
  }
];

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="projects"
      className={`w-full py-20 border-b-[1px] ${
        theme === "dark" ? "border-b-bodyColor-dark/50" : "border-b-bodyColor-light/50"
      } scroll-mt-[100px]`}
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
        {projectsData.map((proj, idx) => (
          <ProjCard
            key={idx}
            title={proj.title}
            des={proj.des}
            src={proj.src}
            projLink={proj.projLink}
            gitLink={proj.gitLink}
            className="hover:shadow-xl hover:scale-[1.03] transition-transform duration-300"
            iconClass={`bg-gradient-to-br ${proj.iconClass} p-2 rounded-lg`}
            tags={proj.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
