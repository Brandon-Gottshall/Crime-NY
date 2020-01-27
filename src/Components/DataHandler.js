import React from "react";
import Map from './Map.js'
import Slider from './Slider.js'

const DataHandler = props => {
    return (
        <div style={{backgroundColor: 'red'}}>
            <p>This is the datahandler component.</p>
            <Map />
            <Slider/>
        </div>
    )
}
export default DataHandler