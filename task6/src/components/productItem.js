import React, {Component} from 'react';

export default class ProductItem extends Component{
  render(){
    let {id, label, price, count, onAdd} = this.props;
    count = count ? count : 0;
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
