import "./About.scss";
import img from "../../assets/about/about.jpg";
import { HiCheck } from "react-icons/hi";
import { Row, Container, Col } from "react-bootstrap";

const About = ({ title, description, whyCouseUsTitle, whyCouseUsItems }) => {
  return (
    <Container id="about">
      <Row>
        <Col>
          <img src={img} />
        </Col>
        <Col>
          <h2 className="about_title">{title}</h2>
          <p className="description">{description}</p>
          <h4>{whyCouseUsTitle}</h4>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {whyCouseUsItems.map((item, index) => (
              <Col sm={6} key={index} className="whyCouseUsItems">
                <HiCheck /> {item}
              </Col>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
