import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const Preloader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${theme === 'dark' ? 'bg-bodyColor-dark' : 'bg-bodyColor-light'}`}>
      <div className="w-40 h-40">
        <img 
          src="/assets/preloader.gif" 
          alt="Loading..." 
          className="w-full h-full object-contain rounded-tr-full rounded-bl-full rounded-tl-full"
        />
      </div>
    </div>
  );
};

export default Preloader;
