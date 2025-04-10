import React from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-[#C3A4E5] text-white py-5 px-8 shadow-md rounded-full flex-wrap w-full max-w-full">
      <div className="font-['Italiana'] text-3xl font-bold text-white uppercase tracking-wide cursor-pointer whitespace-nowrap hover:text-[#6A2C91] transition-colors duration-300">
        Monica's Portfolio
      </div>
      <nav>
        <ul className="flex gap-5 text-xl flex-wrap">
          <li>
            <Link 
              to="me" 
              smooth={true} 
              duration={500} 
              className="text-white no-underline hover:text-[#6A2C91] transition-colors duration-300 cursor-pointer"
            >
              Me
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              offset={-140} 
              className="text-white no-underline hover:text-[#6A2C91] transition-colors duration-300 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              offset={-100} 
              className="text-white no-underline hover:text-[#6A2C91] transition-colors duration-300 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="experience" 
              smooth={true} 
              duration={500} 
              offset={-40} 
              className="text-white no-underline hover:text-[#6A2C91] transition-colors duration-300 cursor-pointer"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-40} 
              className="text-white no-underline hover:text-[#6A2C91] transition-colors duration-300 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
