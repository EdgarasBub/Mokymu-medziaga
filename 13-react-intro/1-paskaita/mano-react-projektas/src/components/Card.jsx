import { Children } from "react";

const Card = ({ title, description, Children }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      {Children}
    </div>
  );
}
export default Card;