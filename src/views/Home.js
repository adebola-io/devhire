import React from "react";
import Developer from "../components/Developer";
import Loader from "../components/Loader";
import { getDevelopers } from "../services";
import "./Home.css";

export default function Home() {
  const [state, setState] = React.useState({
    loading: false,
    error: false,
    developers: [],
  });
  React.useEffect(() => {
    setState((s) => ({ ...s, loading: true }));
    getDevelopers().then((result) => {
      setState((s) => ({ ...s, loading: false }));
      if (result.error) setState((s) => ({ ...s, error: true }));
      else {
        setState((s) => ({
          ...s,
          developers: result.data.service_search_results.hits,
        }));
      }
    });
  }, []);

  return (
      <div className={`developers_grid ${state.developers.length ? '': 'developers_grid_wait'}`}>
        {(function () {
          switch (true) {
            //   Load while waiting for API response.
            case state.loading:
              return <div className="fill"><Loader/></div>;
            //   Show error message if something goes wrong.
            case state.error:
              return "Something went wrong. Please try again later.";
            default:
              // Show developers.
              return state.developers.map((d, index) => {
                return (
                  <Developer
                    key={d.id}
                    name={d._source.display_name}
                    photo={d._source.avatar}
                    price={'₦'+d._source.starting_from}
                    delay={`${(parseInt(index/4) + 1) * 300}ms`}
                    // banner={d._source.service_photo}
                  />
                );
              });
          }
        })()}
      </div>
  );
}
