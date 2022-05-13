import React from 'react'
import {Form} from 'react-bootstrap';
function Contacts() {
  return (
    <div className="contacts">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="email" placeholder="" />
    <Form.Label>Email </Form.Label>
    <Form.Control type="email" placeholder="email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={4} />
  </Form.Group>
  <button className="buttons">SEND</button>
    </div>
  )
}

export default Contacts