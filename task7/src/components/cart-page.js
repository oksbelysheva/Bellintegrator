import React from 'react';
import {Link} from 'react-router-dom';
import AppHeader from './app-header';
import CartList from './cart-list';
import {connect} from 'react-redux';
import {refreshCart} from '../actions';

const CartPage = ({cartData, refreshCart}) => {
    debugger;
    const total = cartData.reduce(function(sum, current) {
        return sum + current.cost;
    }, 0);

    return(
        <div className="App">
            <AppHeader appHeader='Shopping cart'/>
            <CartList />
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
      cartData: state.cartData
    }
  }

const mapDispatchToProps = (dispatch) => {
    return{
        refreshCart: () => dispatch(refreshCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);