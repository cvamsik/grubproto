import React from "react";
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";

import "./LoginPage-style.css";
const LoginPage = () => {
  return (
    <div className="loginComponents">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default LoginPage;
