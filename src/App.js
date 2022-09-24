import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { useRef } from "react";

const App = () => {
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const skill = useRef(null);
  const contact = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <NavBar
        home={home}
        about={about}
        projects={projects}
        skills={skill}
        contact={contact}
        scrollToSection={scrollToSection}
      />
      <Header home={home} scrollToSection={scrollToSection} />
      <About about={about} scrollToSection={scrollToSection} />
      <Projects projects={projects} scrollToSection={scrollToSection} />
      <Skills skill={skill} scrollToSection={scrollToSection} />
    </>
  );
};

export default App;
