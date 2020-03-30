import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartAction";
import "./cartIcon-style.css";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cartIcon" onClick={toggleCartHidden}>
    <ShoppingCart className="iconcomp" />
    <span className="itemCount">20</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
export default connect(null, mapDispatchToProps)(CartIcon);
