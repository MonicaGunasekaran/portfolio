
import Header from "../src/components/Header";
import MainContent from "../src/components/MainContent"; // Fixed path
// import MyCreations from "../src/components/MyCreations"; // Fixed path
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
