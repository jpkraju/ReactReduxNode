import "./App.css";
import LoginRegistration from "./Login/login_registration";

function App() {
  return (
    <div>
      <table className="table_sytle">
        <tr>
          <td>
            Company Name & Logo here will be placed here {new Date().toLocaleString() + ""}
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
