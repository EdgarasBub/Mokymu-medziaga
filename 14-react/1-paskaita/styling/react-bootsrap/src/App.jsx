import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container className="text-center mt-5">
        <h2>Pricing</h2>
        <br />
        <p>Informacija apie mano MINIME</p>
      </Container>
      <Card />
      <Footer />
    </>
  );
}

export default App;
