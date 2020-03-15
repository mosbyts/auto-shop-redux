//Necessary dependencies, data and components
import React, { Component, Fragment } from 'react'
import ProductItem from '../components/ProductItem'
import { store } from './index'

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

