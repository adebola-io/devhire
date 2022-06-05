/**
 * @typedef {{type: string, payload: any, init?: boolean}} Action
 * @typedef {{
 *  heading: string,
 *  page: string,
 *  currency: {
 *    rate: number,
 *    short: string,
 *    symbol: string,
 *    flag_url: string
 *  },
 *  favs: Array<import("../components/Developer").DeveloperProps>,
 *  sidebarIsToggled: boolean
 *  }} State
 */

/** @type {State} */
const initstate = {
  heading: window.location.pathname === '/' ? "Hire Top Developers" : 'Favorites',
  page: window.location.pathname,
  currency: {
    rate: 1,
    symbol: "₦",
    short: "NGN",
    flag_url: "https://tera-media.s3-eu-west-1.amazonaws.com/currency-flag/webp/nigeria.webp"
  },
  rate: 1,
  favs: [],
  sidebarIsToggled: window.innerWidth > 768,
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
