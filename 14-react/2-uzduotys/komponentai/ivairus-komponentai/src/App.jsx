import Header from "./Header";
import Paslaugos from "./Paslaugos";
import Pirkiniai from "./Pirkiniai";
import Tekstas from "./Tekstas";

const App = () => {
  return (
    <>
        <Header />
      <Tekstas />
      <Pirkiniai />
      <Paslaugos />
    </>
  );
}

export default App;