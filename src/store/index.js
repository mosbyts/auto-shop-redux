import { createStore } from 'redux'
import reducer from '../reducers'
import products from '../data/products.json'

const initialState = {
    products: products,
    clicked: products.clicked
  }

export const store = createStore(reducer, initialState);