import { use, useEffect, useState } from "react";
import { MAP_API_KEY } from "../utils/constants";
import "mapbox-gl/dist/mapbox-gl.css";
import "./home.css";
import LabelWithTitle from "../components/LabelWithTitle";
import Map, { Marker } from "react-map-gl/mapbox";
import MapContainer from "../components/MapContainer";
// latitude: 54.6876
// longitude: 25.2806

const Home = () => {
  const [ipDetails, setIpDetails] = useState({
    ip: null,
    region: null,
    org: null,
    country_name: null,
  });
  const [cordinates, setCordinates] = useState({
    latitude: 55.261909,
    longitude: 24.034855,
  });

  // const [latitude, setLatitude] = useState();
  // const [longitude, setLongitude] = useState();

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        setIpDetails({
          ip: data.ip,
          region: data.region,
          org: data.org,
          country_name: data.country_name,
        });
        setCordinates({
          latitude: data.latitude,
          longitude: data.longitude,
        });
        // setLatitude(data.latitude);
        // setLongitude(data.longitude);
      })
      .catch(() => {
        //fake data
        setIpDetails({
          ip: "78.60.184.222",
          region: "Random city",
          org: "TEO",
          country_name: "Random Country",
        });
        setCordinates({
          latitude: 55.261909,
          longitude: 24.034855,
        });
      });
  }, []);

  return (
    <div>
      <div className="ip-info">
        <LabelWithTitle
          title="IP address finder"
          type="primary"
          align="center"
        />
        <LabelWithTitle
          title="What is my IP address"
          type="secondary"
          align="left"
          body={ipDetails.ip}
        />
        <LabelWithTitle
          title="Location"
          type="default"
          body={`${ipDetails.country_name}, ${ipDetails.city}`}
          align="left"
        />
        <LabelWithTitle
          title="Internet provider"
          type="default"
          body={ipDetails.org}
          align="right"
        />
      </div>
      <div className="mapContainer">
        <MapContainer
          latitude={cordinates.latitude}
          longitude={cordinates.longitude}
        />
      </div>
    </div>
  );
};
export default Home;
