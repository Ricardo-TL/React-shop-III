import React from 'react';

import arrow from '@icons/flechita.svg'

const Order = () => {
  return (
    <div className="order">
            <p>
              <span>04/26/22</span>
              <span>6 articles</span>
            </p>
            <p>560.50</p>
            <img src={arrow} alt="arrow"/>
          </div>

  );
}

export default Order;