const ProgramavimoKalba = (props) => {
  const onClick = (language) => {
    props.kalbosPasirinkimas(language);
  };

  return (
    <div>
      <button onClick={() => onClick("Javascript")}>Javascript</button>
      <button onClick={() => onClick("PHP")}>PHP</button>
      <button onClick={() => onClick("c#")}>c#</button>
      <button onClick={() => onClick("Nepasirinkta")}>Nepasirinkta</button>
    </div>
  );
};

export default ProgramavimoKalba;
