import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const position = [-1.9515, 30.0606]; // Same coordinates

const MyFreeMap = () => {
  return (
    <div style={containerStyle}>
      <MapContainer center={position} zoom={17} scrollWheelZoom={false} style={containerStyle}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Kigali Location<br /> (OpenStreetMap)
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyFreeMap;
