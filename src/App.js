import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStacks from "./components/TeachStacks";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />

      <SocialLinks />
      <About />
      <Projects />
      <TechStacks />
      <Contact />
    </div>
  );
}

export default App;
