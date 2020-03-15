import React from 'react'
import './ProductItem.css'

function ProductItem(props){
    return(
        <div className='productItemDiv'>
            {props.products.map((item, index) => {
                const onClick = () => {
                    console.log(JSON.stringify(item.number), item.pricing)
                }

                return(
                    <div className='productItem'>
                        <img src={item.img} alt={item.name} />
                        <div className='productDetails'>
                            <h3 className='name'>{item.name}</h3>
                            <p className='number'>PartNo: <strong>{item.number}</strong></p>
                            <h3 className="price">${item.pricing}</h3>
                            <button onClick={onClick}><strong>Add to Cart</strong></button>
                        </div>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )  
}

export default ProductItem