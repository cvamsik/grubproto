import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/GrubHub_Logo.svg";
import "./header-style.css";
import { auth } from "../FirebaseUtils/FirebaseUtils";
import { connect } from "react-redux";

const Header = ({ currentuser }) => {
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
        {/* if(currentuser)
        {
          <div className="option" onClick={() => auth.signOut()}>
            Hello
            </div>
        }
        else
        {
          <div className="option" to="/login">
            Sign In
          </div>
        } */}
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
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentuser: state.user.currentuser
});

export default connect(mapStateToProps, null)(Header);
