import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About"; 
import Contact from "./components/Contact"; 
import { CustomeBar } from './components/ui/Custome-Bar';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50"> {/* Changed to a lighter background for modern look */}
      <CustomeBar />

      <main className="flex-grow w-full px-4 md:px-8 lg:px-12 py-8"> {/* Added padding for spacing */}
        <Routes>
          <Route path="/" element={
            <div className="text-center text-4xl font-extrabold text-gray-800"> {/* Increased font size and made it bold */}
              Home Page
            </div>
          } />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="bg-gray-900 text-white py-6 text-center shadow-md"> {/* Darker footer with shadow */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
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
