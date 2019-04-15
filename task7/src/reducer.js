const initialState = {
  productData: [
    {label: "Product 1", price: 100, id: 1},
    {label: "Product 2", price: 120, id: 2},
    {label: "Product 3", price: 30, id: 3}
  ],
  cartData: [],
};

const reducer = (state = initialState, action) => {

  switch (action.type){
    case 'ADD_TO_CART':{
      const {productData, cartData} = state;
      const idxProduct = productData.findIndex((el) => el.id === action.id);
      let productDataItem = productData[idxProduct];
        
      const idxCart = cartData.findIndex((el) => el.id === action.id);
      let newCartData;

      if ( action.operation === 1 ){
        newCartData = (idxCart !== -1) ? [...cartData.slice(0,idxCart), {id: action.id, count: cartData[idxCart].count+1, cost: cartData[idxCart].cost+productDataItem.price}, ...cartData.slice(idxCart+1)] :
                                         [...cartData, {id: action.id, count: 1, cost: productDataItem.price}];
         
        newCartData.sort(function(a,b){
          return (a.id > b.id) ? 1 : -1;
        });

      } else{
        newCartData = (cartData[idxCart].count === 1) ? [...cartData.slice(0,idxCart), ...cartData.slice(idxCart+1)] :
                                                        [...cartData.slice(0,idxCart), {id: action.id, count: cartData[idxCart].count-1, cost: cartData[idxCart].cost-productDataItem.price}, ...cartData.slice(idxCart+1)];
      }    
        
      return{
        productData: productData,
        cartData: newCartData
      }
    }

    case 'DELETE_ALL_ITEM_IN_CART':{
      const {productData, cartData} = state;
      const idx = cartData.findIndex((el) => el.id === action.id);
      return{
        productData: productData,
        cartData: [...cartData.slice(0,idx), ...cartData.slice(idx+1)]
      }
    }

    case 'REFRESH_CART':{
      const {productData} = state;
      return{
        productData: productData,
        cartData:[]
      }
    }

    default:
      return state;
  }
}

export default reducer;