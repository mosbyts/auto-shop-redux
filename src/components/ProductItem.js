import React from 'react'
import './ProductItem.css'
import { addToCart } from '../actions'

function ProductItem(props){
    return(
        <div className='productItemDiv'>
            {props.products.map((item, index) => {
                return(
                    <div className='productItem' key={item.name}>
                        <img src={item.img} alt={item.name} />
                        <div className='productDetails'>
                            <h3 className='name'>{item.name}</h3>
                            <p className='number'>PartNo: <strong>{item.number}</strong></p>
                            <h3 className="price">${item.pricing}</h3>
                            <button onClick={addToCart}><strong>Add to Cart</strong></button>
                        </div>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )  
}

export default ProductItem