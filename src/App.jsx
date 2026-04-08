import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#111111] text-[#e8e5e0] overflow-x-hidden">
        <Navbar />
        <main className="max-w-[1100px] mx-auto px-6 sm:px-10 pb-32">
          <Hero />
          <Projects />
          <About />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
