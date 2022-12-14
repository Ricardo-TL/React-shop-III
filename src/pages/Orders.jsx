import React from 'react';
import OrderItems from '../components/OrderItems';
import '../styles/Orders.scss'

const Orders = () => {
  return (
    <div className="Orders">
			<div className="Orders-container">
				<h1 className="title">My orders</h1>
				<div className="Orders-content">
					<OrderItems />
				</div>
			</div>
		</div>
  );
}

export default Orders;