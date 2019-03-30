import React from 'react';
import ProductItem from './product-list-item';
import './product-list.css';
import {connect} from 'react-redux';
import {addToCart} from '../actions';

const ProductList = ({ productData, addToCart }) =>{
    const elements = productData.map((item) => {
      return (<ProductItem {...item} addToCart = {() => addToCart(item.id)}/>)
    });

    return(
      <table className="table">
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Count</th>
          <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
          {elements}
        </tbody>
      </table>
    );
  };

  const mapStateToProps = (state) => {
    return {
      productData: state.productData
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return{
      addToCart: (id) => dispatch(addToCart(id))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ProductList);