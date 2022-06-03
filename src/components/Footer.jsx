import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <span className="copyright">
        &copy; {new Date().getFullYear()} DevHire
      </span>
      <select name="currency" id="currency">
        <option value="naira">Naira</option>
        <option value="dollar">Dollar</option>
      </select>
    </footer>
  );
}
