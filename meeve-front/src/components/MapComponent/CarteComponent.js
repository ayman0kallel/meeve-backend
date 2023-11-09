import "./carteStyle.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import PopupCard from "./PopupCard";
import { useState } from "react";

export default function CarteComponent() {
  const [openPopup, setOpenPopup] = useState(false);

  // Event handler for opening a popup
  const handlePopupOpen = () => {
    setOpenPopup(true);
  };

  // Event handler for closing a popup
  const handlePopupClose = () => {
    setOpenPopup(false);
  };

  //markers
  const markers = [
    {
      geocode: [48.86, 2.362],
      popup: "popup 1",
    },
    {
      geocode: [48.85, 2.3522],
      popup: "popup 2",
    },
    {
      geocode: [48.855, 2.34],
      popup: "popup 3",
    },
  ];

  const customIcon = new Icon({
    iconUrl: require("../../assets/img/marker.png"),
    iconSize: [38, 38],
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  return (
      <MapContainer center={[48.8566, 2.3522]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap </a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup chunkedLoading iconCreateFunction={createCustomClusterIcon}>
          {markers.map((marker, index) => (
            <Marker position={marker.geocode} icon={customIcon} key={index} >
              <Popup  closeButton={false}>
                <PopupCard />
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
  );
}
