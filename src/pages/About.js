
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import F1 from './images/buritto home.avif';
const LeftImageRightContent = () => {
    return (
        <div>
            <br />
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Image */}
          <Col md={6}>
            <img
              src={F1}
              alt="Placeholder"
              className="img-fluid"
            />
          </Col>
  
          {/* Right Side: Content */}
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title><h1>About Us</h1></Card.Title>
                <Card.Text>
                Welcome to <b>Foodie Place</b> your ultimate destination for delicious, mouthwatering treats! We are passionate about bringing the finest flavors to your table with our curated selection of gourmet dishes, fresh ingredients, and locally-sourced products.
               At <b>Foodie Place</b>, food is more than just a meal – it’s an experience. Whether you’re craving savory comfort food or a sweet indulgence, we take pride in crafting each dish with love and care. Our team of chefs and food enthusiasts is dedicated to serving you with the highest quality and taste.
              We believe in creating memorable moments through food, where every bite takes you on a journey of flavor. Our menu is inspired by diverse culinary traditions and features something for everyone – from bold and spicy to light and refreshing.
              Our mission is simple: to make your food experience extraordinary, every time. We value quality, authenticity, and a commitment to delivering fresh, seasonal ingredients in every dish. Whether you're grabbing a quick snack or enjoying a meal with family and friends, we aim to make every visit special.
              Thank you for choosing <b>Foodie Place</b> where every meal is a celebration!
                </Card.Text>
                <Card.Link href="#"><b>READ MORE</b></Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
const About=()=>{
    return(
    <div>
        <LeftImageRightContent/>
    </div>
    )
}
export default About;