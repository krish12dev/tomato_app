import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../page/Home/Home";
import Cart from "../page/Cart/Cart";
import PlaceOrder from "../page/PlaceOrder/PlaceOrder";
import Footer from "../Components/Footer/Footer";
import ExploreMenu from "../Components/ExploreMenu/ExploreMenu";
import AppDownload from "../Components/AppDownload/AppDownload";

const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
        <Route path="/exploremenu" element={<ExploreMenu/>}/>
        <Route path="/appdownload" element={<AppDownload/>}/>
        {/* <Route path="/*" element={<Footer/>}/> */}
      </Routes>
    <Footer/>
    </>
  );
};

export default PageRouter;
