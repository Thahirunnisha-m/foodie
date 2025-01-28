import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import k1 from './images/salad 1.jpg';
import k2 from './images/salad 2.jpg';
import k3 from './images/salad 3.jpg';
import k4 from './images/salad 4.jpg';
import k5 from './images/salad 5.jpg';
import k6 from './images/salad 6.jpg';
import k7 from './images/salad 7.jpg';
import k8 from './images/salad 8.jpg';

function ProductCards() {
  // State for cart
  const [cart, setCart] = useState([]);

  // Product data
  const products = [
    {
      title: '𝐒𝐚𝐥𝐚𝐝𝐬 - 𝟏',
      description: 'Fruits like apples or oranges can also be added.',
      price: 70.11,
      rating: 5,
      image: k1,
    },
    {
      title: '𝐒𝐚𝐥𝐚𝐝𝐬 - 𝟐',
      description: 'It typically includes vegetables like lettuce and tomatoes.',
      price: 80.99,
      rating: 4,
      image: k2,
    },
    {
      title: '𝐒𝐚𝐥𝐚𝐝𝐬 - 𝟑',
      description: 'Protein-rich ingredients like chicken or tofu are common.',
      price: 90.12,
      rating: 4,
      image: k3,
    },
    {
      title: '𝐒𝐚𝐥𝐚𝐝𝐬 - 𝟒',
      description: 'Dressings like ranch, vinaigrette, or balsamic are used for flavor.',
      price: 80.11,
      rating: 4,
      image: k4,
    },
    {
      title: '𝐒𝐚𝐥𝐚𝐝𝐬 - 𝟓',
      description: '',
      price: 75.13,
      rating: 4,
      image: k5,
    },
    {
      title: '𝐒𝐚𝐥𝐚𝐝𝐬 - 𝟔',
      description: 'Some salads include grains like quinoa or couscous.',
      price: 130.12,
      rating: 4,
      image: k6,
    },
    {
      title: '𝐒𝐚𝐥𝐚𝐝𝐬 - 𝟕',
      description: 'Salads can be a great side dish or a main meal.',
      price: 145.11,
      rating: 4,
      image: k7,
    },
    {
      title: '𝐒𝐚𝐥𝐚𝐝𝐬 - 𝟖',
      description: 'They are often light and low in calories.',
      price: 180.99,
      rating: 4,
      image: k8,
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
      <h2><center>𝐒𝐚𝐥𝐚𝐝𝐬</center></h2>
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
const Salads=()=>{
    return(
    <ProductCards/>
    )
}
export default Salads; 