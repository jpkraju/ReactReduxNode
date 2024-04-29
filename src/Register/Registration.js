import React, { useState } from "react";
import "../Login/login.css";
// import { validateSubmit } from "../utils/loginVerification";
import { validateSubmit } from "../utils/loginVerification";
function NewRegistration(props) {

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

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
  function submitButtonClickHandler(e){
    e.preventDefault();
    validateSubmit(firstName,lastName,email,mobile,password, retypePassword);
  }

  const stl={
    height:40,
  }

  return (
    <div className="l-form">
      <form action="" className="form">

        <div className="form__div" style={stl} >
          <input type="text" className="form__input" placeholder=" " onChange={firstNameChange} />
          <label htmlFor="" className="form__label">First Name</label>
        </div>

        <div className="form__div" style={stl}>
          <input type="password" className="form__input" placeholder=" " onChange={lastNameChange} />
          <label htmlFor="" className="form__label">Last Name</label>
        </div>

        <div className="form__div" style={stl}>
          <input type="password" className="form__input" placeholder=" " onChange={emailChange} />
          <label htmlFor="" className="form__label">Email</label>
        </div>

        <div className="form__div" style={stl}>
          <input type="password" className="form__input" placeholder=" " onChange={mobileNoChange}/>
          <label htmlFor="" className="form__label">Mobile No</label>
        </div>

        <div className="form__div" style={stl}>
          <input type="password" className="form__input" placeholder=" " onChange={passwordChange} />
          <label htmlFor="" className="form__label">Password</label>
        </div>

        <div className="form__div" style={stl}>
          <input type="password" className="form__input" placeholder=" " onChange={retypePasswordChange} />
          <label htmlFor="" className="form__label">Re-type Password</label>
        </div>

        <label htmlFor="gender">Select Gender</label>
        <select id="gender" name="gender" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {/* buttons */}
        <div className="btns" >

          <input type="button" name="back" id="back" value="Back" onClick={backbuttonclickhandler} />

          <input type="submit" className="form__button" value="Register" onClick={submitButtonClickHandler} />
        </div>
      </form>
    </div>
  );
}
export default NewRegistration;
