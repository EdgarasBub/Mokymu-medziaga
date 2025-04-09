const Mygtukai = (props) => {
  const onClickButtonhandler = () => {
    console.log("onclick button event:" + props.buttonText);
    props.tevoKomponentoFunkcija("onclick button event:" + props.buttonText);
    props.tevoKomponentoFunkcija(2000);
  };

  return (
    <>
      <h3> Mygtukai</h3>
      <button onClick={onClickButtonhandler}>{props.buttonText}</button>
    </>
  );
};

export default Mygtukai;
