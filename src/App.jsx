import { useContext } from 'react';
import { ThemeContext } from './context/themeContext';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';
import FooterBottom from './components/footerbottom';
import Exp from './components/exp';


const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`w-full h-auto ${theme === 'dark' ? 'bg-bodyColor-dark text-fontColor-dark' : 'bg-bodyColor-light text-fontColor-light'}`}>
      <Navbar />
      
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Skills />
        <Exp />
        <Projects />
        <Contact />
      </div>
      <Resume />
      
      <div id="about" className={`w-full ${theme === 'dark' ? 'bg-bodyColor-dark/90 text-fontColor-dark/90' : 'bg-bodyColor-light/90 text-fontColor-light/90'}`}>
        <Footer />
        <FooterBottom />
      </div>
    </div>
  )
}

export default App;