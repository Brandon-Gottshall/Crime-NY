import React from 'react'
import cw from '../Images/codewars.jpg'
import mail from '../Images/gmail.jpg'
import git from '../Images/github.jpg'



const Footer = () => {
    const iconStyle = {
        width: '2vw',
        height: '2vw',
        padding: '0',
        margin: '2vh 0 0 5vw'
    }
    return(
        <div style={{
            backgroundColor: 'black',
            position: 'fixed',
            bottom: '0',
            width: '100vw',
            height: '8vh',
            display: 'flex'
        }}>
            <a href='mailto:Brandon@Gottshall.dev'><img src={mail} style={iconStyle} alt='Mail'/></a>

            <a href='https://www.codewars.com/users/koden11'><img src={cw} style={iconStyle} alt='CodeWars'/></a>

            <a href='https://github.com/Brandon-Gottshall'><img src={git} style={iconStyle} alt='GitHub'/></a>
        <a style={{
            width: '20vw',
            height: '8vh',
            position: 'absolute',
            right: '5vw',
            bottom: '0',
            textDecoration: 'none'
            }} href='HTTPS://www.gottshall.dev'>
            <h2 style={{
                    color: 'white',
                }}>Gottshall.DEV</h2>
        </a>



        </div>
    )
}

export default Footer
