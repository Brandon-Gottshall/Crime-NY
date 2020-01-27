import React from "react"
import ReactMapGL, { Map, Popup } from "react-map-gl"

const Map = props => {
    return (
        <div style={{backgroundColor: 'gray'}}>
            <p>This is the Map component</p>
            <p>This component will utilize the Map GL MapBox wrapper Library to display a dynamic map.</p>
        </div>

    )
}

export default Map