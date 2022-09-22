import { Box, Button, Grid, Typography } from "@mui/material";
import React, { Dispatch } from "react";
import { ProductType } from "../components/routes";
import { RootStore } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductCart,
  setProductWishlist,
} from "../redux/Actions/productActions";

//Interface Type Define
interface ProductPropType {
  product?: ProductType;
}

export default function CardDetails(props: ProductPropType) {
  const { cart, wishlist } = useSelector((state: RootStore) => state.products);

  const dispatch: Dispatch<any> = useDispatch();

  const handleWishlist = (p?: ProductType) => {
    dispatch(setProductWishlist(p!));
  };

  const handleCart = (p?: ProductType) => {
    dispatch(setProductCart(p!));
  };
  
  //Check product is in wishlist or not
  const inWishlist = (id: number): boolean => {
    if (wishlist.find((product) => product.id === id)) {
      return true;
    } else return false;
  };

  //Check product is in cart or not
  const inCart = (id: number): boolean => {
    if (cart.find((product) => product.id === id)) {
      return true;
    } else return false;
  };

  return (
    <Box sx={{ padding: 5 }}>
      <Grid item>
        <img
          src={props.product?.image}
          alt="product"
          style={{ width: "10%", objectFit: "contain" }}
        />
      </Grid>
      <Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h5">{props.product?.title}</Typography>
          <Typography mt={1} variant="h5" color="secondary">
            ${props.product?.price}
          </Typography>
          <Typography mt={2} mb={3} variant="body2">
            {props.product?.description}
          </Typography>

          <Button
            variant="outlined"
            onClick={() => handleWishlist(props.product)}
          >
            {inWishlist(props.product?.id!)
              ? "Remove from wishlist"
              : "Add to Wishlist"}
          </Button>
          <Button variant="outlined" onClick={() => handleCart(props.product)}>
            {inCart(props.product?.id!) ? "Remove from cart" : "Add to cart"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
