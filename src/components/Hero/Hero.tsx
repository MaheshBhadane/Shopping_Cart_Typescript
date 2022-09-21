import React from "react";
import Hero1 from "../../assets/Hero1.png";
import { CardMedia, Grid } from "@mui/material";

const Hero = () => {
  return (
    <>
      <Grid container marginY={2} marginX={3}>
        <CardMedia
          style={{ height: "500px", width: "1470px" }}
          component="img"
          image={Hero1}
          title="Hero Image"
          alt="Pancakes"
        />
        <div
          style={{
            position: "absolute",
            color: "white",
            top: 50,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <h1>Shopping Card</h1>{" "}
        </div>
      </Grid>
    </>
  );
};
export default Hero;
