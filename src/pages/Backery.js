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
import { FaShoppingCart } from 'react-icons/fa';

function ProductCards() {
  // State for cart
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); // To toggle cart visibility
  const [showNotification, setShowNotification] = useState(false); // For notification visibility

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

const Backery = () => {
  return (
    <div>
      <ProductCards />
    </div>
  );
};

export default Backery;
