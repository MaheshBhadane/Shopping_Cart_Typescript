import React, { Dispatch, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/CardDetails";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/actions/ProductActions";
import Error from "./pages/Error";

export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

function App() {
  const [product, setProduct] = useState<ProductType>();
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(getProducts());
    })();
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setProduct={setProduct} />} />
          <Route path="/shop" element={<Shop setProduct={setProduct} />} />
          <Route
            path="/shop/:id"
            element={<ProductDetails product={product} />}
          />

          <Route
            path="/wishlist"
            element={<Wishlist setProduct={setProduct} />}
          />

          <Route path="/cart" element={<Cart setProduct={setProduct} />} />

          <Route path="/admin" element={<Admin />} />
          <Route
            path="*"
            element={
              <Typography variant="h5" py={3} textAlign="center">
                <Error />
              </Typography>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
