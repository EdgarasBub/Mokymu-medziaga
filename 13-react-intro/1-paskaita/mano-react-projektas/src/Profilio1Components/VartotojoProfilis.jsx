function VartotojoProfilis({ vardas, amzius, spalva }) {
    return (
      <div>
       <h1>Vardas: {vardas} </h1>
        <p>Amzius:{amzius} </p>
        <p>Megstamiausia spalva: <span style={{ color: spalva}}>{spalva}</span></p>
      </div>
    );
  }
  
  export default VartotojoProfilis;
  