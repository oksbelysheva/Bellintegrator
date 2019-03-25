import React from 'react';
import CartItem from './cart-list-item';
import './cart-list.css';

const CartList = ({cartData, onOneDel, onAllDel}) =>{
    const elements = cartData.map((item) => {
      return (<CartItem {...item} onOneDel={() => onOneDel(item.id)} onAllDel={() => onAllDel(item.id)}/>)
    });

    return(
      <table className="table">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Cost</th>
          <th scope="col">Count</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
          {elements}
        </tbody>
      </table>
    );
  };

  export default CartList;