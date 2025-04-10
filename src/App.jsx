
import { useEffect } from 'react';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import CircleWithLogos from "../src/components/CircleWithLogos";
import MyCreations from "./components/MyCreations";
import Experience from "./components/Experience";
import Contact from "../src/components/Contact";
// import Experience from "../src/components/Experience";
export default function App() {
  return (
    <>
      <Header />
      <MainContent />
      <CircleWithLogos />
      <MyCreations/>
      <Experience/>
      <Contact/>
      {/* 
      
      
      <Contact /> */}
    </>
  );
}
