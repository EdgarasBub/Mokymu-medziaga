import "./App.css";
import CounterTev from "./components/Counter/CounterTev";
import ImoneBendras from "./components/Imone/ImoneBendras";
import KnyguBendras from "./components/Knygos/KnyguBendras";
import ZodziuBendras from "./components/Zodziai/ZodziuBendras";

function App() {
  return (
    <>
      <CounterTev />
      <hr />
      <ZodziuBendras />
      <hr />
      <KnyguBendras />
      <hr />
      <ImoneBendras />
      <hr />
    </>
  );
}

export default App;
