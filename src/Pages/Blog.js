import React, { Component } from 'react';
import PageTitle from '../Components/PageTitle';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

export default class Blog extends Component {
  render() {
    const posts = [
      {
        title: 'Welcome to Our Platform!',
        content: 'Welcome to our online competition platform! We are thrilled to have you here. Our platform is designed to bring together creative minds from all over the world to participate in a variety of thematic competitions. Whether you are an artist, a writer, a coder, or a photographer, we have something exciting for everyone. Our goal is to provide a fair, engaging, and inspiring environment where you can showcase your talents, compete with peers, and win amazing prizes. Join us and become a part of our vibrant community today!',
        imgSrc: 'https://img.freepik.com/free-vector/group-friends-sitting-table-talking-drinking-coffee-tea-tiny-people-friends-meeting-cheer-up-friend-friendship-support-concept_335657-623.jpg?w=996&t=st=1718897713~exp=1718898313~hmac=e67495a1de69743070be4e4282a31b86bf1ed2409fd72db84d1c1b70223c7dea',
      },
      {
        title: 'Our Mission',
        content: 'Our mission is to create a dynamic and inclusive platform that encourages creativity and innovation through competitions. We believe in the power of contests to motivate people to push their boundaries, learn new skills, and achieve greatness. Our competitions are designed to be accessible to everyone, regardless of their background or experience level. By providing a wide range of themes and challenges, we aim to foster a diverse community of participants who inspire and support each other. Join us in our mission to celebrate talent and creativity!',
        imgSrc: 'https://img.freepik.com/premium-vector/family-breakfast-parenting-concept-intimate-cheerful-flat-illustration-vector_128772-1147.jpg?w=1060',
      },
      {
        title: 'Meet the Team',
        content: 'Behind our platform is a dedicated team of professionals who are passionate about competitions and creativity. Our team includes experienced organizers, judges, and technical experts who work tirelessly to ensure that every contest runs smoothly and fairly. We are committed to providing the best possible experience for our users and are always here to help if you have any questions or need assistance. Meet the people who make it all happen and learn more about their roles and backgrounds. We are excited to support you on your competitive journey!',
        imgSrc: 'https://img.freepik.com/premium-vector/coworking-concept_107173-16655.jpg?w=996',
      },
      {
        title: 'Our Future Plans',
        content: 'Looking forward, our focus is on evolving and uplifting our community in meaningful ways. We are committed to not only boosting your spirits but also sharpening your competitive edge. Expect more diverse competitions, an enhanced user experience, a stronger sense of community, and a continued emphasis on fostering healthy competition. We are dedicated to innovating and inspiring, ensuring our platform remains a vibrant space where creativity thrives and participants excel. Join us as we shape a future where every participant feels empowered to dream, compete, and succeed.',
        imgSrc: 'https://img.freepik.com/premium-vector/team-is-making-smartphone-app_18660-983.jpg?w=740',
      },
    ];

    return (
      <Container>
        <PageTitle title="Blog" />
        <Row>
          <Col md="9">
            {posts.map((post, index) => (
              <Card className="m-5" key={index}>
                <Row className="no-gutters">
                  <Col md="4">
                    <Card.Img
                      src={post.imgSrc}
                      alt={post.title}
                      className="img-fluid"
                    />
                  </Col>
                  <Col md="8">
                    <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>{post.content}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush" className="text-center">
                <ListGroup.Item>IT</ListGroup.Item>
                <ListGroup.Item>Business</ListGroup.Item>
                <ListGroup.Item>Science</ListGroup.Item>
                <ListGroup.Item>Art</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Follow Us</Card.Title>
                <Card.Text> Links </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
