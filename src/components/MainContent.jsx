import React from 'react';
import monicaimage from '/assets/monicaimage.png';
import { Link } from 'react-scroll';

export default function MainContent() {
  return (
    <section id="me" className="flex flex-col lg:flex-row items-center justify-between gap-10 px-8 py-16 bg-bodyColor-light dark:bg-bodyColor-dark">
      
      {/* Left Section - Text */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-4">
        <h1 className="text-4xl font-bold text-designColor-light dark:text-designColor-dark">A Little bit About Me 🌸</h1>
        <p className="text-2xl font-semibold text-fontColor-light dark:text-fontColor-dark">Hi, I'm Monica 👋</p>
        <p className="text-xl text-fontColor-light/80 dark:text-fontColor-dark/80">Final Year CSE Student | Aspiring Software Developer</p>
        <p className="text-lg text-fontColor-light/90 dark:text-fontColor-dark/90 leading-relaxed">
          My passion lies in building software solutions that make a difference. Over the past few years, I've developed 
          proficiency in <span className="font-semibold text-designColor-light dark:text-designColor-dark">Java, React,</span> and <span className="font-semibold text-designColor-light dark:text-designColor-dark">UI/UX design.</span> 
          <br /><br />
          I have worked on projects that have honed my skills in these areas. Beyond academics, I enjoy writing 
          <span className="font-semibold text-designColor-light dark:text-designColor-dark"> Technical</span> and <span className="font-semibold text-designColor-light dark:text-designColor-dark">Casual Content.</span> 
          I believe in continuous learning and am always eager to embrace new challenges.
        </p>
        <Link to="contact" smooth={true} duration={500} offset={-50}>
          <button className="bg-designColor-light dark:bg-designColor-dark text-fontColor-dark dark:text-fontColor-light px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-designColor-light/80 dark:hover:bg-designColor-dark/80 transition duration-300">
            Contact Me
          </button>
        </Link>
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/2 flex justify-center">
        <img src={monicaimage} alt="Monica" className="w-80 md:w-96 lg:w-[450px] rounded-full shadow-lg" />
      </div>
    
    </section>
  );
}
