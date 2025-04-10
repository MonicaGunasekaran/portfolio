import React from "react";
import java from "/assets/java.png";
import reactLogo from "/assets/reactLogo.png";
import figma from "/assets/figma.png";
import sql from "/assets/sql.png";
import iot from "/assets/iot.png";

export default function MyCreations() {
  const projects = [
    { name: "Active Prosthetic Ankle", description: "An IoT-based prosthetic ankle with real-time adaptability.", logo: iot },
    { name: "BLOG Website with CRUD Operations", description: "A full-stack blog website using React and Firebase.", logo: reactLogo },
    { name: "Travel App", description: "A travel planning app featuring dynamic itineraries.", logo: reactLogo },
    { name: "Registration Form", description: "User-friendly registration form integrated with MySQL.", logo: sql },
    { name: "Coffee Shop App Design", description: "A UI/UX design for a digital coffee ordering system.", logo: figma },
    { name: "Library Management System", description: "A Java-based system for managing book transactions.", logo: java },
  ];

  return (
    <section id="projects" className="py-16 bg-background-light/50 dark:bg-background-dark/50">
      <h2 className="text-4xl font-bold text-primary-light dark:text-primary-dark text-center mb-10">🎨 My Creations 💻</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-background-light dark:bg-background-dark rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-background-light/80 dark:bg-background-dark/80 rounded-full flex justify-center items-center mb-4">
              <img src={project.logo} alt={project.name} className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">{project.name}</h3>
            <p className="text-text-light/80 dark:text-text-dark/80 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
