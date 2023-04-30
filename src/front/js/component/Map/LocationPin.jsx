import React from "react"
import '../../../styles/map.css'
import MapPin from './GigHive_MapPin_v1.png'
import MapPin2 from './GigHive_MapPin_v2.png'

export const LocationPin = ({ text }) => (
    <div className="pin2">
      <img src={MapPin2} alt="" height={60} />
    </div>
  )