/**
 * @typedef {{
 *  isFavorite?: boolean,
 *  name: string,
 *  delay: number,
 *  price: number,
 *  photo: string,
 *  banner: string
 * }} DeveloperProps
 */

import React from "react";
import { Link } from "react-router-dom";
import heart_white from "../assets/heart_white.png";
import heart_red from "../assets/heart_red.png";
import "./Developer.css";
import { getRates } from "../services";
import { useDispatch, useSelector } from "react-redux";

/**
 * Template component for a developer.
 * @param {DeveloperProps} props
 * @returns {JSX.Element}
 */
export default function Developer(props) {
  const dispatch = useDispatch();
  /** @type {import("../redux/reducers").State} */
  const selector = useSelector((s) => s);
  const heart = React.useRef(null);
  const isFavorited =
    props.isFavorite ||
    selector.favs.filter((f) => f.name === props.name).length > 0;
  /**
   * Mark a developer as a favorite.
   * @param {Event} e
   */
  function markDeveloperAsFavorite(e) {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: { ...props },
      init: !isFavorited,
    });
    heart.current.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.25)" },
        { transform: "scale(0.85)" },
        { transform: "none" },
      ],
      { duration: 500, fill: "both" }
    );
  }
  return (
    <div
      className="developer_container"
      style={{ animationDuration: `${props.delay}ms` }}
    >
      <button
        style={{ backgroundColor: isFavorited ? "white" : "#bbbbbb" }}
        onClick={markDeveloperAsFavorite}
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
            <div className="developer_price">
              {selector.currency.symbol +
                (selector.currency.rate * props.price).toPrecision(7)}
            </div>
          </div>
          <Link to="#" className="developer_hire_button">
            Hire
          </Link>
        </div>
      </div>
    </div>
  );
}
