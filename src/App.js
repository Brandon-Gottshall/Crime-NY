import React, { useState } from 'react';
import logo from './logo.svg';
import Intro from './Components/Intro.js'
import DataHandler from './Components/DataHandler.js'

function App() {
  const [ proceed, setProceed ] = useState(null);
  return (
    <div>
      {/*I want to conditionally render here the introduction screen than into the data container.*/}
      {proceed ? (
          <DataHandler/>
          )
                  :
                  (<div>
                      <p>This is the intro screen</p>
                       {/*This should be a bit of react router pointed at /intro*/}
                      <Intro setProceed={setProceed}/>
                  </div>)
      }

    </div>
  );
}

export default App;