import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-center gap-8 bg-slate-600">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
