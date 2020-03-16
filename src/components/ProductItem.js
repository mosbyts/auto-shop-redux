import React from 'react'
import './ProductItem.css'
import { connect } from 'react-redux';

function ProductItem(props) {
    return (
        <div className='productItemDiv'>
            <div className='productItem' key={props.item.name}>
                <img src={props.item.img} alt={props.item.name} />
                <div className='productDetails'>
                    <h3 className='name'>{props.item.name}</h3>
                    <p className='number'>PartNo: <strong>{props.item.number}</strong></p>
                    <h3 className="price">${props.item.pricing}</h3>
                    <button onClick={() => console.log({ partNo: props.item.number, price: props.item.pricing })}><strong>Add to Cart</strong></button>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps, null)(ProductItem)