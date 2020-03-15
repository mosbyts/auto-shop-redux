//Necessary dependencies, data and components
import React, { Fragment } from "react";
import products from '../data/products.json'
import ProductItem from './ProductItem'

//Handles data display
const App = () => {
  return (
    <Fragment>
      <ProductItem
        products={products}
      />
    </Fragment>
  );
}

export default App
