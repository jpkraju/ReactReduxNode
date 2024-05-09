import "./layout.css";
import Topbar from "../Components/topbar/Topbar"
import Sidebar from "../Components/sidebar/Sidebar"
import Feed from "../Components/feed/Feed"
import Footer from "../Components/footer/Footer"

const Layout = () => {
  return (
    <>
    <Topbar/>
    <div className="homecontainer">
      <Sidebar />
      <Feed/>
    </div>
    <Footer/>
    </>
  );
};
export default Layout;
