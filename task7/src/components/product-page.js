import React from 'react';
import {Link} from 'react-router-dom';
import AppHeader from './app-header';
import ProductList from './product-list';
import {addToCart} from '../actions';
import {connect} from 'react-redux';

const ProductPage = ({cartData, productData, addToCart}) => {
    return(
      <div className="App">
        <AppHeader appHeader='Product List'/>
        <ProductList cartData = {cartData}  productData = {productData} addToCart = {addToCart} />
        <Link to='/cart'>Cart</Link>
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
        addToCart: (id) => dispatch(addToCart(id, 1))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);