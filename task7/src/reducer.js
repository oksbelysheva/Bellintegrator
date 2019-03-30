const initialState = {
  productData: [
    {label: "Product 1", price: 100, count: 0, cost: 0, id: 1},
    {label: "Product 2", price: 120, count: 0, cost: 0, id: 2},
    {label: "Product 3", price: 30, count: 0, cost: 0, id: 3}
  ],
  cartData: [],
};

const reducer = (state = initialState, action) => {

    switch (action.type){
      case 'addToCart':{
        const {productData, cartData} = state;
        const idxProduct = productData.findIndex((el) => el.id === action.id);
        let productDataItem = productData[idxProduct];
        productDataItem.count++;
        productDataItem.cost += productDataItem.price;
        
        const idxCart = cartData.findIndex((el) => el.id === action.id);
        const newCartData = (idxCart !== -1) ? [...cartData.slice(0,idxCart), productData[idxProduct], ...cartData.slice(idxCart+1)] :
                                               [...cartData, productData[idxProduct]];
        newCartData.sort(function(a,b){
          return (a.label > b.label) ? 1 : -1;
        });
        return{
          productData: [...productData.slice(0,idxProduct), productDataItem, ...productData.slice(idxProduct+1)],
          cartData: newCartData
        }
      }

      case 'delAllItemToCart':{
        const {productData, cartData} = state;
        const idxProduct = productData.findIndex((el) => el.id === action.id);
        let productDataItem = productData[idxProduct];
        productDataItem.count = 0;
        productDataItem.cost = 0;
    
        const idx = cartData.findIndex((el) => el.id === action.id);
        return{
          productData: [...productData.slice(0,idxProduct), productDataItem, ...productData.slice(idxProduct+1)],
          cartData: [...cartData.slice(0,idx), ...cartData.slice(idx+1)] 
        }
      }

      case 'delOneItemToCart':{
        const {productData, cartData} = state;
        const idxProduct = productData.findIndex((el) => el.id === action.id);
        let productDataItem = productData[idxProduct];
        productDataItem.count--;
        productDataItem.cost -= productDataItem.price;
        
        const idx = cartData.findIndex((el) => el.id === action.id);
        const newCartData = (productDataItem.count === 0) ? [...cartData.slice(0,idx), ...cartData.slice(idx+1)] :
                                                            [...cartData.slice(0,idx), productDataItem, ...cartData.slice(idx+1)];
        return{
          productData: [...productData.slice(0,idxProduct), productDataItem, ...productData.slice(idxProduct+1)],
          cartData: newCartData
        }
      }

      case 'refreshCart':{
        debugger;
        const {productData, cartData} = state;
        let tempProductData = productData;
        let tempCartData = cartData;
        tempProductData.forEach(element => {
          if (element.count>0){
            const idxProduct = tempProductData.findIndex((el) => el.id === element.id);
            let productDataItem = tempProductData[idxProduct];
            productDataItem.count = 0;
            productDataItem.cost = 0;
        
            const idx = tempCartData.findIndex((el) => el.id === element.id);
            tempProductData = [...tempProductData.slice(0,idxProduct), productDataItem, ...tempProductData.slice(idxProduct+1)];
            tempCartData =  [...tempCartData.slice(0,idx), ...tempCartData.slice(idx+1)];
          }
        });
        return{
          productData: tempProductData,
          cartData: tempCartData
        }
      }

      default:
        return state;
    }
  }

  export default reducer;