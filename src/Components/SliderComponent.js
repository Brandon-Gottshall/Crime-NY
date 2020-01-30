import React from "react";

const SliderComponent = props => {

    const slideContainerStyle = {
      width: '100%'
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
                        console.log(e.target.value)
                        console.log(props)
                        // props.history.push('/hello')
                    }}
                    >

            </input>
        </div>
    )

}

export default SliderComponent
