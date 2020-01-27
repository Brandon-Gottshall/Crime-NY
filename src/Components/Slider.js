import React from "react";

const Slider = props => {
    // Here we will need to be passing a setHook to change the year
    // of the filter.

    return (
        <div style={{backgroundColor: 'cyan'}}>
            <p>This is the slider component.</p>
            <p>This component will set hooks in DataHandler to
                filter data being displayed to the map component.</p>
        </div>
    )
}
export default Slider