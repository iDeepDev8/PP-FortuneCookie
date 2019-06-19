import React from 'react'
import { Link } from 'react-router-dom'

import ranks from '../../data/ranks'

class Rank extends React.Component {
  capitalize (text) {
    return text[0].toUpperCase() + text.slice(1)
  }

  render () {
    const rank = this.props.match.params.rank
    return (

      <React.Fragment>
        <div className="Rank">
          <h2>{this.capitalize(rank)}</h2>
          <ul>
            {ranks[rank].map(({ id, name }) => <li key={id}><Link to = {'/rank/' + rank + '/' + name}>{name}</Link></li>)}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default Rank
