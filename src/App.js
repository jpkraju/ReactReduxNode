import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
// import "./App.css";
import Default from "./default";
// import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/Nopage";
import ProductsList from "./pages/products/ProductsList";
import Layout from "./pages/Layout";
import User from "./pages/user";

function App() {
  const [islogged, setIslogged] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  function fn_usedata(udata) {
    // alert(udata.last_name);
    setLoggedInUser(udata);
    setIslogged(true);
  }

  function fn_logout() {
    setIslogged(false);
  }

  return (
    <>
      {!islogged ? (
        <Default userData={fn_usedata} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={<User userData={loggedInUser} logout={fn_logout} />}
              />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="products" element={<ProductsList />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
