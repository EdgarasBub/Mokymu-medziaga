import "./App.css";
import EinaPrieLentos from "./assets/components/EinaPrieLentos";
import GeriausiasMedis from "./assets/components/GeriausiasMedis";
import Laimejimas from "./assets/components/Laimejimas";
import Sansas from "./assets/components/Sansas";
import Skaiciai from "./assets/components/Skaiciai";
import Tikrinimai from "./assets/components/Tikrinimai";

function App() {
  return (
    <>
      <hr />
      <Laimejimas />
      <hr />
      <Sansas />
      <hr />
      <Tikrinimai />
      <hr />
      <GeriausiasMedis />
      <hr />
      <Skaiciai />
      <hr />
      <EinaPrieLentos />
    </>
  );
}

export default App;
