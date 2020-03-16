//Necessary dependencies, data and components
import React from 'react'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'

//Handles data display
function App(props) {
  return (
    <div>
      {
        props.products.map((item, index) => {
          return <ProductItem item={item} key={item.name} />
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect(mapStateToProps, null)(App)
