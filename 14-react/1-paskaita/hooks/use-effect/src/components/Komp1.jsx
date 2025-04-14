import { use } from "react";
import { useEffect } from "react";
import { useState } from "react";
const Komp1 = () => {
  const [count, setCount] = useState(0);
  const [zodis, setZodis] = useState("zodis");

  console.log(" Global : Komp1 render");

  // STEBETOJAS KOMPONENTU
  useEffect(() => {
    console.log("useEffect: komp1 mounted");
  }, []);

  useEffect(() => {
    console.log("useEffect: komp1 mounted OR updated ");
  });

  useEffect(() => {
    console.log("useEffect: count value is changed ");
    if (count > 5) {
      setCount(0);
    }
  }, [count]);

  useEffect(() => {
    console.log("useEffect: count and zodis ");
    if (zodis === "word") {
      setZodis("zodis 3");
    }
  }, [count, zodis]);

  const handleClick = () => {
    console.log("click");
    // setZodis("word");
    setCount(count + 1);
  };

  //unmount

  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log("unmount 2");
    };
  }, []);

  return (
    <div>
      <h2>komp1</h2>
      <button onClick={handleClick}>click me</button>
      <p>{count}</p>
      <p>{zodis}</p>
    </div>
  );
};

export default Komp1;
