/** @typedef {string} Base64Image */

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import home_icon from "../assets/search.png";
import favorites from "../assets/favorites.png";
import "./Sidebar.css";

/**
 * The page sidebar.
 * @returns {JSX.Element}
 */
export default function Sidebar() {
  /** @type {import("../redux/reducers").State} */
  const selector = useSelector((s) => s);

  /** The sidebar transformer based on the selector.
   * @type {CSSStyleDeclaration}
   */
  const SidebarStyle = {
    transform: selector.sidebarIsToggled ? "none" : "translate(-100%)",
  };
  return (
    <aside className="sidebar" style={SidebarStyle}>
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

/**
 * The Button that toggles the sidebar in smaller devices.
 * @returns {JSX.Element}
 */
export function SidebarBtn() {
  const dispatch = useDispatch();
  /** @type {import("../redux/reducers").State} */
  const selector = useSelector((s) => s);

  function toggleSidebar() {
    dispatch({
      type: "TOGGLE_SIDEBAR",
      payload: !selector.sidebarIsToggled,
    });
  }
  return (
    <button className="sidebar_toggle" onClick={toggleSidebar}>
      <hr />
      <hr />
      <hr />
    </button>
  );
}

/**
 * The Home and Favorite navlinks.
 * @param {{to: string, icon: Base64Image }} props
 * @returns {JSX.Element}
 */
function NavLink(props) {
  const selector = useSelector((s) => s);
  const dispatch = useDispatch();
  const LinkStyle = {
    color: selector.page === props.to ? "#14142b" : "rgba(0, 0, 0, 0.43)",
  };
  function changePage() {
    dispatch({ type: "CHANGE_PAGE", payload: props.to });
    dispatch({
      type: "TOGGLE_SIDEBAR",
      payload: !selector.sidebarIsToggled,
    });
  }
  return (
    <li className="navlink">
      {/* Toggle between selected icon state and normal icon state. */}
      {selector.page === props.to ? (
        <div className="link_image_container">
          <img src={props.icon} alt="icon" />
        </div>
      ) : (
        <img src={props.icon} alt="icon" />
      )}
      <Link onClick={changePage} to={props.to} style={LinkStyle}>
        {props.text}
      </Link>
    </li>
  );
}
