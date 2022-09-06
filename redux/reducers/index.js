import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer, shopReducer } from './productReducer';

const rootreducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    shop: shopReducer


});
export default rootreducers;