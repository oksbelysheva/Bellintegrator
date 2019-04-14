import React, {Component} from 'react';
import AppHeader from './appHeader';
import Table from './table';
import CartItem from './cartListItem';

export default class CartPage extends Component{
    
    renderTableBody = () =>{
        return this.props.cartData.map((item) => {
            const idxProduct = this.props.productData.findIndex((el) => el.id === item.id);
            return (<CartItem {...this.props.productData[idxProduct]} {...item} onOneDel={() => this.props.addItem(item.id, -1)} onAllDel={() => this.props.delAllItem(item.id)}/>)
          });
    };

    render(){
        
    const total = this.props.cartData.reduce(function(sum, current) {
        return sum + current.cost;
      }, 0);

    const headerName = [
        'Name',
        'Cost',
        'Count',
        '',
        ''
    ];

        return(
        <div className="App">
            <AppHeader appHeader='Shopping cart'/>
             <Table
             headerName = {headerName}
             renderTableBody = {this.renderTableBody}
             />
             <div><span>Total:  {total}$</span></div>
             <div>
                <button type="button" className="btn btn-large btn-info" onClick={this.props.handlerShowCart}>
                    <span>Product List</span>
                </button>
                <button type="button" className="btn btn-light" style={{float:"right"}} onClick={this.props.refreshCart}>Refresh cart</button>
             </div>
         </div>
        )
    }
}