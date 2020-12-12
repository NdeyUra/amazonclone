import React from "react";
import { useStateValue } from "../Container/Stateprovider";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title,
        price,
        rating,
        image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>&#x20B9;</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> &#9733;</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
