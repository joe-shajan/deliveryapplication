import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { storeListReducer, storeLoginReducer, storeRegisterReducer } from './Redux/reducers/storeReducers'
import { productCreateReducer, productListReducer } from './Redux/reducers/productReducers';
import { cartReducer } from './Redux/reducers/cartReducer';


const reducer = combineReducers({
    storeList: storeListReducer,
    storeRegister:storeRegisterReducer,
    storeOwner:storeLoginReducer,
    createProduct:productCreateReducer,
    cart: cartReducer,
    listproduct:productListReducer
})

const initialState = {}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store