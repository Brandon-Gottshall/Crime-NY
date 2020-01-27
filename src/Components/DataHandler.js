import React, {useEffect, useState} from "react";
import Map from './Map.js'
import Slider from './Slider.js'
import axios from 'axios'
import {Marker} from "react-map-gl";

const DataHandler = props => {

    const [ data, setData ] = useState(null)
    const [ url, setUrl ] = useState('https://data.cityofnewyork.us/resource/qgea-i56i.json')
    const [ complaints, setComplaints ] = useState([])


    const apiCall = async () => {
        const response = await axios.get(url)
        setData(response.data)
        console.log(response.data)
        setComplaints(response.data.map((complaint) => {
            console.log(complaint)
            const latLong = [parseFloat(complaint.latitude), parseFloat(complaint.longitude)]
            console.log(latLong)

            return (
                ((complaint.latitude) ? (
                    <Marker
                        key={complaint.cmplnt_num}
                        latitude={latLong[0]}
                        longitude={latLong[1]}
                    >
                        <button>{complaint.law_cat_cd}</button>
                    </Marker>
                    ) : null)

            )}))
    }
    useEffect(() => {
        apiCall()
    },[url])
    return (
        <div style={{backgroundColor: 'red'}}>
            {(data ? (
                <div>
                    <p>This is the datahandler component.</p>
                    <Map data={data} markers={complaints}/>
                    <Slider/>
                </div> )
                    : (<p>No Data</p>))}
        </div>
    )
}
export default DataHandler