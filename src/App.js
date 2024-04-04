import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStacks from "./components/TeachStacks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
