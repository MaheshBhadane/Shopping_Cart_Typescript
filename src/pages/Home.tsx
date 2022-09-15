import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Cards from "../components/Cards/Card";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import Hero from "../components/Hero/Hero";
import { Link as RouterLink } from "react-router-dom";

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
          <Typography variant="h5" color="error" textAlign="center">
            Something went wrong!
          </Typography>
        ) : loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress size={50} />
          </Box>
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
