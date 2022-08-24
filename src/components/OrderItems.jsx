import React from 'react';
import '../styles/OrderItems.scss';

const OrderItems = () => {
  return (
    <div className="order-item">
            <figure>
              <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"/>
            </figure>
            <p>Bike</p>
            <p>50.00</p>
          </div>
  );
}

export default OrderItems;