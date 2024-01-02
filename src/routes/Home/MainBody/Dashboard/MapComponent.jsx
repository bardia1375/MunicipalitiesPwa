import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styled from "styled-components";
import { Button } from "components/common";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("../../../../assets/images/profilephoto/worker.png"),
  iconUrl: require("../../../../assets/images/profilephoto/worker.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
const CircularMarker = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function MapComponent({ userLocation }) {
  const [positions, setPositions] = useState([
    [35.7361957, 51.425828], // Example coordinates for Point 1
    [35.732298, 51.429343], // Example coordinates for Point 2
    [35.735298, 51.435343], // Example coordinates for Point 3
    [35.732298, 51.449343], // Example coordinates for Point 2
    [35.735298, 51.445343], // Example coordinates for Point 3
  ]);
  const LocateControl = () => {
    const map = useMap();

    const handleClick = () => {
      map.locate({ setView: true, maxZoom: 16 });

      map.on("locationfound", (e) => {
        L.marker(e.latlng).addTo(map).bindPopup("شما اینجا هستید!").openPopup();
      });

      map.on("locationerror", (e) => {
        alert("موقعیت شما یافت نشد! لطفا چند دقیقه دیگر مجدد تلاش کنید.");
      });
    };

    return (
      <div>
        <img
          src="../../../../assets/images/profilephoto/myLocation.png" // Path to your image
          alt="Locate Me"
          className="locate-me-btn"
          onClick={handleClick}
          style={{ zIndex: 1000, position: "absolute", bottom: 0, left: 0 }}
        />
        {/* <img src='assets/images/profilephoto/newWorker.png' style={{zIndex:1000,  position: "absolute",bottom:0,left:0}} onClick={handleClick} /> */}
      </div>
    );
  };
  //   useEffect(()=>{
  //   const newLocation=positions.slice()
  //   if(userLocation!==null){
  //     newLocation.splice(0, 1,userLocation);
  //     console.log("newLocation",newLocation);
  //     setPositions(newLocation)

  //   }
  // },[userLocation])
  const customCircularMarkerIcon = new L.divIcon({
    className: "custom-circular-marker",
    iconSize: [60, 60], // Adjust the width and height of the icon
    iconAnchor: [30, 30], // Center of the icon
  });
  const blueDotIcon = new L.Icon({
    iconRetinaUrl: require("../../../../assets/images/profilephoto/302321278.jpg"),
    iconSize: [30, 30],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
  });
  // const [userLocation, setUserLocation] = useState(null);

  // useEffect(() => {
  //   // Get user's current location using Geolocation API
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;
  //       setUserLocation([latitude, longitude]);
  //     },
  //     (error) => {
  //       console.error('Error getting user location:', error.message);
  //     }
  //   );
  // }, []); // Empty dependency array ensures the effect runs only once
  console.log("userLocation", userLocation);
  return (
    <MapContainer
      center={positions[0]}
      zoom={userLocation ? 15 : 13}
      style={{ height: "30vh", width: "100%", zIndex: 1 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map((position, index) => (
        <Marker key={index} position={position}>
          <Popup>
            <div style={{ textAlign: "center" }}>
              <CircularMarker>
                <img
                  src={require("../../../../assets/images/profilephoto/302321278.jpg")}
                  alt={`Point ${index + 1}`}
                />
              </CircularMarker>
              <div>جواد مقبلی</div>
            </div>
          </Popup>
        </Marker>
      ))}
      {userLocation && (
        <Marker position={userLocation} icon={blueDotIcon}>
          <Popup>
            <CircularMarker>
              <img
                src={require("../../../../assets/images/profilephoto/302321278.jpg")}
              />
            </CircularMarker>
          </Popup>
        </Marker>
      )}
      <LocateControl />
    </MapContainer>
  );
}

export default MapComponent;
