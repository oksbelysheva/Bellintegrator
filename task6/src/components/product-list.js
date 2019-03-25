import React from 'react';
import ProductItem from './product-list-item';
import './product-list.css';

const ProductList = ({productData, onAdd}) =>{
    const elements = productData.map((item) => {
      return (<ProductItem {...item} onAdd={() => onAdd(item.id)}/>)
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