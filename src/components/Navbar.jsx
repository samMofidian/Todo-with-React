import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <Link className="main-nav-link" to="/">
        Home
      </Link>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <Link className="main-nav-link" to="/sign-up">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
