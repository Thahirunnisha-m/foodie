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
import z7 from './images/beef chilly.jpg';
import z8 from './images/ramen card.jpg';
import { FaShoppingCart } from 'react-icons/fa';

function ProductCards() {
  // State for cart
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); // To toggle cart visibility
  const [showNotification, setShowNotification] = useState(false); // For notification visibility

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

const Meat = () => {
  return (
    <div>
      <ProductCards />
    </div>
  );
};

export default Meat;
