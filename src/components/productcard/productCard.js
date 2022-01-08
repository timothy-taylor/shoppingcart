import React from "react";
import centsToDollars from '../centsToDollars';

const ProductCard = (props) => {
  const handleClick = () => {
    const item = {id: props.id, name: props.name, price: props.price, quantity: 1}
    props.addToCart(item);
  }

  return (
    <div className="w-56 text-right border-2 rounded-md">
      <img src={props.photo} alt="product" className="w-52" />
      <h1 className="text-lg product-name">{props.name}</h1>
      <h2 className="product-price">{centsToDollars(props.price)}</h2>
      <button id={props.id} onClick={handleClick} className="p-2 text-white product-name bg-slate-500 hover:bg-slate-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
