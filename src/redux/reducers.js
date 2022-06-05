/**
 * @typedef {{type: string, payload: any, init?: boolean}} Action
 * @typedef {{
 *  heading: string,
 *  page: string,
 *  currency: "Naira"| "Dollar"| "Pound" | "Euro" | "Dinar",
 *  favs: Array<import("../components/Developer").DeveloperProps>,
 *  sidebarIsToggled: boolean
 *  }} State
 */

/** @type {State} */
const initstate = {
  heading: "Hire Top Developers",
  page: window.location.pathname,
  currency: "Naira",
  favs: [],
  sidebarIsToggled: false,
};

/**
 * Redux global reducer.
 * @param {State} state
 * @param {Action} action
 * @returns {State} A new global state.
 */
export const reducer = (state = initstate, action) => {
  switch (action.type) {
    case "CHANGE_HEADING":
      return { ...state, heading: action.payload };
    case "TOGGLE_SIDEBAR":
      return { ...state, sidebarIsToggled: action.payload };
    case "CHANGE_PAGE":
      return { ...state, page: action.payload };
    case "TOGGLE_FAVORITE":
      if (action.init) {
        return { ...state, favs: state.favs.concat([action.payload]) };
      } else {
        return {
          ...state,
          favs: state.favs.filter((f) => f.name !== action.payload.name),
        };
      }
    case "CHANGE_CURRENCY":
      return { ...state, currency: action.payload };
    default:
      return state;
  }
};
