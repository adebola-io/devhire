/** @typedef {{type: string, payload: any}} Action */

const initstate = {
  heading: "Hire Top Developers",
  page: window.location.pathname,
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
      console.log(state.page);
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
