import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//Don't forget to import the css
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function MyMap() {
  //Some random co-ordinate
  const position = [51.505, -0.09];

  const ironhackLogo = new L.Icon({
    iconUrl:
      "https://i1.wp.com/www.alliron.vc/wp-content/uploads/2018/05/logo-ironhack-1.png",
    iconSize: [68, 65],
  });

  //Do not forget to set a width and height style to your map. Else it won't show up
  return (
    <div>
      <MapContainer
        style={{ width: "800px", height: "500px" }}
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={ironhackLogo}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MyMap;
