import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";

function App() {
  // function sumar(a: number, b: number) {
  //   return a + b;
  // }

  //const result = sumar(2, 10);
  return (
    <div className="w-10/12 h-screen mx-auto bg-slate-700 py-4">
      {/* <div className="bg-red-400 w-full">
        <p className="text-xl text-white">Welcome to diego developer hub </p>
        <p className="text-xl text-purple-600">The result is: {result}</p>
      </div> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
