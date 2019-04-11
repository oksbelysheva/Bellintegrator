import React, {Component} from 'react';
import AppHeader from './app-header';
import CartList from './cart-list';

export default class CartPage extends Component{
    render(){
        const total = this.props.cartData.reduce(function(sum, current) {
            return sum + current.cost;
          }, 0);
        return(
        <div className="App">
            <AppHeader appHeader='Shopping cart'/>
            <CartList 
             productData = {this.props.productData}
             cartData={this.props.cartData}
             onOneDel = {this.props.addItem}
             onAllDel = {this.props.delAllItem}  />
             <div><span>Total:  {total}$</span></div>
             <div>
                <button type="button" className="btn btn-large btn-info" onClick={this.props.nextPage}>
                    <span>Product List</span>
                </button>
                <button type="button" className="btn btn-light" style={{float:"right"}} onClick={this.props.refreshCart}>Refresh cart</button>
             </div>
         </div>
        )
    }
}