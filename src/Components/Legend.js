import React from 'react'
import Felony from '../Images/Felony.png'
import Misdemeanor from '../Images/Misdemeanor.png'
import Violation from '../Images/Violation.png'

const Legend = (props) => {
    const imgStyle = {
        width: '2vw',
        height: '2vw',
        margin: '1.6vh 0 0 0'
    }
    return(
        <div style={{
            display: 'flex',
            width: '100vw',
            justifyContent: 'center'
        }}>
            <img src={Felony} alt='Felony' style={imgStyle}/><p>Felony</p>
            <img src={Misdemeanor} alt='Misdemeanor' style={imgStyle}/><p>Misdemeanor</p>
            <img src={Violation} alt='Violation' style={imgStyle}/><p>Violation</p>
        </div>
    )
}
export default Legend
