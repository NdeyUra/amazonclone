import React from "react";
import "./Checkout.css";
import ad from "../Logo/ads.png";
import Subtotal from "./Subtotal";
import { useStateValue } from "../Container/Stateprovider";
import Checkoutproduct from "./Checkoutproduct";

function Checkout() {
  const [{ basket,user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={ad} alt="" className="checkout__ads" />
        <div className="checkout__title">
          <h3>Hello,{user?.email}</h3>
          <h2>Your shopping cart</h2>
          {basket.map((item) => (
            <Checkoutproduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
