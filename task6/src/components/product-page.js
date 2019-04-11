import React, {Component} from 'react';
import AppHeader from './app-header';
import ProductList from './product-list';

export default class ProductPage extends Component{
    render(){
        return(
        <div className="App">
            <AppHeader appHeader='Product List'/>
            <ProductList 
              cartData = {this.props.cartData}
              productData={this.props.productData}
              onAdd = {this.props.addItem} />
            <button type="button" className="btn btn-large btn-info" onClick={this.props.nextPage}>
                <span>Cart</span>
            </button>
         </div>
        )
    }
}