import './Product.css'
import React from 'react'

const Product = props =>{
    const {eachItem} = props
    const {brand, category, color, description, discount, image, id, model, price, title} = eachItem

    return(
        <li className='product-container' >
            <img className='product-image' src ={image}  alt = 'product' />
            <p className='list-text first-text' >Color: {color}</p>
            <p className='list-text'>Model: {model}</p>
            <p className='list-text'>Brand: {brand}</p>
            <p className='list-text'>Price: $.{price}</p>
            <p className='list-text'>Discount: $.{discount}</p>
            <p className='list-text'>New price: $.{price - discount}/- only</p>
            
        </li>
    )
}

export default Product