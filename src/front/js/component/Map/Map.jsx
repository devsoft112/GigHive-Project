import React from "react";
import GoogleMapReact from 'google-map-react';
import '../../../styles/map.css'
import { LocationPin } from "./LocationPin.jsx";

export const Map = ({ location, zoomLevel }) => (
    <><div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDecCwDfJgrb7eqAPY9il-YWvcs5RdPmuE' }}
          center={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.name}
          />
        </GoogleMapReact>
      </div>
    </div></>
  )