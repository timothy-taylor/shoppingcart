import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ShoppingCart from "./ShoppingCart";

const RouteSwitch = () => {
  const [currentTotal, setCurrentTotal] = React.useState(0);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const addToCart = (item) => {
    if (shoppingCart.some(e => e.id === item.id)){
      setShoppingCart(shoppingCart.map(e => {
        if (e.id === item.id) {
          e.quantity++;
        }
        return e;
      }))
    } else {
      setShoppingCart(shoppingCart.concat(item));
    }
    setCurrentTotal(currentTotal + item.price);
  };
  const removeFromCart = (id) => {
    const item = shoppingCart.find(e => e.id === id);
    if (item.quantity > 1){
        setShoppingCart(shoppingCart.map(e => {
        if (e.id === id) {
          e.quantity--;
        }
        return e;
      }))
    } else {
      setShoppingCart(shoppingCart.filter((e) => e.id !== id));
    }
    setCurrentTotal(currentTotal - item.price);
  }

  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route
          path="/"
          element={
            <App 
              addToCart={addToCart} 
              total={currentTotal} 
            />}
        />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              total={currentTotal}
              cart={shoppingCart}
              onRemove={removeFromCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
