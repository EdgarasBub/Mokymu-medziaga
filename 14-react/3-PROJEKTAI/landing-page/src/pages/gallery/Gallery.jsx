import { Row, Container, Col } from "react-bootstrap";
import "./Gallery.scss";

const Gallery = ({ title, description, galleryItems }) => {
  return (
    <div className="gallery" id="gallery">
      <Container>
        <h1 className="gallery__title">
          <strong>{title}</strong>
        </h1>
        <p className="gallery__description"> {description}</p>
        <Row>
          {galleryItems.map((item, key) => (
            <Col md={4} key={key} className="gallery__img-block">
              <img src={item.image} />
              <div className="gallery__img-title">{item.title}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
