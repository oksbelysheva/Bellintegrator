import React, { Component } from 'react';
import ProductPage from './productPage';
import CartPage from './cartPage';

export default class App extends Component {

  state = {
    productData: [
      { label: "Product 1", price: 100, id: 1 },
      { label: "Product 2", price: 120, id: 2 },
      { label: "Product 3", price: 30, id: 3 }
    ],
    cartData: [],
    showCart: true,
  };

  addItem = (id, operation) => {
    this.setState(({ productData, cartData }) => {
      const idxProduct = productData.findIndex((el) => el.id === id);
      let productDataItem = productData[idxProduct];

      const idxCart = cartData.findIndex((el) => el.id === id);
      let newCartData;

      if ( operation === 1 ) {
        newCartData = (idxCart !== -1) ? 
          [...cartData.slice(0, idxCart), { id, count: cartData[idxCart].count + 1, cost: cartData[idxCart].cost + productDataItem.price }, ...cartData.slice(idxCart + 1)] :
          [...cartData, { id, count: 1, cost: productDataItem.price }];

        newCartData.sort(function (a, b) {
          return (a.id > b.id) ? 1 : -1;
        });
      } else {
        newCartData = (cartData[idxCart].count === 1) ? 
          [...cartData.slice(0, idxCart), ...cartData.slice(idxCart + 1)] :
          [...cartData.slice(0, idxCart), { id, count: cartData[idxCart].count - 1, cost: cartData[idxCart].cost - productDataItem.price }, ...cartData.slice(idxCart + 1)];
      }

      return {
        cartData: newCartData
      }
    });
  };

  delAllItem = (id) => {
    this.setState(({ cartData }) => {
      const idx = cartData.findIndex((el) => el.id === id);
      return {
        cartData: [...cartData.slice(0, idx), ...cartData.slice(idx + 1)]
      }
    });
  };

  refreshCart = () => {
    this.setState(({ cartData }) => {
      return {
        cartData: []
      }
    });
  }

  handlerShowCart = () => {
    this.setState({ showCart: !this.state.showCart })
  }


  render() {
    return (
      this.state.showCart ?
        <div>
          <CartPage
            productData={this.state.productData}
            cartData={this.state.cartData}
            addItem={this.addItem}
            delAllItem={this.delAllItem}
            refreshCart={this.refreshCart}
            handlerShowCart={this.handlerShowCart} />
        </div> :
        <div>
          <ProductPage
            productData={this.state.productData}
            cartData={this.state.cartData}
            addItem={this.addItem}
            handlerShowCart={this.handlerShowCart} />
        </div>
    )
  }
}

