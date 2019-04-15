import React from 'react';

const CartItem = ({id, label, count, cost, onOneDel, onAllDel}) => {
    return(
      <tr key={id}>
        <td>{label}</td>
        <td>{cost}$</td>
        <td>{count}</td>
        <td>
          <button type="button" className="btn btn-small" onClick={onOneDel}>
            <i className="fa fa-minus"/>
          </button>
        </td>
        <td>
          <button type="button" className="btn btn-small" onClick={onAllDel}>
            <i className="fa fa-trash"/>
          </button>
        </td>
      </tr>
    );
}

export default CartItem;
