import React from "react";
import { Card as Card2, Container, Button } from "react-bootstrap";


const Card = () => {


    
  return (
    <Container>
      <Container className="d-flex justify-content-between">
        <Card2 className="m-5">
          <Card2.Body>
            <Card2.Header className="text-center">FREE</Card2.Header>

            <Card2.Text className="text-center">
              <h2>
                {" "}
                <strong>$0</strong>/ mo{" "}
              </h2>
            </Card2.Text>
            <Card2.Text className="text-center">
              {" "}
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card2.Text>
            <Container className="text-center">
              <Button>Sign up for Free</Button>
            </Container>
          </Card2.Body>
        </Card2>
        <Card2 className="m-5">
          <Card2.Body>
            <Card2.Header className="text-center">PRO</Card2.Header>

            <Card2.Text className="text-center">
              <h2>
                {" "}
                <strong>$50</strong>/ mo{" "}
              </h2>
            </Card2.Text>
            <Card2.Text className="text-center">
              {" "}
              Some quick example text to build on the card Header and make up
              the bulk of the card's content.
            </Card2.Text>
            <Container className="text-center">
              <Button>Get started</Button>
            </Container>
          </Card2.Body>
        </Card2>
        <Card2 className="m-5">
          <Card2.Body>
            <Card2.Header className="text-center">EXTRA PRO</Card2.Header>

            <Card2.Text className="text-center">
              <h2>
                {" "}
                <strong>$100</strong>/ mo{" "}
              </h2>
            </Card2.Text>
            <Card2.Text className="text-center">
              {" "}
              Some quick example text to build on the card Header and make up
              the bulk of the card's content.
            </Card2.Text>
            <Container className="text-center">
              <Button>Contact us</Button>
            </Container>
          </Card2.Body>
        </Card2>
      </Container>
    </Container>
  );
};

export default Card;
