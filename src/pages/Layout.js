import { Outlet, Link } from "react-router-dom";
import "./layout.css";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Layout = () => {
  return (
    <>
      {/* <div className="Hcontainer">
        <div className="topbar">
          <div className="topbarLeft">
            <img src="pf.png" alt="" className="topbarLogo" />
          </div>
          <div className="topbarRight">
            user
          </div>
        </div>
        <div className="feed">
          <div className="sidebar">
            <div className="sidebarWrapper">
              <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/products">Products</Link></li>
              </ul>
            </div>
            <div className="Content">
              <Outlet />
            </div>
          </div>
        </div>
      </div> */}

      <table style={{ border: "1px solid" }}>
        <tr>
          <td colspan="2">
            <div className="topbar">
              <div className="topbarLeft">
                <img src="pf.png" alt="" className="topbarLogo" />
              </div>
              <div className="topbarRight">user</div>
            </div>
          </td>
        </tr>
        <tr>
          <td style={{ border: "1px solid" }}>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/contact">Inventory</Link>
                </li>
                <li>
                  <Link to="/blogs">Reports</Link>
                </li>
              </ul>
            </nav>
          </td>
          <td style={{ border: "1px solid" }}>
            <div style={{ height: "100%" }}>
              <Outlet />
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div className="topbar">
              @All Rights are reserved to Preetifab tech
            </div>
          </td>
        </tr>
      </table>
    </>
  );
};
export default Layout;
