const Pazymys = ({ pazymys }) => {
  // 3. Pažymio vertinimas
  const vertintiPazymi = () => {
    return pazymys >= 5 ? "teigiamas" : "neigiamas";
  };

  return (
    <div>
      <span>{pazymys}</span> - {vertintiPazymi()}
    </div>
  );
};

export default Pazymys;
