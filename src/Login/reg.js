import "./login.css";

function NewRegistration(props) {
  function backbuttonclickhandler(e) {
    e.preventDefault();
    // setPageno(0)
    props.loginBackButtonHandler();
  }

  return (
    <div className="login">
      <label>
        <b>First Name</b>
      </label>
      <input type="text" name="Uname" id="Uname" placeholder="First Name" />
      <br />
      <br />
      <label>
        <b>Last Name</b>
      </label>
      <input type="text" name="Pass" id="Pass" placeholder="Last Name" />
      <br />
      <br />
      <label>
        <b>Email@gmail</b>
      </label>
      <input type="text" name="Uname" id="Uname" placeholder="Email" />
      <br />
      <br />
      <label>
        <b>Mobile No</b>
      </label>
      <input type="text" name="Uname" id="Uname" placeholder="Mobile No" />
      <br />
      <br />

      <label>
        <b>Password</b>
      </label>
      <input type="Password" name="Pass" id="Pass" placeholder="Password" />
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
      />
      <br />
      <br />
      <label for="gender">Select Gender</label>
      <select id="gender" name="gender" required>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <br />
      <br />

      <input type="button" name="log" id="log" value="Register" />
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
