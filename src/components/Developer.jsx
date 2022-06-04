import React from "react";
import { Link } from "react-router-dom";
import heart_white from "../assets/heart_white.png";
import heart_red from "../assets/heart_red.png";
import "./Developer.css";
import { useDispatch, useSelector } from "react-redux";

export default function Developer(props) {
  const dispatch = useDispatch();
  const selector = useSelector((s) => s);
  const heart = React.useRef(null);
  const [isFavorited, setIsFavorited] = React.useState(
    selector.favs.filter((f) => f.name === props.name).length > 0
  );

  function favoriteDeveloper() {
    setIsFavorited(() => {
      heart.current.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.25)" },
          { transform: "scale(0.85)" },
          { transform: "none" },
        ],
        { duration: 500, fill: "both" }
      );
      if (!isFavorited) {
        dispatch({ type: "FAVORITE", payload: { ...props } });
      } else {
        dispatch({ type: "REMOVE_FAVORITE", payload: props.name });
      }
      return !isFavorited;
    });
  }
  return (
    <div
      className="developer_container"
      style={{ animationDuration: props.delay }}
    >
      <button
        style={{ backgroundColor: isFavorited ? "white" : "#bbbbbb" }}
        onClick={favoriteDeveloper}
        className="developer_favorites_prompt"
      >
        <img
          src={isFavorited ? heart_red : heart_white}
          alt="heart"
          ref={heart}
        />
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
