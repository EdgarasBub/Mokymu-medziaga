import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

const Komp1 = () => {
  const { data, loading, makeApiCall } = useFetch(
    "https://api.ipify.org?format=json",
    2000
  );
  const [ip, setIp] = useState(null);

  const getData = () => {
    makeApiCall();
    fetch("https://api.ipify.org?format=json")
      .then((Response) => Response.json())
      .then((data) => setIp(data.ip));
  };

  return (
    <div>
      <h3>api pvz</h3>
      <button onClick={getData}>Get ip data</button>
      <p>tavo ip yra: {ip}</p>
      <p>
        custom hooks - tavo ip yra: {loading ? "loading data...." : data?.ip}
      </p>
    </div>
  );
};
export default Komp1;
