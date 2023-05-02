import React from "react"
import '../../../styles/map.css'

import mapPin from './GigHive_MapPin_v2.png'

export const LocationPin = ({ text }) => (
    <div className="pin">
      <img id="mapPin"src={mapPin} height={50}></img>
    </div>
  )