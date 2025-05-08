import { HiCheck } from "react-icons/hi";
import { Row, Container, Col } from "react-bootstrap";
import "./Services.scss";
import ItemDetails from "../../components/itemDetails/ItemDetails";

const Services = ({ title, description, serviceItems }) => {
  return (
    <Container className="services">
      <Row>
        <Col>
          <h1 className="services_title">
            <strong>{title}</strong>
          </h1>
          <p className="description"> {description}</p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {serviceItems.map((item, key) => (
              <Col sm={6} key={key.id} className="ServiceItems">
                <ItemDetails
                  key={key}
                  title={item.title}
                  text={item.text}
                  iconName={item.icon}
                />
              </Col>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Services;
