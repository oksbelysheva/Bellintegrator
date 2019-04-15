import React from 'react';
import {Link} from 'react-router-dom';
import AppHeader from './appHeader';
import Table from './table';
import CartItem from './cartItem';
import {connect} from 'react-redux';
import {refreshCart, addToCart, delAllItemToCart} from '../actions';

const CartPage = ({productData, cartData, refreshCart, addToCart, delAllItemToCart}) => {
    const total = cartData.reduce(function(sum, current) {
        return sum + current.cost;
    }, 0);

    const headerName = [
        'Name',
        'Cost',
        'Count',
        '',
        ''
    ];

    const renderTableBody = () =>{
        return cartData.map((item) => {
            const idxProduct = productData.findIndex((el) => el.id === item.id);
            return (<CartItem {...productData[idxProduct]} {...item} onOneDel={() => addToCart(item.id, -1)} onAllDel={() => delAllItemToCart(item.id)}/>)
        });
    };

    return(
        <div className="App">
            <AppHeader appHeader='Shopping cart'/>
            <Table headerName = {headerName} renderTableBody={renderTableBody}/>
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
        addToCart: (id) => dispatch(addToCart(id, -1)),
        delAllItemToCart: (id) => dispatch(delAllItemToCart(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);