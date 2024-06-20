import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{width: '500px', marginTop: '70px'}}>
        <h1 className='text-center'>Registration for the competition</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text>
              Boolk never share your email with anyone else*
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" style={{width: '500px', marginTop: '30px'}}>
            <Form.Label>Write the subject of the competition you want to take part in</Form.Label>
            <Form.Control as="textarea" rows="1" placeholder="For example: IT competition/ art competition..."/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" style={{width: '500px', marginTop: '30px'}}>
            <Form.Label>Describe your contest idea so we can be sure you're following our policies</Form.Label>
            <Form.Control as="textarea" rows="5"/>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
           <Form.Check type="checkbox" label="I agree to submit my application for review"/>
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}
