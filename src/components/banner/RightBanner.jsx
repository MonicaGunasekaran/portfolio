import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const RightBanner = () => {                         
    const { theme } = useContext(ThemeContext);

    return (
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
            <img src="/others/thought.png" className='w-full h-full' />
        </div>
    );
}

export default RightBanner;