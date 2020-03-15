//Necessary dependencies, data and components
import React, { Component, Fragment } from 'react'
import { createStore } from 'redux'
import reducer from '../reducers'
import products from '../data/products.json'
import ProductItem from '../components/ProductItem'

const initialState = {
  products: products
}
const store = createStore(reducer, initialState);

//Handles data display
export default class App extends Component {
  render(){
    return (
      <Fragment>
        <ProductItem
          products={store.getState().products}
        />
      </Fragment>
    );
  }
}

