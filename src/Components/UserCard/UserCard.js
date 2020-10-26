import React from 'react';
import { Card,ListGroup } from "react-bootstrap";





function UserCard({ data }) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Header>{data.username}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>{data.name}</ListGroup.Item>
    <ListGroup.Item>Email: {data.email}</ListGroup.Item>
    <ListGroup.Item>Street: {data.address.street}</ListGroup.Item>
    <ListGroup.Item>City: {data.address.city}</ListGroup.Item>
    <ListGroup.Item>Zip code: {data.address.zipcode}</ListGroup.Item>
    <ListGroup.Item>Phone: {data.phone}</ListGroup.Item>
    <ListGroup.Item>Company: {data.company.name}</ListGroup.Item>
  </ListGroup>
</Card>
        </div>
    )
}

export default UserCard
