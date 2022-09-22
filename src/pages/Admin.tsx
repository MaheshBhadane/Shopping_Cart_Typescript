import React, { Dispatch, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCard } from "../redux/Actions/productActions";

export default function Admin() {
  const id: number = new Date().valueOf();
  const [image, setImage] = useState<string | ArrayBuffer | null | any>();
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [price, setPrice] = useState<number>();

  const dispatch: Dispatch<any> = useDispatch();

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    //filereader for an image
    let reader = new FileReader();
    if (e.target.files instanceof FileList) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setImage(reader.result);
      };
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addCard({
        id,
        title: title!,
        description: description!,
        image,
        price: price!,
      })
    );
    alert("Product added successfully...!!");
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 2,
        borderRadius: 2,
        p: 5,
        minWidth: 100,
        marginLeft: 20,
        marginRight: 20,
      }}
    >
      {" "}
      <Typography variant="h6" component="h2">
        Enter Product Details
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          style={{ marginTop: 10 }}
          accept="image/*"
          name="image"
          type="file"
          onChange={handleImage}
          required
        />
        <TextField
          type="text"
          name="title"
          label="Title"
          sx={{ marginTop: 2 }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          required
        />
        <TextField
          type="text"
          name="description"
          label="Description"
          sx={{ marginTop: 2 }}
          multiline
          rows={3}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
          required
        />
        <TextField
          type="number"
          name="price"
          label="Price"
          sx={{ marginTop: 2 }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPrice(parseInt(e.target.value))
          }
          required
        />
        <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
          Add Card
        </Button>
      </form>
    </Box>
  );
}
