import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import m1 from './images/fruite cold drink.jpg';
import m2 from './images/blue berry drink.jpg';
import m3 from './images/strawberry drink.jpg';
import m4 from './images/lime mojito.jpg';
import m5 from './images/fizzz.jpg';
import m6 from './images/images.jpg';
import m7 from './images/musk melon drink.jpg';
import m8 from './images/pine apple.jpg';

function ProductCards() {
  // State for cart
  const [cart, setCart] = useState([]);

  // Product data
  const products = [
    {
      title: '𝐒𝐨𝐟𝐭 𝐃𝐫𝐢𝐧𝐤𝐬',
      description: 'Enjoy the goodness of fresh oranges in every sip!',
      price: 70.11,
      rating: 5,
      image: m1,
    },
    {
      title: '𝐁𝐥𝐮𝐞𝐛𝐞𝐫𝐫𝐲',
      description: 'Perfectly tart, perfectly sweet  blueberry juice!',
      price: 80.99,
      rating: 4,
      image: m2,
    },
    {
      title: '𝐒𝐭𝐫𝐚𝐰𝐛𝐞𝐫𝐫𝐲',
      description: 'Strawberry juice that’s as fresh as it gets!',
      price: 90.12,
      rating: 4,
      image: m3,
    },
    {
      title: '𝐥𝐞𝐦𝐨𝐧 𝐌𝐨𝐣𝐢𝐭𝐨',
      description: 'Zesty lemon mojito juice, a refreshing twist!',
      price: 80.11,
      rating: 4,
      image: m4,
    },
    {
      title: '𝐀𝐩𝐩𝐥𝐞 𝐉𝐮𝐢𝐜𝐞',
      description: 'Cool down with a glass of fresh apple juice!',
      price: 75.13,
      rating: 4,
      image: m5,
    },
    {
      title: '𝐌𝐚𝐧𝐠𝐨 𝐉𝐮𝐢𝐜𝐞',
      description: 'Sweet and creamy mango juice, pure tropical bliss!',
      price: 130.12,
      rating: 4,
      image: m6,
    },
    {
      title: '𝐌𝐮𝐬𝐤 𝐌𝐞𝐥𝐨𝐧 𝐉𝐮𝐢𝐜𝐞',
      description: 'Pure musk melon juice, perfect for a hot day!',
      price: 145.11,
      rating: 4,
      image: m7,
    },
    {
      title: '𝐏𝐢𝐧𝐞 𝐀𝐩𝐩𝐥𝐞 𝐉𝐮𝐢𝐜𝐞',
      description: 'Pineapple juice, a perfect tropical escape!',
      price: 180.99,
      rating: 4,
      image: m8,
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
      <h2><center>𝐃𝐫𝐢𝐧𝐤𝐬</center></h2>
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

const Drinks = () => {
  return (
    <div>
      <ProductCards />
    </div>
  );
};

export default Drinks;
