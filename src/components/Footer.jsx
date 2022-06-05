import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlags } from "../services";
import "./Footer.css";

export default function Footer() {
  const selector = useSelector((s) => s);
  const dispatch = useDispatch();
  const [state, setState] = React.useState({ currencies: [] });
  /**
   * Update the currency in the global state.
   * @param {Event} e
   */
  function changeCurrencyType(e) {
    dispatch({
      type: "CHANGE_CURRENCY",
      payload: state.currencies.find(
        (currency) => currency.name === e.target.value
      ),
    });
  }
  React.useEffect(() => {
    getFlags().then((result) => {
      if (!result.error) {
        setState((s) => ({ ...s, currencies: result.data }));
      }
    });
  }, []);
  return (
    <footer>
      <span className="copyright">
        &copy; {new Date().getFullYear()} DevHire
      </span>
      <div className="currency_toggle">
        <img src={selector.currency.flag_url} alt={selector.currency.symbol} />
        <select onChange={changeCurrencyType} name="currency" id="currency">
          {state.currencies.map((currency) => {
            return (
              <option key={currency.id} value={currency.name}>
                {currency.name}
              </option>
            );
          })}
        </select>
      </div>
    </footer>
  );
}
