import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About"; // Make sure path is correct
import Contact from "./components/Contact"; // Make sure path is correct
import NavBar from "./components/NavBar"; // Import the NavBar component
import {CustomeBar} from './components/ui/Custome-Bar'
import {Chantre } from ''
function App() {
  const sumChan = (a: number, b: number) => {
    return a + b;
  };

  const chantre = sumChan(1, 2);

  return (
    <>
   
      <CustomeBar />

      <div className=" h-screen mx-auto  py-4">
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>

      <div className="bg-red-400">
        <p className="text-xl text-white">juanfo20</p>
        <p className="text-emerald-700">Chantre obtuvo {chantre}</p>
      </div>

      <div className="flex h-screen w-screen justify-center items-center">
        <div className="w-[200px] h-[200px] bg-amber-500 rounded-[100%] text-center flex justify-center items-center">
          <p>chantre</p>
        </div>
      </div>
    </>
  );
}

function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default RootApp;
