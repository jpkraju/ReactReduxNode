import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <table style={{ border: "1px solid" }}>
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
      </table>
    </>
  );
};
export default Layout;
