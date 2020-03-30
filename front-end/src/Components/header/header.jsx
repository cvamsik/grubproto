import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/GrubHub_Logo.svg";
import "./header-style.css";
import { auth } from "../FirebaseUtils/FirebaseUtils";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

const Header = ({ currentuser, hidden }) => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <Link to="/home">
            <Logo className="logo" />
          </Link>
        </div>
        <div className="options">
          <Link to="list" className="option">
            List
          </Link>
          <Link to="cart" className="option">
            Cart
          </Link>
          {currentuser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SignOut
              {console.log(currentuser.currentuser)}
            </div>
          ) : (
            <Link className="option" to="/login">
              Sign In
              {console.log(currentuser)}
            </Link>
          )}
          <CartIcon></CartIcon>
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  //two level destructuring from the original {state}
  currentuser: state.user.currentuser,
  hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
