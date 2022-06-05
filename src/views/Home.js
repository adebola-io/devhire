import React from "react";
import { useDispatch } from "react-redux";
import Developer from "../components/Developer";
import Loader from "../components/Loader";
import {MOCK_DEVELOPERS} from "../data"
import { getDevelopers } from "../services";

export default function Home() {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    loading: false,
    error: false,
    developers: [],
  });
  React.useEffect(() => {
    setState((s) => ({ ...s, loading: true }));
    dispatch({ type: "CHANGE_HEADING", payload: "Hire Top Developers" });
    // Fetch developers from API.
    getDevelopers().then((result) => {
      if (result.error) setState((s) => ({ ...s, loading: false, error: true }));
      else setState((s) => ({...s, loading: false, developers: result.data}));
    });
  }, [dispatch]);
  const className = `developers_grid ${state.developers.length ? "" : "developers_grid_wait"}`
  
  return (
    <div className={className}>
      {(function () {
        switch (true) {
          //   Load while waiting for API response.
          case state.loading:
            return (
              <div className="fill">
                <Loader />
              </div>
            );
          //   Show error message if something goes wrong.
          case state.error:
            return "Something went wrong. Please try again later.";
          default:
          // Show developers.
            return state.developers.map((d, index) => {
              return (
                <Developer
                  key={index}
                  name={d._source.display_name}
                  photo={d._source.avatar}
                  price={d._source.starting_from}
                  delay={(parseInt(index / 4) + 1) * 300}
                  // banner={d._source.service_photo}
                />
              );
            });
        }
      })()}
    </div>
  );
}
