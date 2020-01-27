import React, {useState} from "react"
import ReactMapGL, { Marker, Popup } from "react-map-gl"


const Map = props => {
    const { markers } = props
    const [ viewport, setViewport ] = useState({
        latitude: 40.7089754,
        longitude: -73.8029417,
        zoom: 10,
        width: '100vw',
        height: '70vh'
    })


    return (
        <div style={{backgroundColor: 'gray'}}>
            <p>This is the Map component</p>
            <ReactMapGL {...viewport}
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                        mapStyle='mapbox://styles/brandongottshall/ck5sdjd8x1x6u1io03mka7g5l'
                        onViewportChange={viewport => {
                            setViewport(viewport)
                        }}>
                {markers}
            </ReactMapGL>
            <p>This component will utilize the Map GL MapBox wrapper Library to display a dynamic map.</p>
        </div>

    )
}

export default Map