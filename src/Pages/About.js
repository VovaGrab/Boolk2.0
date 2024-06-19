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

                <Tab.Pane eventKey="second">
                  <img
                    src="https://cloudcfo.ph/wp-content/uploads/2022/11/CloudCfo-Blog-Banner-Blog17-Business-Structures.png"
                    style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
                    alt="Business Competition"
                  />
                  <p>
                    Step into the world of business innovation! Compete in our business contest to pitch groundbreaking ideas, develop strategic plans, and solve real-world challenges. Network with industry leaders, gain invaluable experience, and win impressive awards. Elevate your career and make your mark in the business world. Join us and unleash your potential!
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <img
                    src="https://img.freepik.com/free-vector/hand-drawn-colorful-science-education-background_23-2148475858.jpg"
                    style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
                    alt="Science Competition"
                  />
                  <p>
                    Explore the frontier of scientific discovery in our prestigious competition! Present your research, engage with top scientists, and contribute to groundbreaking advancements. Gain recognition, valuable feedback, and opportunities for collaboration. This is your chance to shine in the scientific community and make a lasting impact. Join us and push the boundaries of knowledge!
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
