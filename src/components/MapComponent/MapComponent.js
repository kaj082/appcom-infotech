import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { GOOGLE_API } from "../../contants/RouterContant";

const mapContainerStyle = {
  width: "100%",
  height: "800px",
};

const MyMapComponent = ({ center }) => {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_API}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;
