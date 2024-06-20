import React, { Component } from 'react';
import PageTitle from '../Components/PageTitle';
import CarouselBox from '../Components/CarouselBox';
import { Carousel } from 'react-bootstrap';
import { Button, Container, Card, CardGroup, Row, Col, Modal } from 'react-bootstrap';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInnovateITModal: false,
      showBusinessSolutionsModal: false,
      showArtCompetitionModal: false,
    };
  }

  handleClose = () => {
    this.setState({
      showInnovateITModal: false,
      showBusinessSolutionsModal: false,
      showArtCompetitionModal: false,
    });
  };

  render() {
    return (
      <>
        <Container>
          <PageTitle title="Competitions" />
          <CarouselBox />
          <Row xs={1} md={3} className="g-4 competition-row">
            <Col>
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
            </Col>
            <Col>
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
            </Col>
            <Col>
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
            </Col>
          </Row>

          {/* Modals for each competition */}
          <Modal show={this.state.showInnovateITModal} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>InnovateIT Competition 2024</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Description:</p>
              <p>Welcome to InnovateIT Competition 2024! This exciting contest is designed to inspire and challenge tech enthusiasts, developers, and innovators from around the globe. Whether you're a seasoned professional or an emerging talent, this competition is your opportunity to showcase your skills, creativity, and innovation in the field of Information Technology.</p>
              <p>Objective:</p>
              <p>The InnovateIT Competition aims to bring together bright minds to solve real-world problems through technology. Participants will work individually or in teams to develop innovative solutions in various categories, including but not limited to:</p>
              <p>Software Development: Create cutting-edge applications, tools, or platforms that address specific challenges or enhance existing processes.</p>
              <p>Data Science & AI: Utilize data analysis, machine learning, and artificial intelligence to provide insights, automate tasks, or create intelligent systems.</p>
              <p>Cybersecurity: Develop solutions that enhance security, protect data, and ensure privacy in the digital world.</p>
              <p>IoT & Smart Devices: Innovate with Internet of Things (IoT) technology to create smart, connected devices that improve everyday life.</p>
              <p>Blockchain & Fintech: Explore blockchain technology and financial innovations to build secure, efficient, and transparent systems.</p>
              <p>Eligibility:</p>
              <p>The competition is open to students, professionals, and tech enthusiasts worldwide. Participants can enter individually or form teams of up to four members.</p>
              <p>Submission Guidelines:</p>
              <p>Register on our platform and create your project profile.</p>
              <p>Submit a detailed project proposal outlining your idea, its significance, and the technology stack you plan to use.</p>
              <p>Develop your solution and submit the final project, including source code, documentation, and a presentation/demo video.</p>
              <p>Judging Criteria:</p>
              <p>Projects will be evaluated based on the following criteria:</p>
              <p>Innovation: How original and groundbreaking is the solution?</p>
              <p>Impact: What is the potential of the solution to solve real-world problems or create value?</p>
              <p>Technical Execution: How well is the solution implemented and does it follow best practices?</p>
              <p>Usability: Is the solution user-friendly and accessible?</p>
              <p>Presentation: How effectively is the project communicated through documentation and the demo video?</p>
              <p>Prizes:</p>
              <p>Winners will receive:</p>
              <p>Cash prizes and tech gadgets.</p>
              <p>Mentorship opportunities with industry experts.</p>
              <p>Exposure to potential investors and tech companies.</p>
              <p>Certificates and recognition on our platform.</p>
              <p>Timeline:</p>
              <p>Registration Opens: July 1, 2024</p>
              <p>Proposal Submission Deadline: August 15, 2024</p>
              <p>Final Project Submission Deadline: October 1, 2024</p>
              <p>Judging Period: October 2 - October 15, 2024</p>
              <p>Winners Announcement: October 20, 2024</p>
              <p>Join us in InnovateIT Competition 2024 and be part of a global movement to push the boundaries of technology and innovation. We look forward to seeing your amazing creations!</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.showBusinessSolutionsModal} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Innovative Business Solutions Competition 2024</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Description:</p>
              <p>Welcome to the Innovative Business Solutions Competition 2024! This premier event is designed to uncover and celebrate groundbreaking business ideas, strategies, and solutions. Whether you're a budding entrepreneur, a seasoned business professional, or a student with a passion for business innovation, this competition is your platform to shine.</p>
              <p>Objective:</p>
              <p>The Innovative Business Solutions Competition aims to discover and reward innovative business concepts and strategies that have the potential to revolutionize industries and drive economic growth. Participants will have the opportunity to present their ideas in various categories, including but not limited to:</p>
              <p>Startup Innovation: Present a unique startup idea that addresses a market need or creates a new market opportunity.</p>
              <p>Sustainability: Develop business solutions that promote environmental sustainability and social responsibility.</p>
              <p>Technology Integration: Showcase how technology can be integrated into business operations to enhance efficiency and customer experience.</p>
              <p>Social Impact: Propose business models that drive positive social change and improve the quality of life in communities.</p>
              <p>Financial Innovation: Present innovative financial products, services, or strategies that enhance financial inclusion and stability.</p>
              <p>Eligibility:</p>
              <p>The competition is open to entrepreneurs, business professionals, students, and anyone with a passion for business innovation. Participants can enter individually or form teams of up to four members.</p>
              <p>Submission Guidelines:</p>
              <p>Register on our platform and create your project profile.</p>
              <p>Submit a detailed business proposal outlining your idea, its market potential, and the impact it aims to achieve.</p>
              <p>Develop your solution and submit the final project, including a business plan, financial projections, and a presentation.</p>
              <p>Judging Criteria:</p>
              <p>Projects will be evaluated based on the following criteria:</p>
              <p>Innovation: How original and transformative is the business concept or strategy?</p>
              <p>Impact: What is the potential of the solution to create value, solve market needs, or address societal challenges?</p>
              <p>Feasibility: How realistic and implementable is the proposed solution?</p>
              <p>Scalability: What is the potential for growth and scalability of the business idea?</p>
              <p>Presentation: How effectively is the project communicated through the business plan and presentation?</p>
              <p>Prizes:</p>
              <p>Winners will receive:</p>
              <p>Seed funding and investment opportunities.</p>
              <p>Mentorship from industry leaders and business experts.</p>
              <p>Exposure to potential partners, clients, and investors.</p>
              <p>Certificates and recognition on our platform.</p>
              <p>Timeline:</p>
              <p>Registration Opens: July 1, 2024</p>
              <p>Proposal Submission Deadline: August 15, 2024</p>
              <p>Final Project Submission Deadline: October 1, 2024</p>
              <p>Judging Period: October 2 - October 15, 2024</p>
              <p>Winners Announcement: October 20, 2024</p>
              <p>Join us in the Innovative Business Solutions Competition 2024 and unleash your entrepreneurial spirit. Together, let's shape the future of business innovation!</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.showArtCompetitionModal} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Creative Horizons Art Competition 2024</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Description:</p>
              <p>Welcome to Creative Horizons Art Competition 2024! This prestigious contest is designed to discover and celebrate artistic talents from around the world. Whether you're a professional artist, a passionate amateur, or an art student, this competition provides a platform to showcase your creativity, innovation, and unique artistic vision.</p>
              <p>Objective:</p>
              <p>The Creative Horizons Art Competition aims to celebrate and promote artistic excellence across various disciplines, including but not limited to:</p>
              <p>Painting & Drawing: Showcase your skills in traditional or contemporary painting and drawing techniques.</p>
              <p>Photography: Capture compelling images that tell a story or evoke emotions.</p>
              <p>Sculpture & Installation Art: Create three-dimensional artworks that push the boundaries of creativity and imagination.</p>
              <p>Digital Art & Multimedia: Experiment with digital tools and multimedia techniques to create innovative artworks.</p>
              <p>Performance Art: Present live performances that integrate visual arts, music, theater, and dance.</p>
              <p>Eligibility:</p>
              <p>The competition is open to artists of all ages and backgrounds, including professionals, amateurs, and students. Participants can enter individually or submit collaborative works.</p>
              <p>Submission Guidelines:</p>
              <p>Register on our platform and create your artist profile.</p>
              <p>Submit high-quality images or videos of your artwork, along with a description and artist statement.</p>
              <p>Provide additional context or documentation if applicable (e.g., for performance art).</p>
              <p>Judging Criteria:</p>
              <p>Entries will be evaluated based on the following criteria:</p>
              <p>Creativity: How original and innovative is the artwork?</p>
              <p>Technical Skill: How well-executed is the artistic technique or performance?</p>
              <p>Emotional Impact: Does the artwork evoke emotions or convey a meaningful message?</p>
              <p>Relevance: How well does the artwork align with the competition theme or category?</p>
              <p>Presentation: How effectively is the artwork presented, including the quality of images or videos?</p>
              <p>Prizes:</p>
              <p>Winners will receive:</p>
              <p>Cash prizes and art supplies.</p>
              <p>Exhibition opportunities in galleries and art events.</p>
              <p>Recognition and promotion on our platform and social media channels.</p>
              <p>Timeline:</p>
              <p>Registration Opens: July 1, 2024</p>
              <p>Submission Deadline: September 15, 2024</p>
              <p>Judging Period: September 16 - September 30, 2024</p>
              <p>Winners Announcement: October 5, 2024</p>
              <p>Join us in Creative Horizons Art Competition 2024 and let your artistic talent shine on the global stage. We can't wait to see your incredible artworks!</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </>
    );
  }
}
