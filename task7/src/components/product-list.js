import React from 'react';
import ProductItem from './product-list-item';
import './product-list.css';

const ProductList = ({cartData, productData, addToCart}) =>{
    const elements = productData.map((item) => {
      const cartIdx = cartData.findIndex((el)=>el.id === item.id);
      const propsCart = cartIdx === -1 ? null : cartData[cartIdx];
      return (<ProductItem {...propsCart} {...item} addToCart={() => addToCart(item.id, 1)}/>)
    });

    return(
      <table className="table">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Count</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
          {elements}
        </tbody>
      </table>
    );
  };

  export default ProductList;