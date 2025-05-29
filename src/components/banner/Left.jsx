import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { Link } from 'react-scroll';

const Left = () => {
    const { theme } = useContext(ThemeContext);
    const textColor = theme === 'dark' ? 'text-fontColor-dark' : 'text-fontColor-light';

    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-10 px-8 py-16 text-center lg:text-left space-y-4">
            <h1 className="text-4xl font-bold text-designColor-light dark:text-designColor-dark">A Little bit About Me 🌸</h1>
            <p className="text-2xl font-semibold text-fontColor-light dark:text-fontColor-dark">Hi, I'm Monica 👋</p>
            <p className="text-xl text-fontColor-light/80 dark:text-fontColor-dark/80">Final Year CSE Student | Aspiring Software Developer</p>
            
            <Link to="contact" smooth={true} duration={500} offset={-50}>
                <button className="bg-designColor-light dark:bg-designColor-dark text-fontColor-dark dark:text-fontColor-light px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-designColor-light/80 dark:hover:bg-designColor-dark/80 transition duration-300">
                    Contact Me
                </button>
            </Link>
        </div>
    );
}

export default Left;