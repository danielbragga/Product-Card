import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="content">
      <div className="card-container">
        <div className="img">
          <img src="/images/image-product-desktop.jpg" alt=" " />
        </div>
        <div className="card-content">
          <h6 className="product-category">Perfume</h6>
          <h2 className="product-name">Gabrielle essence Eau De Parfum</h2>
          <p className="product-description">
            A floral, solar and voluptous interpretation composed by Oliver
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="prices">
            <p className="current-price">$149.99</p>
            <p className="old-price">$169.99</p>
          </div>
          <button className="button">
            <img src="/images/cart.svg" alt=" " />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
