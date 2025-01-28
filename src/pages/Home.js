import React from 'react';
import { Carousel } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import n1 from './images/sizzler jpeg.jpg';
import n2 from './images/burger Avif.avif';
import n3 from './images/spicy noodles jpeg.jpg'
import n4 from './images/shawarma slider.jpg'
import n5 from './images/kebab slider.avif'
import n6 from './images/bread tosted.jpg'
import v1 from './images/grill home.avif'
import v2 from './images/buritto home.avif'
import v3 from './images/mojito home.avif'
import v4 from './images/shavarma home.avif'
import v5 from './images/Tokas.avif'
import v6 from './images/burger home.avif'

import { Card, Row, Col } from 'react-bootstrap';

const MyCarousel = () => {  
  return (
    <div>
   <br/>
  
    <Carousel  className="my-carousel w-100">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={n2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Embark on a culinary journey where every bite is pure bliss!</h2>
          <p>Indulge in mouthwatering dishes that will have you coming back for more!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={n1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>A feast for your senses  where flavor meets perfection!</h2>
          <p>Satisfy your cravings with the freshest, most irresistible flavors in town!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={n4}
          alt="third slide"
        />
        <Carousel.Caption>
          <h2>Get ready to treat your taste buds to a one of a kind experience!</h2>
          <p>Every dish is crafted to deliver unforgettable flavor  dive in!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={n5}
          alt="fourth slide"
        />
        <Carousel.Caption>
          <h2>Taste the love and passion in every dish, made just for you!</h2>
          <p>From the first bite to the last, every dish is a celebration of flavor!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={n6}
          alt="fifth slide"
        />
        <Carousel.Caption>
          <h2>A food lover’s dream – discover the most tantalizing flavors today!</h2>
          <p>Step into flavor paradise, where every meal is a masterpiece!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={n3}
          alt="sixth slide"
        />
        <Carousel.Caption>
          <h2>Delight in a menu full of bold, unforgettable tastes that will leave you craving more!</h2>
          <p>Let us take you on a flavor adventure you’ll never forget!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};
const CardLayout = () => {
  return (
    <div className="container mt-4">
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={v1} />
            <Card.Body>
              <Card.Title><strong>Grilled Beef</strong></Card.Title>
              <Card.Text>
              Savor the smoky perfection of our tender, juicy grilled beef!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={v2} />
            <Card.Body>
              <Card.Title><strong>Burrito</strong></Card.Title>
              <Card.Text>
              Bite into our loaded burrito  a perfect mix of flavor and spice!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={v3} />
            <Card.Body>
              <Card.Title><strong>Lemon Mojito</strong></Card.Title>
              <Card.Text>
              Refresh yourself with our zesty lemon mojito  the perfect blend of tart and minty!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={v4} />
            <Card.Body>
              <Card.Title><strong>Vegetarian Spring  Rolls</strong></Card.Title>
              <Card.Text>
              Crispy, golden vegetarian spring rolls packed with fresh, flavorful veggies!
           </Card.Text>
           </Card.Body>
          </Card>
          </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={v5} />
            <Card.Body>
              <Card.Title><strong> Spicy Tacos</strong></Card.Title>
              <Card.Text>
              Indulge in our spicy tacos  packed with bold flavors and a kick of heat!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={v6} />
            <Card.Body>
              <Card.Title><strong>Hotty Burger</strong></Card.Title>
              <Card.Text>
              Sink your teeth into our juicy, mouthwatering burger  pure bliss in every bite!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
const Home=()=>{
  return(
    <div>
      <MyCarousel/>
      <CardLayout/>    
    </div>
  )
}
export default Home;

