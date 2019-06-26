import React from 'react'

class Form extends React.Component {
  render () {
    return (
      <React.Fragment>
        {/* this is where the form for the user goes in */}
        <div className="Form">
          <p>Tell us who you are</p>
          <form action="input"></form>
          <p>Fill in your details and submit</p>
          <button>Submit</button>
        </div>
      </React.Fragment>
    )
  }
}

export default Form
