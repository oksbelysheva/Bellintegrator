import React from 'react';
import { Link } from 'react-router-dom';
import AppHeader from './appHeader';
import Table from './table';
import ProductItem from './productItem';
import { addToCart } from '../actions';
import { connect } from 'react-redux';


const ProductPage = ({ cartData, productData, addToCart }) => {
  const headerName = [
    'Name',
    'Price',
    'Count',
    ''
  ];

  const renderTableBody = () => {
    return productData.map((item) => {
      const cartIdx = cartData.findIndex((el)=>el.id === item.id);
      const propsCart = cartIdx === -1 ? null : cartData[cartIdx];
      return (<ProductItem {...propsCart} {...item} addToCart={() => addToCart(item.id, 1)}/>)
    });
  }

  return (
    <div className="App">
      <AppHeader appHeader='Product List' />
      <Table
        headerName={headerName}
        renderTableBody={renderTableBody}/>
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
  return {
    addToCart: (id) => dispatch(addToCart(id, 1))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);