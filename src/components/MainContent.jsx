import React from 'react';
import monicaimage from '/assets/monicaimage.png';
import { Link } from 'react-scroll';

export default function MainContent() {
  return (
    <section id="me" className="flex flex-col lg:flex-row items-center justify-between gap-10 px-8 py-16 bg-background">
      
      {/* Left Section - Text */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-4">
        <h1 className="text-4xl font-bold text-primary">A Little bit About Me 🌸</h1>
        <p className="text-2xl font-semibold text-text">Hi, I’m Monica 👋</p>
        <p className="text-xl text-text/80">Final Year CSE Student | Aspiring Software Developer</p>
        <p className="text-lg text-text/90 leading-relaxed">
          My passion lies in building software solutions that make a difference. Over the past few years, I've developed 
          proficiency in <span className="font-semibold text-primary">Java, React,</span> and <span className="font-semibold text-primary">UI/UX design.</span> 
          <br /><br />
          I have worked on projects that have honed my skills in these areas. Beyond academics, I enjoy writing 
          <span className="font-semibold text-primary"> Technical</span> and <span className="font-semibold text-primary">Casual Content.</span> 
          I believe in continuous learning and am always eager to embrace new challenges.
        </p>
        <Link to="contact" smooth={true} duration={500} offset={-50}>
          <button className="bg-primary text-white px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-primary/80 transition duration-300">
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
