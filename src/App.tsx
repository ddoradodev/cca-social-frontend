import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Navbar from "./components/navbar";

function App() {

function sumar(a:number, b:number){
  return a + b;

}

const result = sumar(2 , 4);


  return (
    <>
      <div className="w-screen h-screen flex-col justify-center">
        <Navbar/>
        
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

    </Routes>
    </div>
    </>

  );
}

export default App;
