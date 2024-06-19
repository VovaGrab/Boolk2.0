import React, { Component } from 'react';
import PageTitle from '../Components/PageTitle';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <Container style={{ marginTop: '70px' }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">IT</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second">Business</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="third">Science</Nav.Link>
                </Nav.Item>

               
              </Nav>
            </Col>
      </Container>
    );
  }
}
