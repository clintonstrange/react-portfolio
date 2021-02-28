import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <main>
        <Header></Header>
        <About></About>
        <Contact></Contact>
        <Project></Project>
        <Resume></Resume>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
