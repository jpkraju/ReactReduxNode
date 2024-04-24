import React, { useState } from "react";
import "./login.css";

// const {validateLogin} = require('../utils/loginVerification');
import { validateLogin } from "../utils/loginVerification";

function Login(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function backbuttonclickhandler(e) {
    e.preventDefault();
    // setPageno(0)
    props.loginBackButtonHandler();
  }

  function usernameChange(e) {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    // const name = target.name;
    // console.log(value, name);
    setUsername(value);

  }

  function passwordChange(e) {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    // const name = target.name;
    // console.log(value, name);
    setPassword(value);
    
  }

  function loginButtonClickHandler(e) {
    e.preventDefault();
    // alert(username + ' - ' + password);
    validateLogin(username, password);
  }

  return (
    <div className="login">
      <label>
        <b>User Name</b>
      </label>
      <input type="text" name="Uname" id="Uname" placeholder="Username" onChange={usernameChange} />
      <br />
      <br />
      <label>
        <b>Password</b>
      </label>
      <input type="Password" name="Pass" id="Pass" placeholder="Password" onChange={passwordChange} />
      <br />
      <br />
      <input type="button" name="log" id="log" value="Login" onClick={loginButtonClickHandler} />
      <br />
      <br />
      <input type="checkbox" id="check" />
      <span>Remember me</span>
      Forgot <a href="#">Password</a>
      <br />
      <br />
      <input
        type="button"
        name="back"
        id="back"
        value="Back"
        onClick={backbuttonclickhandler}
      />
    </div>
  );
}
export default Login;
