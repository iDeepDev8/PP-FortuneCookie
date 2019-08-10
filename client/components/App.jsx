import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import loginForm from './Form'
import List from './List'
import Rank from './Rank'

const App = () => {
  return (
    <React.Fragment>
      <loginForm/>
    </React.Fragment>
  )
}

export default App
