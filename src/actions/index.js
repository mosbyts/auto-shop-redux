import { ADD_TO_CART } from '../constants/actionTypes'
import { store } from '../store/index'

const addToCart = products => ({
    type: ADD_TO_CART,
    payload: console.log(store.getState().products)
})

export { addToCart }