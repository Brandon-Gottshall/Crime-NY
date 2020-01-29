import React from "react";
import { Slider, Rail, Handles, Tracks, Ticsks } from 'react-compound-slider'

const SliderComponent = props => {
    // Here we will need to be passing a setHook to change the year
    // of the filter.
    const sliderStyle = {
        width: '80vw',
        height: 80,
        border: '1px solid steelblue'
    }
    const railStyle = {
        width: '80vw',
        height: 10,
        borderRadius: 5,
        backgroundColor: '#8B9CB6',
    }

    // <Slider
    //      rootStyle={sliderStyle}
    //      domain={[0, 100]}
    //      values={[10]}
    //  >
    //       <div style={railStyle}></div>
    //  </Slider>

    return (
        <div style={{backgroundColor: 'cyan'}}>

            <p>This is the slider component.</p>
            <p>This component will set hooks in DataHandler to
                filter data being displayed to the map component.</p>
            //
        </div>
    )
}
export default Slider
