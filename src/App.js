import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Default from "./default";
import Reports from "./pages/Reports";
import Inventory from "./pages/Inventory";
import NoPage from "./pages/Nopage";
import Products from "./pages/Products";
import Layout from "./pages/Layout";
import User from "./pages/user";
import ProductItem from "./pages/ProductItem";

function App() {
  const [islogged, setIslogged] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  function fn_usedata(udata) {
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
              <Route path="reports" element={<Reports />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="products" element={<Products />} />
              <Route path="/productItem/:id" element={<ProductItem />} />

              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
