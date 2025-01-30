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
import { FaShoppingCart } from 'react-icons/fa';

function ProductCards() {
  // State for cart
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); // to toggle cart visibility
  const [showNotification, setShowNotification] = useState(false); // for notification visibility

  // Product data
  const products = [
    { title: '𝐒𝐨𝐟𝐭 𝐃𝐫𝐢𝐧𝐤𝐬', description: 'Enjoy the goodness of fresh oranges in every sip!', price: 70.11, rating: 5, image: m1 },
    { title: '𝐁𝐥𝐮𝐞𝐛𝐞𝐫𝐫𝐲', description: 'Perfectly tart, perfectly sweet blueberry juice!', price: 80.99, rating: 4, image: m2 },
    { title: '𝐒𝐭𝐫𝐚𝐰𝐛𝐞𝐫𝐫𝐲', description: 'Strawberry juice that’s as fresh as it gets!', price: 90.12, rating: 4, image: m3 },
    { title: '𝐥𝐞𝐦𝐨𝐧 𝐌𝐨𝐣𝐢𝐭𝐨', description: 'Zesty lemon mojito juice, a refreshing twist!', price: 80.11, rating: 4, image: m4 },
    { title: '𝐀𝐩𝐩𝐥𝐞 𝐉𝐮𝐢𝐜𝐞', description: 'Cool down with a glass of fresh apple juice!', price: 75.13, rating: 4, image: m5 },
    { title: '𝐌𝐚𝐧𝐠𝐨 𝐉𝐮𝐢𝐜𝐞', description: 'Sweet and creamy mango juice, pure tropical bliss!', price: 130.12, rating: 4, image: m6 },
    { title: '𝐌𝐮𝐬𝐤 𝐌𝐞𝐥𝐨𝐧 𝐉𝐮𝐢𝐜𝐞', description: 'Pure musk melon juice, perfect for a hot day!', price: 145.11, rating: 4, image: m7 },
    { title: '𝐏𝐢𝐧𝐞 𝐀𝐩𝐩𝐥𝐞 𝐉𝐮𝐢𝐜𝐞', description: 'Pineapple juice, a perfect tropical escape!', price: 180.99, rating: 4, image: m8 },
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
    <div className="mt-3">
      <h2>
        <center>𝐃𝐫𝐢𝐧𝐤𝐬</center>
      </h2>
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
                      <span key={idx} className="star">
                        {idx < product.rating ? '⭐' : '☆'}
                      </span>
                    ))}
                  </div>
                </div>
              </Card.Body>
              <div className="card-footer">
                <Button variant="primary" className="add-to-cart-btn" onClick={() => addToCart(product)}>
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

const Drinks = () => {
  return (
    <div>
      <ProductCards />
    </div>
  );
};

export default Drinks;
