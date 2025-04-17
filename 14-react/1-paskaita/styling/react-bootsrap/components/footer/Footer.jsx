import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="bg-light mt-5 p-5 shadow-sm">
      <Row>
        <Col>
          <p>2025-04-16 18:00</p>
        </Col>
        <Col>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">
              <strong>Features</strong>
            </Nav.Link>
            <Nav.Link eventKey="link-1">Cool stuff</Nav.Link>
            <Nav.Link eventKey="link-2">Random feature</Nav.Link>
            <Nav.Link eventKey="link-3">Team feature</Nav.Link>
            <Nav.Link eventKey="link-4">Stuff for developers</Nav.Link>
            <Nav.Link eventKey="link-5">Another one</Nav.Link>
            <Nav.Link eventKey="link-6">RLast time</Nav.Link>
          </Nav>
        </Col>
        <Col>
          <Container>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">
                <strong>Resources</strong>
              </Nav.Link>
              <Nav.Link eventKey="link-7">Resource</Nav.Link>
              <Nav.Link eventKey="link-8">Resource name</Nav.Link>
              <Nav.Link eventKey="link-9">Another resource</Nav.Link>
              <Nav.Link eventKey="link-10">Final resource</Nav.Link>
            </Nav>
          </Container>
        </Col>
        <Col>
          <Container>
            <Nav defaultActiveKey="/About" className="flex-column">
              <Nav.Link href="/About">
                <strong>About</strong>
              </Nav.Link>
              <Nav.Link eventKey="link-11">Team</Nav.Link>
              <Nav.Link eventKey="link-12">Locations</Nav.Link>
              <Nav.Link eventKey="link-13">Privacy</Nav.Link>
              <Nav.Link eventKey="link-14">Teams</Nav.Link>
            </Nav>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
