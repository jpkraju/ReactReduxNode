import "./App.css";
import LoginRegistration from "./Login/login_registration";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
// import SignUp from "./Teja/SignUp";

function App() {
  return (
    <div>
      <table className="table_sytle">
        <tr>
          <td>
            Company Name & Logo here ...{new Date().toLocaleString() + ""}
          </td>
          <td>
            <LoginRegistration />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
