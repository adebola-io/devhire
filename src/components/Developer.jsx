import React from "react";
import { Link } from "react-router-dom";
import "./Developer.css";

export default function Developer(props) {
  const heart = React.useRef(null),
    favoriteRef = React.useRef(null);
  let isFavorited = false;
  function favoriteDeveloper(e) {
    isFavorited = !isFavorited;
    favoriteRef.current.style.backgroundColor = isFavorited
      ? "white"
      : "#bbbbbb";
    heart.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.25)" },
        { transform: "scale(0.85)" },
        { transform: "none" },
      ],
      { duration: 500, fill: "both" }
    );
    heart.current.setAttribute(
      "style",
      `--heart_color: ${isFavorited ? "red" : "#ffffff"}`
    );
  }
  return (
    <div
      className="developer_container"
      style={{ animationDuration: props.delay }}
    >
      <button
        ref={favoriteRef}
        onClick={favoriteDeveloper}
        className="developer_favorites_prompt"
      >
        <div ref={heart} className="heart"></div>
      </button>
      <div
        style={{ backgroundImage: `url(${props.banner})` }}
        className="developer_banner"
      ></div>
      <div className="developer_info">
        <div
          style={{ backgroundImage: `url(${props.photo})` }}
          className="developer_photo"
        ></div>
        <div className="developer_details">
          <div className="developer_id">
            <h4 className="developer_name">{props.name}</h4>
            <div className="developer_price">{props.price}</div>
          </div>
          <Link to="#" className="developer_hire_button">
            Hire
          </Link>
        </div>
      </div>
    </div>
  );
}
