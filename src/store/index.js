import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducers'
import products from '../data/products.json'
import thunk from 'redux-thunk'
 
const middleware = [thunk ]

const initialState = {
    products: products,
    clicked: products.clicked
  }

export const store = createStore(reducer, initialState,compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
));