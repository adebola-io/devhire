/** @typedef {{type: string, payload: any}} Action */

const initstate = {
  heading: "Hire Top Developers",
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
    default:
      return state;
  }
};
