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
import {  Drawer, Fab, IconButton, List, ListItem, ListItemText } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';

export default function CarteComponent() {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [isFilterDialogOpen, setFilterDialogOpen] = useState(false);
  
  function MapComponent(){
    useMapEvents({
      click(){
        setSelectedMarker(false);
      }
    })
    return null
  }
  
// ajout de filtres à la carte: sport, salle, créneaux
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

  const handleClickFilterOpen = () => {
    setFilterDialogOpen(true);
  };
  
  const handleCloseFilterDialog = () => {
    setFilterDialogOpen(false);
  };

  return (
      <MapContainer center={userLocation} zoom={13}>
        <MapComponent/>
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
        {!isFilterDialogOpen && (
          <Fab onClick={handleClickFilterOpen}  style={{ backgroundColor: '#00FD90' }} className="group-container" >
          <TuneIcon/>
        </Fab>
        )}
        <Drawer 
          anchor="top" 
          open={isFilterDialogOpen} 
          onClose={handleCloseFilterDialog} 
          variant="temporary" 
          style={{ zIndex: 1000}}
        >
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
          <List>
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '8px' }}>
              <IconButton onClick={handleCloseFilterDialog} style={{ fontSize: '2rem', color: '#333' }}>
                <CloseIcon style={{ fontSize: '2.5rem' }} />
              </IconButton>
            </div>
            <ListItem >
              <ListItemText primary="Option 1" />
            </ListItem>
            <ListItem >
              <ListItemText primary="Option 2" />
            </ListItem>
            <ListItem >
              <ListItemText primary="Option 1" />
            </ListItem>
            <ListItem >
              <ListItemText primary="Option 2" />
            </ListItem>
          </List>
        </Drawer>
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
