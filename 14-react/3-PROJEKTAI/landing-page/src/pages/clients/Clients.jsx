import { Row, Container, Col } from "react-bootstrap";
import "./Clients.scss";
import ItemDetails from "./ItemDetails2";

const Clients = ({ title, description, clientsItems }) => {
  return (
    <div className="clients">
      <Container>
        <h1 className="clients__title">
          <strong>{title}</strong>
        </h1>
        <Row>
          {clientsItems.map((item, key) => (
            <Col md={4} key={key} className="clients__img-block">
              <ItemDetails
                key={key}
                text={item.text}
                title={item.author}
                iconName={item.icon}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Clients;
