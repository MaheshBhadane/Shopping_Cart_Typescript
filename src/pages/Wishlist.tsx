import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Cards from "../components/Cards/card";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";

//Interface Type Define
interface WishlistType {
  setProduct: React.Dispatch<React.SetStateAction<any>>;
}

export default function Wishlist(props: WishlistType) {
  const { wishlist } = useSelector((state: RootStore) => state.products);
  return (
    <Box sx={{ padding: 3 }}>
      {wishlist.length ? (
        <Grid container justifyContent="center" spacing={3}>
          {wishlist.map((product) => (
            <Cards
              product={product}
              key={product.id}
              setProduct={props.setProduct}
            />
          ))}
        </Grid>
      ) : (
        <Typography variant="h2" textAlign="center">
          Wishlist is empty....!!
        </Typography>
      )}
    </Box>
  );
}
