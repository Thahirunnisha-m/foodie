import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import z1 from './images/grill chicken card.jpg';
import z2 from './images/alfaham.jpg';
import z3 from './images/chicken roll card.jpg';
import z4 from './images/crab lolipop 1.jpg';
import z5 from './images/kebab meat card.jpg';
import z6 from './images/masala kheema.jpg';
import z7 from './images/beef chilly.jpg'
import z8 from './images/ramen card.jpg';

function ProductCards() {
  // State for cart
  const [cart, setCart] = useState([]);

  // Product data
  const products = [
    {
      title: '𝐆𝐫𝐢𝐥𝐥𝐞𝐝 𝐂𝐡𝐢𝐜𝐤𝐞𝐧',
      description: 'Relish the smoky, tender perfection of our grilled chicken!',
      price: 70.11,
      rating: 5,
      image: z1,
    },
    {
      title: '𝐂𝐡𝐢𝐤𝐞𝐧 𝐑𝐨𝐥𝐥',
      description: 'Bite into the juicy, flavorful goodness of our chicken roll!',
      price: 80.99,
      rating: 4,
      image: z2,
    },
    {
      title: 'Alfaham',
      description: 'Savor the juicy, smoky perfection of our tender alfaham!',
      price: 90.12,
      rating: 4,
      image: z3,
    },
    {
      title: '𝐂𝐫𝐚𝐛 𝐋𝐨𝐥𝐢𝐩𝐨𝐩',
      description: 'Indulge in the sweet, savory crunch of our Crab Lollipop!',
      price: 80.11,
      rating: 4,
      image: z4,
    },
    {
      title: '𝐊𝐞𝐛𝐚𝐛',
      description: 'Enjoy the smoky, tender perfection of our sizzling kebabs!',
      price: 75.13,
      rating: 4,
      image: z5,
    },
    {
      title: '𝐌𝐚𝐬𝐚𝐥𝐚 𝐊𝐡𝐞𝐞𝐦𝐚',
      description: 'Savor the rich, spiced flavor of our mouthwatering Masala Kheema!',
      price: 130.12,
      rating: 4,
      image: z6,
    },
    {
      title: '𝐁𝐞𝐞𝐟 𝐂𝐡𝐢𝐥𝐥𝐲',
      description: 'Taste the fiery kick of our tender Beef Chilly a perfect spice feast!',
      price: 145.11,
      rating: 4,
      image: z7,
    },
    {
      title: '𝐑𝐚𝐦𝐞𝐧',
      description: 'Slurp up the savory goodness of our flavorful, steaming ramen!',
      price: 180.99,
      rating: 4,
      image: z8,
    },
  ];

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.title === product.title);
      if (existingProduct) {
        return prevCart.map(item =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className='mt-3'>
      <h2><center>𝐌𝐞𝐚𝐭</center></h2>
      <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
        {products.map((product, index) => (
          <Col key={index}>
            <Card className="hover-card">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <div className="d-flex justify-content-between">
                  <span className="price">${product.price}</span>
                  <div className="rating">
                    {[...Array(5)].map((_, idx) => (
                      <span key={idx} className="star">{idx < product.rating ? '⭐' : '☆'}</span>
                    ))}
                  </div>
                </div>
              </Card.Body>
              <div className="card-footer">
                <Button
                  variant="primary"
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}

                >
                  Add to Cart
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="mt-4">
        <h3>Cart ({cart.length} items)</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.title} -＄ {item.price} X {item.quantity}
            </li>
          ))}
        </ul>
        <div>𝗧𝗼𝘁𝗮𝗹 : ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</div>
      </div>
    </div>
  );
}

const Meat = () => {
  return (
    <div>
      <ProductCards />
    </div>
  );
};

export default Meat;
