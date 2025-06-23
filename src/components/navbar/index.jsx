import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { navLinksData } from "../../Constants/NavData.js";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <>
      {/* Main Navbar */}
      <div className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'h-14' : 'h-20'
      } ${
        theme === 'dark' ? 'bg-bodyColor-dark' : 'bg-bodyColor-light'
      } flex justify-between items-center px-4 md:px-10 font-titleFont ${
        scrolled
          ? `border-b ${theme === 'dark' ? 'border-b-designColor-dark/30' : 'border-b-designColor-light/30'}`
          : `shadow-md ${theme === 'dark' ? 'shadow-black/20' : 'shadow-black/10'}`
      }`}>
        {/* Logo */}
        <div className="text-2xl font-bold uppercase tracking-wide">
          Monica's Portfolio
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden mdl:flex items-center gap-6 lg:gap-10">
          {navLinksData.map(({ _id, title, link }) => (
            <li
              key={_id}
              className={`text-base cursor-pointer group relative transition-all duration-300 hover:text-designColor dark:hover:text-designColor-dark`}
            >
              <a href={link}>{title}</a>
              <span className={`absolute left-0 -bottom-1 w-0 h-0.5 ${
                theme === 'dark' ? 'bg-designColor-dark' : 'bg-designColor-light'
              } transition-all duration-300 group-hover:w-full`}></span>
            </li>
          ))}
        </ul>

        {/* Theme + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Hamburger icon - only visible on mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="mdl:hidden p-2 focus:outline-none"
          >
            <svg className="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40">
          <div className="fixed top-0 right-0 w-3/4 sm:w-2/3 h-full bg-white dark:bg-bodyColor-dark z-50 shadow-lg transition-transform duration-300 ease-in-out">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <svg className="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col items-center gap-6 font-titleFont text-lg py-10">
              {navLinksData.map(({ _id, title, link }) => (
                <li key={_id}>
                  <a
                    href={link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-designColor dark:hover:text-designColor-dark"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
