import React from 'react';
import '../styles/ProductItem.scss';

import addToCartbutton from '@icons/bt_add_to_cart.svg'

const ProductItem = () => {
  return (<div className="ProductItem">
              <img src="https://www.pexels.com/es-es/foto/trafico-gente-roto-coche-12128383/" alt="plane" />
              <div className="product-info">
                <div>
                  <p>$120,00</p>
                  <p>plane</p>
                </div>
                <figure>
                  <img src={addToCartbutton} alt="" />
                </figure>
              </div>
            </div>
  );
}

export default ProductItem;