import React from 'react';
import {Link} from 'react-router-dom';
import AppHeader from './app-header';
import CartList from './cart-list';
import {connect} from 'react-redux';
import {refreshCart, addToCart, delAllItemToCart} from '../actions';

const CartPage = ({productData, cartData, refreshCart, onOneDel, onAllDel}) => {
    debugger;
    const total = cartData.reduce(function(sum, current) {
        return sum + current.cost;
    }, 0);

    return(
        <div className="App">
            <AppHeader appHeader='Shopping cart'/>
            <CartList productData = {productData} cartData = {cartData} onAllDel={onAllDel} onOneDel={onOneDel}/>
            <div><span>Total:  {total}$</span></div>
            <div>
                <button type="button" className="btn btn-link" style={{float:"left"}}><Link to='/'>Product List</Link></button>
                <button type="button" className="btn btn-light" style={{float:"right"}} onClick={refreshCart}>Refresh cart</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      productData: state.productData,
      cartData: state.cartData
    }
  }

const mapDispatchToProps = (dispatch) => {
    return{
        refreshCart: () => dispatch(refreshCart()),
        onOneDel: (id) => dispatch(addToCart(id, -1)),
        onAllDel: (id) => dispatch(delAllItemToCart(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);