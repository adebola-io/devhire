import { Link } from "react-router-dom";
import "./Developer.css";

export default function Developer() {
  return (
    <div className="developer_container">
      <div src="" alt="" className="developer_banner"></div>
      <div className="developer_info">
        <div className="developer_photo"></div>
        <div className="developer_details">
          <div className="developer_id">
            <h4 className="developer_name">Name</h4>
            <div className="developer_price">Price</div>
          </div>
          <Link to="#" className="developer_hire_button">
            Hire
          </Link>
        </div>
      </div>
    </div>
  );
}
