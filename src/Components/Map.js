import React, { useState, useEffect} from "react"
import ReactMapGL, { Popup } from "react-map-gl"



const Map = props => {
    const { markers, currentComplaint, setCurrentComplaint } = props
    const [ viewport, setViewport ] = useState({
        latitude: 40.7089754,
        longitude: -73.8029417,
        zoom: 9,
        width: '100vw',
        height: '60vh'
    })

    return (
        <div style={{backgroundColor: 'gray'}}>
            <ReactMapGL {...viewport}
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                        mapStyle='mapbox://styles/brandongottshall/ck5sdjd8x1x6u1io03mka7g5l'
                        onViewportChange={viewport => {
                            setViewport(viewport)
                        }}>
                {markers}
                {currentComplaint ? (
                    <Popup
                        latitude={parseFloat(currentComplaint.latitude)}
                        longitude={parseFloat(currentComplaint.longitude)}
                        onClose={() => {
                            setCurrentComplaint(null)
                        }}
                        >
                    <p>Complaint Number: {currentComplaint.cmplnt_num}</p>
                    <p>Type: {currentComplaint.law_cat_cd}</p>
                    <p>Description: {currentComplaint.ofns_desc}</p>
                    </Popup>
                ): null}
                }

            </ReactMapGL>
        </div>

    )
}

export default Map
