import React, { useState } from "react";

const SliderComponent = props => {
    const [year, setYear] = useState(2006)

    const slideContainerStyle = {
      width: '100%',
      height: '8vh'
    }
    const sliderStyle = {
      appearance: 'none',
      width: '100%',
      height: '25px',
      background: '#d3d3d3',
      outline: 'none',
      opacity: '0.7',
      transition: 'opacity .2s',
      ':hover': { opacity: '1' }
    }

    return (
        <div style={slideContainerStyle}>
            <input type="range"
                    min="2006"
                    max="2019"
                    step='1'
                    style={sliderStyle}
                    id="myRange"
                    onMouseUp={(e) => {
                        e.preventDefault()
                        props.history.push(e.target.value)
                    }}
                    onTouchEnd={(e) => {
                        e.preventDefault()
                        props.history.push(e.target.value)
                    }}
                    onChange={ (e) => {
                        setYear(e.target.value)
                    }}
                    >
            </input>
            <h3 style={{
                    textAlign: 'center',
                    width: '100vw',
                    marginBottom: '1vh'
                }}>{year}</h3>
        </div>
    )
}

export default SliderComponent
