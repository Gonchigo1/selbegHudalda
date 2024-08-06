import React from 'react';
import './Card.css';
import close from '../Components/assets/close.png';

export const Card = ({ cart, removeFromCart, updateQuantity }) => {
  return (
    <div>
      {cart.map((product, index) => (
        <div key={index} className='Card-main'>
          <img src={product.image} alt="" />
          <p>{product.name}</p>
     
          <button className="delete-button" onClick={() => removeFromCart(index)}>
            <img src={close} alt="Delete" />
          </button>
        </div>
      ))}
      <div className='order-button'>
                <button>Төлбөр төлөх</button>
                </div>
    </div>
  );
};

export default Card;
