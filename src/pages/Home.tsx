import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Cards from "../components/Cards/card";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import Hero from "../components/Hero/hero";
import { Link as RouterLink } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

//Interface Type Define
interface ProductType {
  setProduct: React.Dispatch<React.SetStateAction<any>>;
}

export default function Home(props: ProductType) {
  const { products, loading, error } = useSelector(
    (state: RootStore) => state.products
  );

  return (
    <>
      <Hero />
      <Grid container>
        <Grid item marginLeft={160} padding={3}>
          <Button variant="outlined" component={RouterLink} to="/admin">
            Add new product
          </Button>
        </Grid>
        {error ? (
          <Typography
            marginLeft={85}
            variant="h5"
            color="error"
            textAlign="center"
          >
            Something went wrong!
          </Typography>
        ) : loading ? (
          <LinearProgress />
        ) : (
          <Grid container justifyContent="center" spacing={3}>
            {products?.map((product) => (
              <Cards
                product={product}
                key={product.id}
                setProduct={props.setProduct}
              />
            ))}
          </Grid>
        )}
      </Grid>
    </>
  );
}
