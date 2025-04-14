import "./App.css";
import InlineStylingJsObjects from "./components/CSS/inline-styling/js-objects/InclineStylingJsObjects";
import InlineStylingPlain from "./components/CSS/inline-styling/plain/InlineStylingPlain";
import BootstrapCss from "./components/CSS/library/BootstrapCss";
import Plain from "./components/CSS/plain/Plain";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <h1>CSS EXAMPLES</h1>
      <Plain />
      <hr />
      <InlineStylingPlain />
      <hr />
      <InlineStylingJsObjects />
      <hr />
      <BootstrapCss />
    </>
  );
}

export default App;
