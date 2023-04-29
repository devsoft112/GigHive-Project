import React from "react"
import '../../../styles/map.css'

export const LocationPin = ({ text }) => (
    <div className="pin">
      <i class="fa-solid fa-location-dot map-pin"></i>
      <p className="pin-text">{text}</p>
    </div>
  )