import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="flex justify-between items-center bg-primary text-white py-5 px-8 shadow-md rounded-full flex-wrap w-full max-w-full">
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="text-2xl"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
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
