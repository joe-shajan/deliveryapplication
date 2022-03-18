import axios from 'axios'
import { PRODUCT_CREATE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/ProductConstants"


export const listProducts = (storeid, skip) => async (dispatch) => {
  try {
    if (skip === 0) {
      dispatch({ type: PRODUCT_LIST_REQUEST })
    }

    let { data } = await axios.get(`/product/products/${storeid}/${skip}`);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(`/product/`, product, config)

    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    //   if (message === 'Not authorized, token failed') {
    //     dispatch(logout())
    //   }
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload: message,
    })
  }
}