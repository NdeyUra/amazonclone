import React from 'react'
import { useStateValue } from '../Container/Stateprovider'
import './Checkoutproduct.css'
function Checkoutproduct({ id, image, title, price, rating }) {
    const [_, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>&#x20B9;</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_,i)=>(<p>&#9733;</p>))}
                </div>
                <button onClick={removeFromCart}>Remove</button>
            </div>
        </div>
    )
}

export default Checkoutproduct
