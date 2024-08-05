import "./App.css";
import Bimeh from "./components/Bimeh";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Magezine from "./components/Magezine";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div dir="rtl">
      <Navbar />
      <Landing />
      <Skills />
      <Bimeh />
      <Magezine />
      <Footer/>
    </div>
  );
}

export default App;
