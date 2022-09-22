import React, { Dispatch } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import {
  deleteCard,
  setProductCart,
  setProductWishlist,
} from "../../redux/Actions/productActions";
import { RootStore } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../routes";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";

//Interface Type Define
interface CardType {
  product: ProductType;
  setProduct: React.Dispatch<React.SetStateAction<any>>;
}

export default function Cards(props: CardType) {
  const { cart, wishlist } = useSelector((state: RootStore) => state.products);

  let navigate = useNavigate();

  const dispatch: Dispatch<any> = useDispatch();

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

  const handleDelete = (id: number) => {
    dispatch(deleteCard(id));
  };

  const handleOnClick = (p: ProductType) => {
    navigate(`/shop/${p.id}`);
    props.setProduct(p);
  };

  const handleWishlist = (p: ProductType) => {
    dispatch(setProductWishlist(p));
  };

  const handleCart = (p: ProductType) => {
    dispatch(setProductCart(p));
  };

  return (
    <Grid item key={props.product.id}>
      <Button
        startIcon={<DeleteIcon />}
        size="small"
        color="secondary"
        onClick={() => handleDelete(props.product.id)}
      />
      <Card sx={{ maxWidth: 300 }}>
        <Box
          onClick={() => handleOnClick(props.product)}
          sx={{ cursor: "pointer" }}
        >
          <CardMedia
            component="img"
            src={props.product.image}
            sx={{ height: 200, objectFit: "contain" }}
          ></CardMedia>
          <CardContent>
            <Typography variant="h6">
              {props.product.title.substring(0, 20)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.product.description.substring(0, 50)}...
            </Typography>
            <Typography mt={2} variant="h6" color="secondary">
              ${props.product.price}
            </Typography>
          </CardContent>
        </Box>

        <CardActions>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            onClick={() => handleWishlist(props.product)}
          >
            {inWishlist(props.product?.id!)
              ? "Remove from wishlist"
              : "Add to Wishlist"}
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            onClick={() => handleCart(props.product)}
          >
            {inCart(props.product?.id!) ? "Remove from cart" : "Add to cart"}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
