import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import x1 from './images/bun butter jam.jpg';
import x2 from './images/hunafa.jpg';
import x3 from './images/glob jam.jpg';
import x4 from './images/pudding.jpg';
import x5 from './images/milk cake.jpg';
import x6 from './images/blueberry cake.jpg';
import x7 from './images/kheer.jpg'
import x8 from './images/coco cake.jpg';

function ProductCards() {
  // State for cart
  const [cart, setCart] = useState([]);

  // Product data
  const products = [
    {
      title: '𝐁𝐮𝐧 𝐁𝐮𝐭𝐭𝐞𝐫 𝐉𝐚𝐦',
      description: 'Enjoy the perfect blend of buttery goodness and sweet jam on a soft bun!',
      price: 70.11,
      rating: 5,
      image: x1,
    },
    {
      title: '𝐇𝐮𝐧𝐚𝐟𝐚',
      description: 'Indulge in the rich, sweet layers of hunafa  a dessert that melts in your mouth!',
      price: 80.99,
      rating: 4,
      image: x2,
    },
    {
      title: '𝐆𝐥𝐨𝐛 𝐉𝐚𝐦𝐮𝐧',
      description: 'Dive into the warm, syrupy goodness of gulab jamun a sweet, irresistible treat!',
      price: 90.12,
      rating: 4,
      image: x3,
    },
    {
      title: '𝐏𝐮𝐝𝐝𝐢𝐧𝐠',
      description: 'Indulge in our creamy, melt-in-your-mouth pudding  pure dessert bliss!',
      price: 80.11,
      rating: 4,
      image: x4,
    },
    {
      title: '𝐌𝐢𝐥𝐤 𝐂𝐚𝐤𝐞',
      description: 'Savor the rich, melt in your mouth goodness of our decadent milk cake!',
      price: 75.13,
      rating: 4,
      image: x5,
    },
    {
      title: '𝐁𝐥𝐮𝐞𝐛𝐞𝐫𝐫𝐲 𝐂𝐚𝐤𝐞',
      description: 'Savor the sweet, tangy delight of our blueberry cake!',
      price: 130.12,
      rating: 4,
      image: x6,
    },
    {
      title: '𝐊𝐡𝐞𝐞𝐫',
      description: 'Indulge in the creamy sweetness of kheer  pure bliss!',
      price: 145.11,
      rating: 4,
      image: x7,
    },
    {
      title: '𝐂𝐨𝐜𝐨 𝐜𝐚𝐤𝐞',
      description: 'Experience pure chocolate bliss with every bite of our coco cake!',
      price: 180.99,
      rating: 4,
      image: x8,
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
      <h2><center>𝐃𝐞𝐬𝐬𝐞𝐫𝐭𝐬</center></h2>
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

const Backery = () => {
  return (
    <div>
      <ProductCards />
    </div>
  );
};

export default Backery;
