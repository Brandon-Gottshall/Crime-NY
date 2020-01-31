import React from 'react'

const Header = () => {
    return(
        <div style={{
                width: '100vw',
                height: '10vh',
                backgroundColor: 'black',
                textAlign: 'center',
                marginTop: '-4vh'
        }}>
            <h1 style={{
                color: 'white',
                paddingTop: '2vh',
                fontSize: '5vh'
            }}>CrimeNY</h1>
        </div>
    )
}

export default Header
