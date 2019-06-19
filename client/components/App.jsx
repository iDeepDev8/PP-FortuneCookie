import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import List from './List'
import Rank from './Rank'
import Species from './Species'
import Organism from './Organism'

const App = () => {
  return (
    <React.Fragment>
      <h1>Navigating the taxonomic ranks</h1>
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/list/:rank" component={List} />
      <Route path="/rank/:rank/:name" component={Rank} />
      <Route path="/rank/:rank/:name/species" component={Species} />
      <Route path="/species/:id" component={Organism} />
    </React.Fragment>
  )
}

export default App
