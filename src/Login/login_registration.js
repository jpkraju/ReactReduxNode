import React, { useState } from "react";
import Login from "./login";
import "./login.css"
import NewRegistration from "./reg"

function LoginRegistration(props) {
  const [pageno, setPageno] = useState(0);

  function fn_loginBackButtonHandler123() {
    setPageno(0);
  }

  function fn_usedata(udata) {
    // alert(udata.first_name);
    props.userData(udata);
  }

  return (
    <>
      {/* Landing page */}
      {pageno === 0 && (
        <div className="login">
          <h3 id="lbl">Are you existing user ?</h3>{" "}
          <button id="log" onClick={() => setPageno(1)}>Login</button>
          <br />
          <h3 id="lbl">New User :</h3>
          <button id="log"
            onClick={() => {
              setPageno(2);
              console.log(">>>>>>>>>>>>> hi there >>>>>>>>>");
            }}
          >
            Register
          </button>
        </div>
      )}

      {/* Login page */}
      {pageno === 1 && (
        <div>
          <Login userData={fn_usedata} loginBackButtonHandler={fn_loginBackButtonHandler123} />
        </div>
      )}

      {/* Registration page */}
      {pageno === 2 && (
        <div>
          <NewRegistration loginBackButtonHandler = {fn_loginBackButtonHandler123} />
          {/* Registration{" "}
          <button onClick={fn_loginBackButtonHandler123}>Back</button> */}
        </div>
      )}
    </>
  );
}

export default LoginRegistration;
