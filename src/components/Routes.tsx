import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import CardDetails from "../pages/CardDetails";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Admin from "../pages/Admin";
import { Typography } from "@mui/material";
import Error from "../pages/Error";

//Interface Type DefineSS
export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const ProjectRoutes = () => {
  const [product, setProduct] = useState<ProductType>();

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setProduct={setProduct} />} />
          <Route path="/shop" element={<Shop setProduct={setProduct} />} />
          <Route path="/shop/:id" element={<CardDetails product={product} />} />
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
    </div>
  );
};
