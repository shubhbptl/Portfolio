import "./App.css";
import Navbar from "./components/navbar/navbar.tsx";
import Intro from "./components/intro/intro.tsx";
import About from "./components/about/about.tsx";
import Project from "./components/project/project.tsx";
import Footer from "./components/footer/footer.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Project />
      <Footer />
    </>
  );
}

export default App;
