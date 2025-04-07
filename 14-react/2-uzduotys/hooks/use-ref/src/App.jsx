import "./App.css";
import Kelione from "./components/Kelione";
import MedzioApdirbejas from "./components/MedzioApdirbejas";
import Skaicius from "./components/Skaicius";
import Temperaturos from "./components/Temperaturos";
import Prekes from "./components/Prekes";
import Kepyklele from "./components/Kepyklele";

function App() {
  return (
    <>
      <Skaicius />
      <hr />
      <Kelione />
      <hr />
      <MedzioApdirbejas />
      <hr />
      <Temperaturos />
      <hr />
      <Prekes />
      <hr />
      <Kepyklele />
    </>
  );
}

export default App;
