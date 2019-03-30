import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProductPage from './product-page';
import CartPage from './cart-page';

export default class App extends Component{
    render(){
      return (
        <div className='container'>
         <Router>
          <Route path="/" exact={true} render={
            () => <ProductPage/>
          }/>
          <Route path="/cart" render={
            () => <CartPage/>
          }/>
         </Router>
        </div>
      );
    }
}
