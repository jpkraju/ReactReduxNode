import "./default.css";
// import "./Components/Assets/pf.jpg"
import LoginRegistration from "./Login/login_registration";
function Default(props) {
  function fn_usedata(udata) {
    // alert(udata.first_name);
    props.userData(udata);
  }
  return (
    <>
    <div className="container">
      <div className="wrapper">
        <div className="wrapperLeft">
        <img src="pf.png" alt="" className="companyLogo"></img>
        <div className="dateTime">{new Date().toLocaleString() + ""}</div>
        </div>
        <div className="wrapperRight">
        <LoginRegistration userData={fn_usedata}  />
        </div>
      </div>
    </div>
    </>
  );
}

export default Default;
