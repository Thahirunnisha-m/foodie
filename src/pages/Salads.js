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
import { FaShoppingCart } from 'react-icons/fa';

function ProductCards() {
  // State for cart
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); // To toggle cart visibility
  const [showNotification, setShowNotification] = useState(false); // For notification visibility

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
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000); // Hide notification after 2 seconds
  };

  // Remove item from cart
  const removeFromCart = (productTitle) => {
    setCart((prevCart) => prevCart.filter(item => item.title !== productTitle));
  };

  // Update quantity in cart
  const updateQuantity = (productTitle, action) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.title === productTitle
          ? {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : item.quantity > 1 ? item.quantity - 1 : item.quantity,
            }
          : item
      )
    );
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

      {/* Sticky shopping bag icon */}
      <div
        className="sticky-cart"
        onClick={() => setShowCart(!showCart)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'purple',
          borderRadius: '50%',
          padding: '15px',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        <FaShoppingCart size={30} />
      </div>

      {/* Notification when item is added to cart */}
      {showNotification && (
        <div
          className="cart-notification"
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            backgroundColor: 'green',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            zIndex: '1000',
          }}
        >
          Item added to cart!
        </div>
      )}

      {/* Cart details modal */}
      {showCart && (
        <div
          className="cart-modal"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            zIndex: '1000',
            maxHeight: '80vh',
            overflowY: 'scroll',
            width: '300px',
          }}
        >
          <h3>Your Cart</h3>
          <ul>
            {cart.length === 0 ? (
              <li>Your cart is empty!</li>
            ) : (
              cart.map((item, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                  <div className="d-flex justify-content-between">
                    <img src={item.image} alt={item.title} style={{ width: '40px', height: '40px' }} />
                    <span>{item.title}</span>
                    <span>${item.price} X {item.quantity}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => updateQuantity(item.title, 'increase')}
                    >
                      +
                    </Button>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => updateQuantity(item.title, 'decrease')}
                    >
                      -
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFromCart(item.title)}
                    >
                      Remove
                    </Button>
                  </div>
                </li>
              ))
            )}
          </ul>
          <div className="d-flex justify-content-between">
            <strong>Total: </strong>
            <span>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
          </div>
          <Button variant="secondary" onClick={() => setShowCart(false)} style={{ marginTop: '10px' }}>
            Close
          </Button>
        </div>
      )}
    </div>
  );
}

const Salads = () => {
  return (
    <ProductCards />
  );
}

export default Salads;
