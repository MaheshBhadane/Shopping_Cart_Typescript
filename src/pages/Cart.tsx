import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Cards from "../components/Cards/card";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";

//Interface Type Define
interface CartType {
  setProduct: React.Dispatch<React.SetStateAction<any>>;
}

export default function Cart(props: CartType) {
  const { cart } = useSelector((state: RootStore) => state.products);
  return (
    <Box sx={{ padding: 3 }}>
      {cart.length ? (
        <Grid container justifyContent="center" spacing={3}>
          {cart.map((product) => (
            <Cards
              product={product}
              key={product.id}
              setProduct={props.setProduct}
            />
          ))}
        </Grid>
      ) : (
        <Typography variant="h2" textAlign="center">
          Cart is empty...!!
        </Typography>
      )}
    </Box>
  );
}
