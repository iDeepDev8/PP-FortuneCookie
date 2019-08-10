import React from 'react'
import { Link } from 'react-router-dom'

class Rank extends React.Component {
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
