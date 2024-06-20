import React, { Component } from 'react';
import PageTitle from '../Components/PageTitle';
import CarouselBox from '../Components/CarouselBox';
import Carousel from 'react-bootstrap/Carousel'
import { Button, Container } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <>
      <CarouselBox/>
      <Container>
        <h2 className='text-center m-4'>Competitions</h2>
        <CardDeck>
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
              <Button variant="primary">About contest</Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
      </>
    );
  }
}