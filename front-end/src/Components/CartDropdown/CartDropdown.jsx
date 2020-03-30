import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown-style.css";

const CartDropdown = () => (
  <div className="cartDropDown">
    <div className="cart-items">Cart items</div>
    <CustomButton>Checkout</CustomButton>
  </div>
);

export default CartDropdown;
