import React, {Component} from 'react';

export default class CartItem extends Component{
  render(){
    const {id, label, count, cost, onOneDel, onAllDel} = this.props;
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
}
