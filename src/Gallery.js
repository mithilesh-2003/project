import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Gallery() {
  return (
    <div>
       <Link to="/Home">
      <i class="fa fa-fast-backward" aria-hidden="true"></i>
      </Link>
      <h1>gallery</h1>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/2408206/pexels-photo-2408206.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/2380836/pexels-photo-2380836.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/906106/pexels-photo-906106.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  )
}

export default Gallery
