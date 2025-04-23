import "./SassStyling.scss";

const SassStyling = () => {
  return (
    <div id="sassComponent">
      <h2>Sass styling</h2>

      <div id="sassContainer">
        <h4>Mano sass bandymas</h4>
        <p className="sassLoremText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi
          vitae voluptatem ratione voluptatum, laudantium ad quod voluptate, rem
          asperiores nam debitis nobis aperiam fugit doloremque ea, in totam
          facilis.
        </p>
        <button className="btn-click">Click me</button>
      </div>
      <div className="sassLinks">
        <ul>
          <li>
            <a className="link">pvz</a>
          </li>
          <li>
            <a className="link">example</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SassStyling;
