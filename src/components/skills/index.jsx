import React, { useContext, useRef, useEffect, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import { Link } from "react-scroll";

const skills = [
  { name: "Java", icon: "/assets/java.png" },
  { name: "SQL", icon: "/assets/sql.png" },
  { name: "Figma", icon: "/assets/figma.png" },
  { name: "GitHub", icon: "/assets/github.png" },
  { name: "React", icon: "/assets/reactLogo.png" },
  { name: "IoT", icon: "/assets/iot.png" },
  { name: "IoT", icon: "/assets/iot.png" },
  { name: "IoT", icon: "/assets/iot.png" },
  { name: "IoT", icon: "/assets/iot.png" },
];

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const circleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);
  const bgColor = theme === 'dark' ? 'bg-bodyColor-dark' : 'bg-bodyColor-light';
  const textColor = theme === 'dark' ? 'text-fontColor-dark' : 'text-fontColor-light';
  const designColor = theme === 'dark' ? 'border-designColor-dark' : 'border-designColor-light';
  const dividerColor = theme === 'dark' ? 'bg-gradient-to-b from-transparent via-white to-transparent' : 'bg-gradient-to-b from-transparent via-fontColor-light to-transparent';

  return (
    <section id="skills" className={`${bgColor} py-16 px-6 md:px-8`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-8">
          {/* Skills Section */}
          <div className="flex-1 flex flex-col items-center">
            <h2 className={`text-4xl font-bold mb-8 text-center ${textColor}`}>
              Skills
            </h2>
            <div className="relative w-full max-w-[400px] h-[400px] mx-auto">
              <div 
                ref={circleRef}
                className={`absolute inset-0 rounded-full border-[12px] border-${designColor} 
                  flex items-center justify-center shadow-lg transition-all duration-1000
                  ${isVisible ? 'rotate-[360deg]' : ''}`}
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0%, ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} 100%)`
                  }}
              >
                <div className="text-center">
                  <h3 className={`text-2xl font-semibold ${textColor}`}>Tech Stack</h3>
                </div>
              </div>

              {skills.map((skill, index) => {
                const angle = (index * 360) / skills.length;
                const radius = 180;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <div
                  key={index}
                  className={`absolute w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-sm
                    flex items-center justify-center shadow-lg transition-all duration-300
                    hover:scale-125 hover:shadow-xl border-2 border-white/30`}
                  style={{
                    left: `calc(50% + ${x}px - 2.5rem)`,
                    top: `calc(50% + ${y}px - 2.5rem)`,
                    transform: isVisible ? `rotate(${360}deg)` : 'none',
                    transition: `transform 1s ${index * 0.1}s ease-out`
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
              );
            })}
            </div>
          </div>

          {/* Divider */}
              <div className={`hidden lg:block w-px h-[400px] self-center ${dividerColor}`}></div>

          {/* Education Section */}
          <div className="flex-1 flex flex-col items-center">
            <h2 className={`text-4xl font-bold mb-8 text-center ${textColor}`}>
              Education
            </h2>
            <div className="w-full max-w-md">
              <div className="relative">
                {[
                  { degree: "BE, Computer Science", grade: "8.5 CGPA", year: "2021-2025" },
                  { degree: "HSC", grade: "91.98%", year: "2020-2021" },
                  { degree: "SSLC", grade: "91.9%", year: "2018-2019" }
                ].map((edu, index) => (
                  <div key={index} className="mb-10 relative">
                    <div className="absolute left-0 h-full w-4 flex flex-col items-center">
                      <div className="relative h-full w-full flex flex-col items-center justify-center">
                        {/* Vertical connector line above dot */}
                        {index > 0 && (
                          <div className={`absolute top-0 w-[1.5px] h-1/2 ${designColor.replace('border-', 'bg-')}`}></div>
                        )}
                        
                        {/* Centered dot with horizontal connector */}
                        <div className="relative flex items-center justify-center">
                          <div className={`w-4 h-4 rounded-full ${designColor.replace('border-', 'bg-')} flex items-center justify-center z-10`}>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          </div>
                          <div className={`absolute h-[2px] w-3 ${designColor.replace('border-', 'bg-')} left-full`}></div>
                        </div>

                        {/* Vertical connector line below dot */}
                        {index < 2 && (
                          <div className={`absolute bottom-0 w-[1.5px] h-1/2 ${designColor.replace('border-', 'bg-')}`}></div>
                        )}
                      </div>
                    </div>
                    <div className={`p-5 ml-6 rounded-md ${bgColor} shadow-sm transition-all duration-150 hover:shadow border ${designColor}`}>
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className={`text-xl font-bold ${textColor}`}>{edu.degree}</h3>
                          <p className={`text-sm ${textColor} opacity-70 mt-1`}>{edu.year}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full ${designColor.replace('border-', 'bg-')} bg-opacity-10 min-w-[80px] text-center`}>
                          <span className={`text-lg font-bold ${textColor}`}>{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
