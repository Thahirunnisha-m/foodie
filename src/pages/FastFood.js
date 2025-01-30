import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import r1 from './images/pizza card.jpg';
import r2 from './images/burger card.jpg';
import r3 from './images/cheease balls card.jpg';
import r4 from './images/noodles card.jpg';
import r5 from './images/pasta food.jpg';
import r6 from './images/pav bhaji.jpg'
import r7 from './images/Lamb burger card.jpg';
import r8 from './images/Bejo.jpg';
import { FaShoppingCart } from 'react-icons/fa';

function ProductCards() {
  // State for cart
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); // To toggle cart visibility
  const [showNotification, setShowNotification] = useState(false); // For notification visibility

  // Product data
  const products = [
    {
      title: '𝐏𝐢𝐳𝐳𝐚',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      price: 100.00,
      rating: 5,
      image: r1,
    },
    {
      title: '𝐁𝐮𝐫𝐠𝐞𝐫',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      price: 80.00,
      rating: 4,
      image: r2,
    },
    {
      title: '𝐂𝐡𝐞𝐞𝐬 𝐁𝐨𝐥𝐥𝐬',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      price: 75.00,
      rating: 4,
      image: r3,
    },
    {
      title: '𝐒𝐩𝐢𝐜𝐲 𝐍𝐨𝐨𝐝𝐥𝐞𝐬',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      price: 80.00,
      rating: 4,
      image: r4,
    },
    {
      title: '𝐏𝐚𝐯 𝐁𝐡𝐚𝐣𝐢',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      price: 75.00,
      rating: 4,
      image: r6,
    },
    {
      title: '𝐏𝐚𝐬𝐭𝐚',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      price: 130.00,
      rating: 4,
      image: r5,
    },
    {
      title: '𝐋𝐚𝐦𝐛 𝐁𝐮𝐫𝐠𝐞𝐫',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      price: 145.00,
      rating: 4,
      image: r7,
    },
    {
      title: '𝐁𝐮𝐫𝐦𝐚 𝐁𝐞𝐠𝐨',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      price: 49.99,
      rating: 4,
      image: r8,
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
      <h2><center>Fast Food</center></h2>
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

const FastFood = () => {
  return (
    <div>
      <ProductCards />
    </div>
  );
};

export default FastFood;
