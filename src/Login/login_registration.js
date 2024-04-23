import React, { useState } from "react";
import Login from "./login";
import NewRegistration from "./reg"

function LoginRegistration() {
  const [pageno, setPageno] = useState(0);

  function loginButtonClick(e) {
    e.preventDefault();
    setPageno(1);
  }

  // function RegistrationButtonClick(e) {
  //   e.preventDefault();
  //   setPageno(2);
  // }

  function fn_loginBackButtonHandler123() {
    setPageno(0);
  }

  return (
    <>
      {/* Landing page */}
      {pageno === 0 && (
        <div>
          <h3>Are you existing user ?</h3>{" "}
          <button onClick={() => setPageno(1)}>Login</button>
          <br />
          <h3>New User :</h3>
          <button
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
          <Login loginBackButtonHandler={fn_loginBackButtonHandler123} />
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
