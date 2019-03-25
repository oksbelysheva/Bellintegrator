import React, {Component} from 'react';
import './product-list-item.css';

export default class ProductItem extends Component{
  render(){
    const {id, label, price, count, onAdd} = this.props;
    return(
      <tr key={id}>
        <td>{label}</td>
        <td>{price}$</td>
        <td>{count}</td>
        <td>
        <button type="button" className="btn btn-outline-succes btn-small" onClick={onAdd}>
           <i className="fa fa-plus"/>
         </button>
        </td>
      </tr>
    );
  }
} 
