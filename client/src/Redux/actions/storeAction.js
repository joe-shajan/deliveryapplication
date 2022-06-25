import axios from 'axios'
import { STORE_LIST_FAIL, STORE_LIST_REQUEST, STORE_LIST_SUCCESS, STORE_LOGIN_FAIL, STORE_LOGIN_REQUEST, STORE_LOGIN_SUCCESS, STORE_REGISTER_FAIL, STORE_REGISTER_REQUEST, STORE_REGISTER_SUCCESS } from "../constants/storeConstants";

export const listStores = () => async (dispatch) => {
    try {
        dispatch({ type: STORE_LIST_REQUEST })
        const { data } = await axios.get('/store/stores')

        dispatch({
            type: STORE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: STORE_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const registerStore = (storeData) => async (dispatch) => {
  try {
    dispatch({
      type: STORE_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/store',
      storeData,
      config
    )

    dispatch({
      type: STORE_REGISTER_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: STORE_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const storeLogin = (storeOwnerData) => async (dispatch) => {
  try {
    dispatch({
      type: STORE_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/store/store-login',
      storeOwnerData,
      config
    )

    dispatch({
      type: STORE_LOGIN_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: STORE_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}