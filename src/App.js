import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import Intro from './Components/Intro.js'
import DataHandler from './Components/DataHandler.js'

function App(props) {
    const [ proceed, setProceed ] = useState(null);
  window.addEventListener('load', () => {
      props.history.push('2006')
  })

  return (
      <Route exact path='/:year'>
          <div>
              {proceed
                  ?
                  (<DataHandler {...props}/>)
                  : (<div>
                      <Intro setProceed={setProceed}/>
                  </div>)
              }
          </div>
      </Route>
  )}

export default withRouter(App);
