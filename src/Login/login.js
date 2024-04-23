import "./login.css";
function Login(props) {
  function backbuttonclickhandler(e) {
    e.preventDefault();
    // setPageno(0)
    props.loginBackButtonHandler();
  }

  return (
    <div className="login">
      <label>
        <b>User Name</b>
      </label>
      <input type="text" name="Uname" id="Uname" placeholder="Username" />
      <br />
      <br />
      <label>
        <b>Password</b>
      </label>
      <input type="Password" name="Pass" id="Pass" placeholder="Password" />
      <br />
      <br />
      <input type="button" name="log" id="log" value="Log In Here" />
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
