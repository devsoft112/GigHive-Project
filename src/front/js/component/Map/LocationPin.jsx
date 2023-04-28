// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'
import React from "react"

export const LocationPin = ({ text }) => (
    <div className="pin">
      <i class="fa-solid fa-user"></i>
      <p className="pin-text">{text}</p>
    </div>
  )