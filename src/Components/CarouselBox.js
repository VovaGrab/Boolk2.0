import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import con1Img from '../assets/con1.jpg';
import con2Img from '../assets/con2.png';
import con3Img from '../assets/con3.jpg';
import con4Img from '../assets/con4.webp';
import con5Img from '../assets/con5.webp';
import con6Img from '../assets/con6.png';
import { CarouselCaption } from 'react-bootstrap';

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
            <img
                className='d-block w-100'
                src={con1Img}
                alt='Contests'
            />
            <Carousel.Caption>
                <h3>WELCOME TO BOOLK !</h3>
                <p>"Boolk: Elevate Your Talent, Embrace the Challenge!"</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className='d-block w-100'
                src={con2Img}
                alt='Contests'
            />
            <Carousel.Caption>
                <h3>WELCOME TO BOOLK !</h3>
                <p>"Boolk: Where Creativity Meets Competition!"</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className='d-block w-100'
                src={con3Img}
                alt='Contests'
            />
            <Carousel.Caption>
                <h3>WELCOME TO BOOLK !</h3>
                <p>"Boolk: Ignite Your Passion, Compete with Purpose!"</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className='d-block w-100'
                src={con4Img}
                alt='Contests'
            />
            <Carousel.Caption>
                <h3>WELCOME TO BOOLK !</h3>
                <p>"Boolk: Fuel Your Ambition, Triumph Through Competition!""</p>
            </Carousel.Caption>
        </Carousel.Item>

        
      </Carousel>
    )
  }
}
