import "./App.css";
import InlineStylingJsObjects from "./components/CSS/inline-styling/js-objects/InclineStylingJsObjects";
import InlineStylingPlain from "./components/CSS/inline-styling/plain/InlineStylingPlain";
import BootstrapCss from "./components/CSS/library/BootstrapCss";
import Plain from "./components/CSS/plain/Plain";
import "bootstrap/dist/css/bootstrap.min.css";
import SassStyling from "./components/Sass/SassStyling";
import StyledComponentsExample from "./components/styled-components/StyledComponents";

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
      <hr />
      <SassStyling />
      <hr />
      <StyledComponentsExample />
    </>
  );
}

export default App;
