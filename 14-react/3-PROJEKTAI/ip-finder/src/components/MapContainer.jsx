import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { use, useEffect, useState } from "react";
import { MAP_API_KEY } from "../utils/constants";
import { AiFillFrown } from "react-icons/ai";

const MapContainer = (props) => {
  const [viewPort, setViewPort] = useState({
    latitude: props.latitude,
    longitude: props.longitude,
    zoom: 5,
    width: "100%",
    height: "100%",
  });
  useEffect(() => {
    const tmpViewPort = { ...viewPort };
    tmpViewPort.latitude = props.latitude;
    tmpViewPort.longitude = props.longitude;
    tmpViewPort.zoom = 14;

    // setViewPort(tmpViewPort);
  }, [props]);
  return (
    <>
      <Map
        mapboxAccessToken={MAP_API_KEY}
        {...viewPort}
        mapStyle={"mapbox://styles/mapbox/streets-v9"}
        onViewportChange={(viewPort) => setViewPort(viewPort)}
      >
        <Marker longitude={24.034855} latitude={55.261909} anchor="bottom">
          <AiFillFrown color="red" style={{ fontSize: "32px" }} />
        </Marker>
      </Map>
    </>
  );
};

export default MapContainer;
