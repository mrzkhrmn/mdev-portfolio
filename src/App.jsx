import "./App.css";
import { Contact } from "./components/Contact";
import { HeroSection } from "./components/Hero/HeroSection";
import { Navbar } from "./components/Navbar";
import { Parallax } from "./components/Parallax";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";

function App() {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <HeroSection />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
