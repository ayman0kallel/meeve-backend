import "./carteStyle.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import PopupCard from "./PopupCard";
import logo from "../../assets/img/LOGO.png";
import LocationOn from "../../assets/img/Location-on.png";
import LocationOff from "../../assets/img/Location-off.png";
import { useEffect, useState } from "react";

export default function CarteComponent() {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  function MapComponent(){
    const map = useMapEvents({
      click(){
        setSelectedMarker(false);
      }
    })
    return null
  }
  

  useEffect(() => {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);
  if (!userLocation) {
    // Return loading or fallback UI here if userLocation is not available yet
    return <div>Refresh...</div>;
  }
  //markers
  const markers = [
    {
      geocode: userLocation,
      popup: "popup 1",
    },
    {
      geocode: [45.7400, 4.8760],
      popup: "popup 1",
    }
  ];

  const LocationOffIcon = new Icon({
    iconUrl: LocationOff,
    iconSize: [38, 38],
  });
  const LocationOnIcon = new Icon({
    iconUrl: LocationOn,
    iconSize: [38, 38],
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };
  const handleMarkerClick = (index) => {
    setSelectedMarker(index);
  };

  const resetSelectedMarker = () => {
    setSelectedMarker(null);
  };
  console.log("here: ",userLocation)

  return (
      <MapContainer center={userLocation} zoom={13}>
        <MapComponent/>
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap </a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup chunkedLoading iconCreateFunction={createCustomClusterIcon}>
          {markers.map((marker, index) => (
            <Marker 
            position={marker.geocode} 
            icon={selectedMarker === index ? LocationOnIcon : LocationOffIcon} 
            key={index} 
            eventHandlers={{click: () => handleMarkerClick(index)}}
            >
              <Popup closeButton={false}>
                <PopupCard />
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
  );
}
