import "./App.css";
import Navbar from "./components/navbar/navbar.tsx";
import Intro from "./components/intro/intro.tsx";
import About from "./components/about/about.tsx";
import Project from "./components/project/project.tsx";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Project></Project>
    </>
  );
}

export default App;
