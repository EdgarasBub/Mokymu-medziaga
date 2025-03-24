import ApieMus from "./components/ApieMus/ApieMus";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Paslaugos from "./components/Paslaugos/Paslaugos";
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Paslaugos />
      <ApieMus />
      <Footer />
    </>
  );
}

export default App;