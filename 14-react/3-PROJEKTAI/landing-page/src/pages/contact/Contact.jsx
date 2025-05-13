import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.scss";
import * as SlIcons from "react-icons/sl";
import * as FaIcons from "react-icons/fa";

const Contacts = ({ contactInfo, title, description, form, contactIcons }) => {
  return (
    <div id="contact" className="contacts-container">
      <Container fluid>
        <Col sm={12}>
          <Row>
            <Col className="contacts-container-first-container" sm={8}>
              <Col className="contacts-container-title" sm={12}>
                <h2>{title}</h2>
                <p>{description}</p>
              </Col>
              <Form className="contacts-form-container">
                <Row>
                  {form.map((item, index) => {
                    if (item.type === "input") {
                      return (
                        <Col sm={5} key={index}>
                          <Form.Control
                            placeholder={item.text}
                            aria-label="Input"
                            aria-describedby="basic-addon1"
                          />
                        </Col>
                      );
                    }

                    if (item.type === "textarea") {
                      return (
                        <Col
                          className="contacts-form-container-textarea"
                          sm={10}
                          key={index}
                        >
                          <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder={item.text}
                          />
                        </Col>
                      );
                    }

                    if (item.type === "button") {
                      return (
                        <Col sm={12} key={index}>
                          <Button variant="primary" className="contacts-button">
                            {item.text}
                          </Button>
                        </Col>
                      );
                    }
                  })}
                </Row>
              </Form>
            </Col>
            <Col className="contacts-container-second-container" sm={2}>
              <h3>Contact Info</h3>
              {contactInfo.map((info, index) => {
                const ContactIcon = SlIcons[info.icon];
                return (
                  <div key={index}>
                    <div className="icons">
                      {<ContactIcon />}
                      <h5>{info.property}</h5>
                    </div>
                    <p>{info.value}</p>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Container>
      <p className="bottom-line"></p>
      <div className="bottom-icons">
        {contactIcons.map((icons, index) => {
          const Icons = FaIcons[icons.icon];

          return <Icons key={index} />;
        })}
      </div>
    </div>
  );
};

export default Contacts;