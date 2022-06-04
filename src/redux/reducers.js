/** @typedef {{type: string, payload: any}} Action */

const initstate = {
  heading: "Hire Top Developers",
  page: window.location.pathname,
  favs: [],
};

/**
 * Redux global reducer.
 * @param {State} state
 * @param {Action} action
 * @return {State} A new global state.
 */
export const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "CHANGE_HEADING":
      return { ...state, heading: action.payload };
    case "CHANGE_PAGE":
      return { ...state, page: action.payload };
    case "FAVORITE":
      return { ...state, favs: state.favs.concat([action.payload]) };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favs: state.favs.filter((f) => f.name !== action.payload),
      };
    default:
      return state;
  }
};
