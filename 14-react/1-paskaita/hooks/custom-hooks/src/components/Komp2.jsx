import useWindowSize from "../hooks/useWindowSize";

// const checkSize () => {
//     const width = dispaySize.width;
//     if (width <=600) {
//         return'mobile';

//     }

// }

const Komp2 = () => {
  const displaySize = useWindowSize();
  return (
    <div>
      <h3> ekrano dydzio pvz</h3>
      <p>height: {displaySize.height}</p>
      <p>width: {displaySize.width}</p>
    </div>
  );
};

export default Komp2;
