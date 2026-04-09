import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="min-h-screen overflow-x-hidden"
        style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        <Navbar />
        <main className="max-w-[1100px] mx-auto px-6 sm:px-10 pb-6">
          <Hero />
          <Projects />
          <Experience />
          <About />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
