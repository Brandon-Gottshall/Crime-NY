import React from "react";

const Intro = props => {

    const { setProceed } = props
    // Object deconstruction for parent Component, APP's, method 'setProceed'

    return (
        <div style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: 'black',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
            <h1 style={{color: 'white', marginBottom: '10vh' }}>CrimeNY</h1>
            <h2 style={{color: 'white', marginBottom: '-3vh'}}>Welcome</h2>
            <p style={{
                    marginTop: '10vh',
                    color: 'white',
                    fontSize: '3vh'
                }}>This experiment is a visualization of the ever changing
            fingerprint of NYC crime.</p>
            <p style={{
                    color: 'white',
                    fontSize: '3vh'
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
