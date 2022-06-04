import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Developer from "../components/Developer";

export default function Favorites() {
  const dispatch = useDispatch();
  const selector = useSelector((s) => s);
  React.useEffect(() => {
    dispatch({ type: "CHANGE_HEADING", payload: "Favorites" });
  }, [dispatch]);
  return (
    <div
      className={`developers_grid ${
        selector.favs.length ? "" : "developers_grid_wait"
      }`}
    >
      {(function () {
        switch (true) {
          case selector.favs.length === 0:
            return (
              <div style={{ color: "grey" }}>No favorite developer yet.</div>
            );
          default:
            return selector.favs.map((f, index) => {
              return (
                <Developer
                  key={index}
                  name={f.name}
                  delay="300ms"
                  photo={f.photo}
                  price={f.price}
                  banner={f.banner}
                />
              );
            });
        }
      })()}
    </div>
  );
}
