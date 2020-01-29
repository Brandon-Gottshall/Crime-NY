import React, {useEffect, useState} from "react";
import Map from './Map.js'
import axios from 'axios'
import {Marker} from "react-map-gl";
import Felony from '../Images/Felony.png'
import Misdemeanor from '../Images/Misdemeanor.png'
import Violation from '../Images/Violation.png'


const DataHandler = props => {

    const [data, setData] = useState(null)
    const [url, setUrl] = useState('https://data.cityofnewyork.us/resource/qgea-i56i.json')
    const [complaints, setComplaints] = useState([])
    const [currentComplaint, setCurrentComplaint] = useState(null)

    const apiCall = async () => {
        const response = await axios.get(url)
        setData(response.data)
        console.log(response.data)
        setComplaints(response.data.map((complaint) => {
            console.log(complaint)
            const latLong = [ parseFloat(complaint.latitude), parseFloat(complaint.longitude)]
            const customPin = {
                width: '10px',
                height: '10px'
            }
         const imageSelector = () => {switch (complaint.law_cat_cd) {
                     case 'FELONY' :
                        return Felony
                     case 'MISDEMEANOR' :
                        return Misdemeanor
                     case 'VIOLATION' :
                        return Violation
                }
            }

            return (
                (complaint.latitude)
                ? (<Marker key={complaint.cmplnt_num} latitude={latLong[0]} longitude={latLong[1]}>
                    <div
                        style={customPin}
                        onClick={(complaint) => {
                            setCurrentComplaint(complaint)
                            console.log('complaint was saved to state')
                        }}
                        >
                        <img style={{
                            width: '10px',
                            height: '10px'
                        }} src={imageSelector(complaint.law_cat_cd)} alt='pin'/>
                    </div>
                </Marker>)
                : null)
        }))
    }

    useEffect(() => {
        apiCall()
    }, [url])

    return (<div style={{
            backgroundColor: 'red'
        }}>
        {
            (
                data ?
                (
                    <div>
                        <p>This is the datahandler component.</p>
                        <Map data={data} markers={complaints}/>
                    </div>
                )
                                    :
                (
                    <p>No Data</p>
                )
            )
        }
    </div>)
}
export default DataHandler
