import React from "react";

const Intro = props => {

    const { setProceed } = props
    // Object deconstruction for parent Component, APP's, method 'setProceed'

    return (
        <div>
            <p> This is the intro component</p>
            <p>Click Proceed to continue.</p>

            <button onClick={() => setProceed(true)}>Proceed</button>
            {/*Click event sets App's hook, Proceed, to True so that the conditional rendering will render the application.*/}
        </div>
    )
}
export default Intro