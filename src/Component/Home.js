import React from "react";
import logo from "../Logo/prime.jpg";
import "./Home.css";
import Product from "./Product";
import pro1 from "../Logo/pro1.jpg";
import pro2 from "../Logo/pro2.jpg";
import pro3 from "../Logo/pro3.jpg";
import pro4 from "../Logo/pro4.jpg";
import pro5 from "../Logo/pro5.jpg";
import pro6 from "../Logo/pro6.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={logo} alt="logo" />
        <div className="home__row">
          <Product
          id='a1'
            title="Mi TV 4A PRO 108 cm (43 Inches) Full HD Android LED TV (Black) | With Data Saver"
            price={25000}
            rating={4}
            image={pro1}
          />
          <Product
          id='a2'
            title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver"
            price={72900}
            rating={5}
            image={pro2}
          />
        </div>
        <div className="home__row">
          <Product
          id='a3'
            title="LG 6.5 Kg 5 Star Smart Inverter Fully-Automatic Top Loading Washing Machine (T65SKSF4Z, Middle Free Silver)"
            price={16190}
            rating={5}
            image={pro3}
          />
          <Product
          id='a4'
            title="Amazon Brand - Solimo Waterproof Terry Cotton Mattress Protector, 75x60 inches, Queen Size (White)"
            price={799}
            rating={4}
            image={pro4}
          />
          <Product
          id='a5'
            title="Amazon Brand - Solimo Microfibre Reversible Comforter, Double (Ocean Blue and Mild Blue, 200 GSM)"
            price={1599}
            rating={4}
            image={pro5}
          />
        </div>
        <div className="home__row">
          <Product
          id='a6'
            title="Samsung C34H890WJN - 34 Inch (3440 x 1440) WQHD UltraWide Professional LED Curved Monitor"
            price={88990}
            rating={5}
            image={pro6}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
