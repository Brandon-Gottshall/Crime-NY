import React from "react"
import prison from '../Images/prison.jpg'
const Intro = props => {

    const { setProceed } = props
    // Object deconstruction for parent Component, APP's, method 'setProceed'

    return (
        <div style={{
                width: '100vw',
                height: '100vh',
                background: `url(${prison})`,
                backgroundPosition: '0% 40%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
            <h1 style={{color: 'white', marginBottom: '10vh', textShadow: '0 0 20px black' }}>CrimeNY</h1>
            <p style={{
                    color: 'black',
                    fontSize: '3vh',
                    fontWeight: '600',
                    textShadow: '0 0 4px white'
                }}>This experiment is a visualization of the ever changing
            fingerprint of NYC crime.</p>
            <p style={{
                    color: 'black',
                    fontSize: '3vh',
                    fontWeight: '600',
                    textShadow: '0 0 4px white'
                }}>This information is sourced from NYC OpenData</p>

            <button
                onClick={() => setProceed(true)}
                style={{
                    position: 'absolute',
                    bottom: '0',
                    width: '100vw',
                    height: '15vh',
                    fontSize: '4vh',
                    backgroundColor: '#555555',
                    color: 'white',
                    border: 'none',
                    marginTop: '5vh'
                }}
                >Continue</button>
            {/*Click event sets App's hook, Proceed, to True so that the conditional rendering will render the application.*/}
        </div>
    )
}
export default Intro
