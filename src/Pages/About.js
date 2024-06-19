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

                <Nav.Item>
                  <Nav.Link eventKey="fourth">Art</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img
                    src="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2022/02/masters-information-technology-salary-illustration.jpg"
                    style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
                    alt="IT Competition"
                  />
                  <p>
                    Join our dynamic IT competition where innovation meets excellence! Showcase your skills in coding, cybersecurity, and software development. Compete with the best minds, win exciting prizes, and boost your career prospects. Don’t miss this chance to be part of a transformative experience in the tech world. Register now!
                  </p>
                </Tab.Pane>

                

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
