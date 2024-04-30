import "./login.css";
import React, { useState } from "react";
import { validateSubmit } from "../utils/loginVerification";

function NewRegistration(props) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [gender, setGender] = useState("male");

  function backbuttonclickhandler(e) {
    e.preventDefault();
    // setPageno(0)
    props.loginBackButtonHandler();
  }

  function firstNameChange(e) {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    setfirstName(value);
  }
  function lastNameChange(e) {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    setlastName(value);
  }
  function emailChange(e) {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    setEmail(value);
  }
  function mobileNoChange(e) {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    setMobile(value);
  }

  function passwordChange(e) {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    setPassword(value);
  }
  function retypePasswordChange(e) {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    setRetypePassword(value);
  }

  function submitButtonClickHandler(e) {
    e.preventDefault();
    validateSubmit(
      firstName,
      lastName,
      email,
      mobile,
      password,
      retypePassword,
      gender
    );
  }



  const handleSelectChange = (event) => {
    event.preventDefault();
    setGender(event.target.value);
  };

  return (
    <div className="login">
      <label>
        <b>First Name</b>
      </label>
      <input
        type="text"
        name="Uname"
        id="Uname"
        placeholder="First Name"
        onChange={firstNameChange}
      />
      <br />
      <br />
      <label>
        <b>Last Name</b>
      </label>
      <input
        type="text"
        name="Pass"
        id="Pass"
        placeholder="Last Name"
        onChange={lastNameChange}
      />
      <br />
      <br />
      <label>
        <b>Email@gmail</b>
      </label>
      <input
        type="text"
        name="Uname"
        id="Uname"
        placeholder="Email"
        onChange={emailChange}
      />
      <br />
      <br />
      <label>
        <b>Mobile No</b>
      </label>
      <input
        type="text"
        name="Uname"
        id="Uname"
        placeholder="Mobile No"
        onChange={mobileNoChange}
      />
      <br />
      <br />
      <label>
        <b>Password</b>
      </label>
      <input
        type="Password"
        name="Pass"
        id="Pass"
        placeholder="Password"
        onChange={passwordChange}
      />
      <br />
      <br />
      <label>
        <b>Re-type Password</b>
      </label>
      <input
        type="Password"
        name="Pass"
        id="Pass"
        placeholder="Re-type Password"
        onChange={retypePasswordChange}
      />
      <br />
      <br />
      <label for="gender">Select Gender</label>
      <select value={gender} onChange={handleSelectChange}>
        <option value="male">Male</option>

        <option value="female">Female</option>
      </select>
      <br />
      <br />
      <input
        type="button"
        name="log"
        id="log"
        value="Register"
        onClick={submitButtonClickHandler}
      />
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
export default NewRegistration;
