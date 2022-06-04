import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import home_icon from "../assets/search.png";
import favorites from "../assets/favorites.png";
import { useDispatch } from "react-redux";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="logo">
        Dev<span>Hire</span>
      </h1>
      <nav className="navigation">
        <ul>
          <NavLink to="/" text="Home" icon={home_icon} />
          <NavLink to="/favorites" text="Favorites" icon={favorites} />
        </ul>
      </nav>
    </aside>
  );
}

function NavLink(props) {
  const selector = useSelector((s) => s);
  const dispatch = useDispatch();
  function changePage() {
    dispatch({ type: "CHANGE_PAGE", payload: props.to });
  }
  return (
    <li className="navlink">
      {selector.page === props.to ? (
        <div className="link_image_container">
          <img src={props.icon} alt="icon" />
        </div>
      ) : (
        <img src={props.icon} alt="icon" />
      )}
      <Link
        onClick={changePage}
        to={props.to}
        style={{
          color: selector.page === props.to ? "#14142b" : "rgba(0, 0, 0, 0.43)",
        }}
      >
        {props.text}
      </Link>
    </li>
  );
}
