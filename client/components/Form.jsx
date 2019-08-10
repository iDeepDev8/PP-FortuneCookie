import React from 'react'
import { Button, Form, Segment } from "semantic-ui-react"

const loginForm = () => {
  <Segment inverted> 
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid label='First Name' placholder='First Name'/>
        <Form.Input fluid label='Last Name' placholder='Last Name'/>
      </Form.Group>
      <Form.Checkbox label='I am ready to test my luck'/>
      <Button type ='submit'>Start</Button>
    </Form>
  </Segment>
}

export default loginForm
