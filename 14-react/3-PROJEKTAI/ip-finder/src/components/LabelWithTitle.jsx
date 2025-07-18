const LabelWithTitle = ({ title, body, type, align }) => {
  return (
    <>
      {type === "primary" && <h1>{title}</h1>}

      {type === "secondary" && <h2>{title}</h2>}

      {type === "default" && <h4>{title}</h4>}

      {body && <p>{body}</p>}
    </>
  );
};

export default LabelWithTitle;
