import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_ADD_ITEM_REQUEST,
  GET_ALL_CART_ITEMS,
  CART_INCREMENT_ITEM,
  CART_DECREMENT_ITEM,
} from '../constants/cartConstants'
import { Toast } from '../../Helpers/alerts'

export const addToCart = (userid, storeid, productid) => async (dispatch, getState) => {
  console.log(userid, storeid, productid)
  dispatch({ type: CART_ADD_ITEM_REQUEST })
  try {
    const { data } = await axios.get(
      `/cart/add-item/${userid}/${storeid}/${productid}`
    );
    dispatch({
      type: CART_ADD_ITEM,
      payload: data.cartitems
    })
    if (data) {
      Toast.fire({
        icon: 'success',
        title: 'Item added to cart'
      })
    }
  } catch (error) {
    if (error.response.status === 409) {
      Toast.fire({
        icon: 'success',
        title: error.response.data.message
      })
    }

  }



  //   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
export const getAllCartItems = (userid) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/cart/${userid}`)
    if (data) {
      dispatch({
        type: GET_ALL_CART_ITEMS,
        payload: data
      })
    }
  } catch (error) {

  }
}


export const removeFromCart = (userid, productid) => async (dispatch, getState) => {

  const { cart } = getState()
  const { cartitems } = cart

  try {

    const { data } = await axios.delete(`/cart/delete-item/${userid}/${productid}`)

    const newCartitems = cartitems.filter((product) => product.productid !== productid);

    dispatch({
      type: CART_REMOVE_ITEM,
      payload: newCartitems,
    })
    Toast.fire({
      icon: 'success',
      title: data.message
    })
  } catch (error) {
    Toast.fire({
      icon: 'success',
      title: error.response.data.message
    })
  }



  // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
export const incrementItemInCart = (userid, productid) => async (dispatch, getState) => {

  const { cart } = getState()
  const { cartitems } = cart

  try {

    const response = await axios.put(`/cart/increment-item/${userid}/${productid}`)
    if (response.status === 200) {

      const newCartitems = cartitems.map((product) => {
        if (product.productid === response.data.productid) {
          let actualPrice = product.producttotal / product.noofitems
          product.noofitems++
          product.producttotal += actualPrice
          return product
        }
        return product
      });

      dispatch({
        type: CART_INCREMENT_ITEM,
        payload: newCartitems,
      })
    }

  } catch (error) {
    Toast.fire({
      icon: 'success',
      title: error.response.data.message
    })
  }



  // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
export const decrementItemInCart = (userid, productid) => async (dispatch, getState) => {

  const { cart } = getState()
  const { cartitems } = cart

  try {

    const response = await axios.put(`/cart/decrement-item/${userid}/${productid}`)
    if (response.status === 200) {

      const newCartitems = cartitems.map((product) => {
        if (product.productid === response.data.productid) {
          let actualPrice = product.producttotal / product.noofitems
          product.noofitems--
          product.producttotal -= actualPrice
          return product
        }
        return product
      });

      dispatch({
        type: CART_DECREMENT_ITEM,
        payload: newCartitems,
      })
    }

  } catch (error) {
    Toast.fire({
      icon: 'success',
      title: error.response.data.message
    })
  }



  // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

// export const saveShippingAddress = (data) => (dispatch) => {
//   dispatch({
//     type: CART_SAVE_SHIPPING_ADDRESS,
//     payload: data,
//   })

//   localStorage.setItem('shippingAddress', JSON.stringify(data))
// }

// export const savePaymentMethod = (data) => (dispatch) => {
//   dispatch({
//     type: CART_SAVE_PAYMENT_METHOD,
//     payload: data,
//   })

//   localStorage.setItem('paymentMethod', JSON.stringify(data))
// }