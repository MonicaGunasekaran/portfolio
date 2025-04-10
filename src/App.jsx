import { useEffect } from 'react';
import { ThemeProvider } from './context/themeContext.jsx';
import Navbar from "./components/Header";
import MainContent from "./components/MainContent";
import CircleWithLogos from "../src/components/CircleWithLogos";
import MyCreations from "./components/MyCreations";
import Experience from "./components/Experience";
import Contact from "../src/components/Contact";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
      <MainContent />
      <CircleWithLogos />
      <MyCreations/>
      <Experience/>
      <Contact/>
    </>
  );
}
