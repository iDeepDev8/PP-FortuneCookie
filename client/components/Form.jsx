import React from 'react'

class Form extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* this is where the form for the user goes in */}
        <div className="Form">
          <h2>Tell us who you are</h2>
          <form action="input"></form>
          <p>Fill in your details and submit</p>
        </div>
      </React.Fragment>
    )
  }
}

export default Form
