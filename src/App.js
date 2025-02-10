import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/Education";
import Projects from "./components/Projects";
import TechStacks from "./components/TechStacks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-b from-black to-black">
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
