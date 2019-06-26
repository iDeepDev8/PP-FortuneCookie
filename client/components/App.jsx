import React from 'react'
import { Route } from 'react-router-dom'

import Form from './Form'
import Cookie from '/Cookie'
import Luck from '/Luck'
import Horoscope from '/Horoscope'
import Home from '/Home'

const App = () => {
  return (
    <React.Fragment>
      <h1></h1>
      <Route path="/" exact component={Home} />
      <Route path="/Cookie" component={Cookie} />
      <Route path="/Form" component={Form} />
      <Route path="/Luck" component={Luck} />
      <Route path="/Horoscope" component={Horoscope} />
    </React.Fragment>
  )
}

export default App
