import { CART_ADD_FAIL, CART_ADD_ITEM, CART_ADD_ITEM_REQUEST, CART_CLEAR_ITEMS, CART_REMOVE_ITEM, GET_ALL_CART_ITEMS } from "../constants/cartConstants"


export const cartReducer = (state = { cartitems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM_REQUEST:
            return {
                loading: true,
                cartitems: [...state.cartitems],
            }
        case CART_ADD_ITEM:
            return {
                loading: false,
                success: true,
                cartitems: action.payload
            }
        case GET_ALL_CART_ITEMS:
            return {
                loading:false,
                cartitems:action.payload
            }
        case CART_REMOVE_ITEM:
            return {
                loading: false,
                error: action.payload,
            }
        case CART_ADD_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case CART_CLEAR_ITEMS:
            return {}
        default:
            return state
    }
}