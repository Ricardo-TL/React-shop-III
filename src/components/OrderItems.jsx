import React from 'react';
import '../styles/OrderItems.scss';

const OrderItems = ({product}) => {
  return (
    <div className="order-item">
            <figure>
              <img src={product.images[0]} alt={product.title}/>
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img src={close} alt="close" />
          </div>
  );
}

export default OrderItems;