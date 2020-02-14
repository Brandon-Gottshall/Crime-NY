import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import Map from './Map.js'
import Header from './Header.js'
import Footer from './Footer.js'
import Legend from './Legend.js'
import axios from 'axios'
import {Marker} from "react-map-gl";
import SliderComponent from "./SliderComponent"
import Felony from '../Images/Felony.png'
import Misdemeanor from '../Images/Misdemeanor.png'
import Violation from '../Images/Violation.png'


const DataHandler = props => {
    const { year } = useParams()
    const [data, setData] = useState(null)
    const [url, setUrl] = useState('https://data.cityofnewyork.us/resource/qgea-i56i.json')
    const [complaints, setComplaints] = useState([])
    const [currentComplaint, setCurrentComplaint] = useState(null)

    const apiCall = async () => {
        const response = await axios.get(url)
        setData(response.data)
        setComplaints(response.data.map((complaint) => {
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
                    <div style={customPin}
                        onClick={() => {setCurrentComplaint(complaint)}}
                        onTouch={() => {setCurrentComplaint(complaint)}}
                        >
                        <img style={{width: '10px',height: '10px'}} src={imageSelector(complaint.law_cat_cd)} alt='pin'/>
                    </div>
                </Marker>)
                : null)
        }))
    }

    useEffect(() => {
            setCurrentComplaint(null)
        setUrl(`https://data.cityofnewyork.us/resource/qgea-i56i.json?$where=cmplnt_fr_dt%20between%20%27${year}-01-01T00:00:00%27%20and%20%27${year}-12-31T23:59:00%27`)
        apiCall()
    }, [year])

    return (<div style={{textAlign: 'center', backgroundColor: 'gray', height: '100vh'}}>
    {(data ?
        (<div>
            <Header/>
            <Map data={data} markers={complaints} currentComplaint={currentComplaint} setCurrentComplaint={setCurrentComplaint}/>
            <Legend/>
            <SliderComponent {...props} />
            <span>Slide to change year.</span>
            <Footer/>
        </div>
        ):(null))
    }</div>)
}
export default DataHandler
