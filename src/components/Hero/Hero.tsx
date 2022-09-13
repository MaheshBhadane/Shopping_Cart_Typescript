import React from "react";
import Hero1 from "../../assets/Hero1.png";
import { Grid } from "@mui/material";

const Hero = () => {
  return (
    <>
      <Grid container marginY={2} marginX={3}>
        <img src={Hero1} alt="" width="1470" height="500" />
      </Grid>
    </>
  );
};
export default Hero;
