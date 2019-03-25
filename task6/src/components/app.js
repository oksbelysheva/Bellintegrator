import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProductPage from './product-page';
import CartPage from './cart-page';

export default class App extends Component{

    state = {
      productData: [
        {label: "Product 1", price: 100, count: 0, cost: 0, id: 1},
        {label: "Product 2", price: 120, count: 0, cost: 0, id: 2},
        {label: "Product 3", price: 30, count: 0, cost: 0, id: 3}
      ],
      cartData: [],
    };

    addItem = (id) =>{
      this.setState(({productData, cartData})=>{
        const idxProduct = productData.findIndex((el) => el.id === id);
        let productDataItem = productData[idxProduct];
        productDataItem.count++;
        productDataItem.cost += productDataItem.price;
        
        const idxCart = cartData.findIndex((el) => el.id === id);
        const newCartData = (idxCart !== -1) ? [...cartData.slice(0,idxCart), productData[idxProduct], ...cartData.slice(idxCart+1)] :
                                               [...cartData, productData[idxProduct]];
        newCartData.sort(function(a,b){
          return (a.label > b.label) ? 1 : -1;
        });
        return{
          productData: [...productData.slice(0,idxProduct), productDataItem, ...productData.slice(idxProduct+1)],
          cartData: newCartData
        }
      });
    }; 

    delAllItem = (id) =>{
      this.setState(({productData, cartData})=>{
        const idxProduct = productData.findIndex((el) => el.id === id);
        let productDataItem = productData[idxProduct];
        productDataItem.count = 0;
        productDataItem.cost = 0;

        const idx = cartData.findIndex((el) => el.id === id);
        return{
          productData: [...productData.slice(0,idxProduct), productDataItem, ...productData.slice(idxProduct+1)],
          cartData: [...cartData.slice(0,idx), ...cartData.slice(idx+1)]
        }
      });
    };

    
    delOneItem = (id) =>{
      this.setState(({productData, cartData})=>{
        const idxProduct = productData.findIndex((el) => el.id === id);
        let productDataItem = productData[idxProduct];
        productDataItem.count--;
        productDataItem.cost -= productDataItem.price;
        
        const idx = cartData.findIndex((el) => el.id === id);
        const newCartData = (productDataItem.count === 0) ? [...cartData.slice(0,idx), ...cartData.slice(idx+1)] :
                                                            [...cartData.slice(0,idx), productDataItem, ...cartData.slice(idx+1)];
        return{
          productData: [...productData.slice(0,idxProduct), productDataItem, ...productData.slice(idxProduct+1)],
          cartData: newCartData
        }
      });
    };

    refreshCart = () =>{
      this.setState(({productData, cartData})=>{
        productData.forEach(element => {
          if (element.count>0){
            this.delAllItem(element.id);
          }
        });
      });
    }


    render(){
      return (
        <div>
         <Router>
          <Route path="/" exact={true} render={() => <ProductPage 
            productData={this.state.productData}
            addItem = {this.addItem}/>}/>
          <Route path="/cart" render={() => <CartPage 
            cartData={this.state.cartData}
            delOneItem = {this.delOneItem}
            delAllItem = {this.delAllItem}
            refreshCart = {this.refreshCart}/>}/>
         </Router>
        </div>
      );
    }
}
