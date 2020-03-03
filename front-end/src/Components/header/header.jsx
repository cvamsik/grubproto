import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/GrubHub_Logo.svg";
import "./header-style.css";
import { auth } from "../FirebaseUtils/FirebaseUtils";

const Header = thisprops => {
  return (
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
        {/* {console.log(thisprops)} */}
        {thisprops.currentuser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            SIGN IN{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
