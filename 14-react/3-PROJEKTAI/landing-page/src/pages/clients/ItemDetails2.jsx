import { Col } from "react-bootstrap";
import * as icons from "react-icons/hi";
import "../../components/itemDetails/ItemDetails.scss";

const ItemDetails = ({ title, text, iconName }) => {
  return (
    <Col
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div>
        <span className="itemDetails-icon">{icons[iconName]()} </span>
      </div>
      <div>
        <p>{text}</p>
        <h3>{title}</h3>
      </div>
    </Col>
  );
};

export default ItemDetails;
