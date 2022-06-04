import React from "react";
import { useDispatch } from "react-redux";

export default function Favorites() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: "CHANGE_HEADING", payload: "Favorites" });
  }, []);
  return <main></main>;
}
