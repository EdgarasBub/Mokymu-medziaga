const InlineStylingJsObjects = () => {
  let divContainer = { display: "flex", color: "blue", margin: "30px" };
  let textColor = { color: "pink" };
  let color = "red";
  let isPrimary = true;

  return (
    <div style={divContainer}>
      <h2 style={(textColor, { padding: "20px" })}>
        Inclince styling js objects
      </h2>
      <p style={{ color: isPrimary ? "red" : "green" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        commodi, enim excepturi assumenda deleniti quasi tenetur deserunt
        accusamus magnam architecto in error mollitia exercitationem.
        Dignissimos nostrum culpa sit officia quidem!
      </p>
    </div>
  );
};

export default InlineStylingJsObjects;
