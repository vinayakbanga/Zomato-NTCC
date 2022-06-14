import React from 'react'
import { FaDirections } from 'react-icons/fa'

import { MapContainer, TileLayer, useMap, Marker,Popup } from 'react-leaflet'

const Mapview = (props) => {
  return (
    <div>
        <div>
       <h4 className="text-xg font-medium">
              call
            </h4>
              <h5 className='text-zomato-400 font-medium'>{props.phno}</h5>
              </div>
              <div>
              <h4 className="text-xg font-medium">
              Direction
            </h4>
            <div className='w-full h-48'>
            <MapContainer 
            center={props.mapLocation} 
            zoom={13} 
            scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={props.mapLocation}>
                  <Popup>
                    {props.title}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <p>
            {props.address}
            </p>
            <button className=' flex items-center px-3 py-2 my-1 text-gray-700 border rounded-lg'>
            <FaDirections/>Direction
            </button>
            </div>
    </div>
  )
}

export default Mapview