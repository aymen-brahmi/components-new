import React from 'react'
import {Card,Button} from 'react-bootstrap';
function Cardss() {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Project Title</Card.Title>
    <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adip
    </Card.Text>
    <Button variant="primary">Github Link</Button>
  </Card.Body>
</Card>
      </div>
  )
}

export default Cardss