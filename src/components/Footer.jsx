import { useSelector } from "react-redux";
import "./Footer.css";

export default function Footer() {
  const selector = useSelector((s) => s);
  function changeCurrencyType(e) {
    console.log(e);
  }
  return (
    <footer>
      <span className="copyright">
        &copy; {new Date().getFullYear()} DevHire
      </span>
      <select onChange={changeCurrencyType} name="currency" id="currency">
        <option value="naira">Naira</option>
        <option value="dollar">Dollar</option>
        <option value="pound">Pound</option>
      </select>
    </footer>
  );
}
