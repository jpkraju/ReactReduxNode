import "./App.css";
import LoginRegistration from "./Login/login_registration";

function Default(props) {
  function fn_usedata(udata) {
    // alert(udata.first_name);
    props.userData(udata);
  }
  return (
    <>
      <table className="table_sytle">
        <tr>
          <td>
            Company Name & Logo here will be placed here{" "}
            {new Date().toLocaleString() + ""}
          </td>
          <td>
            <LoginRegistration userData={fn_usedata}  />
          </td>
        </tr>
      </table>
    </>
  );
}

export default Default;
