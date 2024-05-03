import { Outlet, Link } from "react-router-dom";
import "./layout.css"
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Layout = () => {
  return (
    <>
      <div className="Hcontainer">
        <div className="topbar">
          <div className="topbarLeft">
            <img src="pf.png" alt="" className="topbarLogo" />
            <span className="logoName"><i>Preeti</i>Fabtech</span>
          </div>
          {/* <AccountCircleIcon/> */}
        </div>
      </div>








      {/* <table style={{ border: "1px solid" }}>
        <tr>
          <td style={{ border: "1px solid" }}>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </nav>
          </td>
          <td style={{ border: "1px solid" }}>
            <Outlet />
          </td>
        </tr>
      </table> */}
    </>
  );
};
export default Layout;
