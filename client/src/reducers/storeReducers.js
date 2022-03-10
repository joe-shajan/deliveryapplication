import { STORE_LIST_FAIL, STORE_LIST_REQUEST, STORE_LIST_SUCCESS, STORE_LOGIN_FAIL, STORE_LOGIN_REQUEST, STORE_LOGIN_SUCCESS, STORE_LOGOUT, STORE_REGISTER_FAIL, STORE_REGISTER_REQUEST, STORE_REGISTER_SUCCESS } from "../constants/storeConstants";

export const storeListReducer = (state = { stores: [] }, action) => {
    switch (action.type) {
        case STORE_LIST_REQUEST:
            return { loading: true, stores: [] }
        case STORE_LIST_SUCCESS:
            return { loading: false, stores: action.payload }
        case STORE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


export const storeRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case STORE_REGISTER_REQUEST:
        return { loading: true }
      case STORE_REGISTER_SUCCESS:
        return { loading: false, storeInfo: action.payload }
      case STORE_REGISTER_FAIL:
        return { loading: false, error: action.payload }
      case STORE_LOGOUT:
        return {}
      default:
        return state
    }
  }
export const storeLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case STORE_LOGIN_REQUEST:
        return { loading: true }
      case STORE_LOGIN_SUCCESS:
        return { loading: false, storeInfo: action.payload }
      case STORE_LOGIN_FAIL:
        return { loading: false, error: action.payload }
      case STORE_LOGOUT:
        return {}
      default:
        return state
    }
  }

