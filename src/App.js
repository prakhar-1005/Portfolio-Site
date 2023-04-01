import Bottom from "./components/Bottom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './App.css'
function App() {
  return (
    <div className="back text-white">
      <Navbar/>
      <Header/>
      <Skills/>
      <Projects/>
      <Bottom/>
    </div>
  );
}

export default App;
