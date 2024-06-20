import React, { Component } from 'react';
import { Button, Container, Card, Modal } from 'react-bootstrap';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInnovateITModal: false,
      showBusinessSolutionsModal: false,
      showArtCompetitionModal: false,
    };
  }

  render() {
    const handleClose = () => {
      this.setState({
        showInnovateITModal: false,
        showBusinessSolutionsModal: false,
        showArtCompetitionModal: false,
      });
    };

    return (
      <>
        <Container>
          <h2 className="text-center m-4">Competitions</h2>
          <Card>
            <Card.Img
              variant="top"
              src="https://cdn.prod.website-files.com/61a05ff14c09ecacc06eec05/61f5868b789816331ac6af01_5_Benefits_of_Online_Education.png"
            />
            <Card.Body>
              <Card.Title>"InnovateIT Competition 2024"</Card.Title>
              <Card.Text>
                Welcome to InnovateIT Competition 2024! This exciting contest is designed to inspire and challenge tech enthusiasts, developers, and innovators from around the globe. Whether you're a seasoned professional or an emerging talent, this competition is your opportunity to showcase your skills, creativity, and innovation in the field of Information Technology.
              </Card.Text>
              <Button variant="primary" onClick={() => this.setState({ showInnovateITModal: true })}>About contest</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="https://www.actitime.com/wp-content/uploads/2018/12/Reports.png"
            />
            <Card.Body>
              <Card.Title>"Innovative Business Solutions Competition 2024"</Card.Title>
              <Card.Text>
                Welcome to the Innovative Business Solutions Competition 2024! This premier event is designed to uncover and celebrate groundbreaking business ideas, strategies, and solutions. Whether you're a budding entrepreneur, a seasoned business professional, or a student with a passion for business innovation, this competition is your platform to shine.
              </Card.Text>
              <Button variant="primary" onClick={() => this.setState({ showBusinessSolutionsModal: true })}>About contest</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="https://teambuildinghub.com/wp-content/uploads/2022/03/quick-team-building-featured-image.webp"
            />
            <Card.Body>
              <Card.Title>"Creative Horizons Art Competition 2024"</Card.Title>
              <Card.Text>
                Welcome to Creative Horizons Art Competition 2024! This prestigious contest is designed to discover and celebrate artistic talents from around the world. Whether you're a professional artist, a passionate amateur, or an art student, this competition provides a platform to showcase your creativity, innovation, and unique artistic vision.
              </Card.Text>
              <Button variant="primary" onClick={() => this.setState({ showArtCompetitionModal: true })}>About contest</Button>
            </Card.Body>
          </Card>

          {/* Modals for each competition */}
          <Modal show={this.state.showInnovateITModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>InnovateIT Competition 2024</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Additional information about InnovateIT Competition...</p>
              {/* Add more details here */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              {/* Add additional buttons if needed */}
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.showBusinessSolutionsModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Innovative Business Solutions Competition 2024</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Additional information about Innovative Business Solutions Competition...</p>
              {/* Add more details here */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              {/* Add additional buttons if needed */}
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.showArtCompetitionModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Creative Horizons Art Competition 2024</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Additional information about Creative Horizons Art Competition...</p>
              {/* Add more details here */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              {/* Add additional buttons if needed */}
            </Modal.Footer>
          </Modal>
        </Container>
      </>
    );
  }
}
