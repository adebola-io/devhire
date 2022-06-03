import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="logo">
        Dev<span>Hire</span>
      </h1>
      <nav className="navigation">
        <ul>
          <li className="navlink">
            <Link to="/">Home</Link>
          </li>
          <li className="navlink">
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
