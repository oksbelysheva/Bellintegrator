import React, {Component} from 'react';
import AppHeader from './appHeader';
import ProductItem from './productListItem';
import Table from './table';

export default class ProductPage extends Component{
    renderTableBody = () =>{
        return this.props.productData.map((item) => {
            const cartIdx = this.props.cartData.findIndex((el)=>el.id === item.id);
            const propsCart = cartIdx === -1 ? null : this.props.cartData[cartIdx];
            return (<ProductItem {...propsCart} {...item} onAdd={() => this.props.addItem(item.id, 1)}/>)
          });
    };

    render(){
        const headerName = [
            'Name',
            'Price',
            'Count',
            ''
        ];

        return(
        <div className="App">
            <AppHeader appHeader='Product List'/>
              <Table
              headerName = {headerName}
              renderTableBody = {this.renderTableBody}
              />
            <button type="button" className="btn btn-large btn-info" onClick={this.props.handlerShowCart}>
                <span>Cart</span>
            </button>
         </div>
        )
    }
}