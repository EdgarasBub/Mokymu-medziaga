import { Col } from "react-bootstrap";
import * as icons from "react-icons/hi";
import "./itemDetails.scss";

const ItemDetails = ({ title, text, iconName }) => {
  return (
    <Col>
      <span className="itemDetails-icon">{icons[iconName]()} </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </Col>
  );
};

export default ItemDetails;
