import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppHeader from './app-header';
import ProductList from './product-list';

export default class ProductPage extends Component{
    render(){
        return(
        <div className="App">
            <AppHeader appHeader='Product List'/>
            <ProductList />
            <Link to='/cart'>Cart</Link>
         </div>
        )
    }
}