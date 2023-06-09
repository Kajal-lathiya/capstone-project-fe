import {
  Button,
  TextField,
  Typography,
  MenuItem,
  Snackbar,
  Alert
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MyNavbar from "./MyNavbar";
import {
  ADD_PRODUCT_ACTION,
  ADD_PRODUCT_IMAGE_ACTION
} from "../redux/actions/adminAction";
const errorMessages = {
  name: "Product name should not be empty.",
  description: "Description field should be at least 50 characters long."
};

const categories = [
  "Home and garden",
  "Electronics",
  "Clothing",
  "Health and beauty",
  "Toys",
  "Other"
];

const conditions = ["Used", "Slightly Used", "New"];
const AddProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setDescription] = useState("");
  // const [productImg, setProductImg] = useState({});
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");

  const [open, setOpen] = useState(false);

  const [errors, setErrors] = useState({
    productName: false,
    productDescription: false
  });

  const BE_URL = process.env.REACT_APP_BE_DEV_URL;
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  // const productImage = useSelector((state) => state.product.productImage);
  const productImage = "";
  const clearTheForm = function () {
    setProductName("");
    setDescription("");
    setCategory("");
    setCondition("");
    setPrice("");
    setFile(null);
    handleClick();
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event, userId) => {
    event.preventDefault();
    const product = {
      name: productName,
      description: productDescription,
      price: price,
      category: category,
      condition: condition,
      owner: userId
    };
    await dispatch(ADD_PRODUCT_ACTION(product))
      .then((response) => {
        clearTheForm();
        console.log("response", response);
        let productId = response._id;
        if (productId) {
          if (file) {
            dispatch(ADD_PRODUCT_IMAGE_ACTION(productId, file));
          }
        }
      })
      .catch((err) => console.log(err));
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <MyNavbar />
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly"
        }}
      >
        <Box
          component="form"
          onSubmit={(event) => handleSubmit(event, currentUser.user._id)}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "80%"
          }}
        >
          <Stack spacing={4}>
            <Typography
              sx={{ marginTop: "1em", textAlign: "center" }}
              variant="h5"
            >
              add a new product:
            </Typography>
            <TextField
              error={errors.productName}
              required
              id="productName"
              label="name"
              variant="filled"
              value={productName}
              helperText={errors.productName ? errorMessages.productName : ""}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
              inputProps={{ maxLength: 70 }}
            ></TextField>
            <TextField
              error={errors.productDescription}
              required
              id="productDescription"
              label="description"
              value={productDescription}
              variant="filled"
              multiline
              helperText={
                errors.productDescription
                  ? errorMessages.productDescription
                  : ""
              }
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></TextField>
            <TextField
              error={errors.productName}
              required
              id="productPrice"
              label="price"
              type="number"
              variant="filled"
              value={price}
              helperText={errors.price ? errorMessages.price : ""}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              inputProps={{ maxLength: 70 }}
            ></TextField>
            <TextField
              required
              select
              label="Select product category"
              variant="filled"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Select product condition"
              variant="filled"
              value={condition}
              onChange={(e) => {
                setCondition(e.target.value);
              }}
            >
              {" "}
              {conditions.map((condition) => (
                <MenuItem key={condition} value={condition}>
                  {condition}
                </MenuItem>
              ))}
            </TextField>
            <Button type="submit" variant="outlined">
              add product
            </Button>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert severity="success" sx={{ width: "100%" }}>
                Product successfully added!
              </Alert>
            </Snackbar>
          </Stack>
        </Box>
        <Box sx={{ marginX: "2rem" }}>
          <input
            accept="image/*"
            id="addPicture"
            className="file-input"
            single
            type="file"
            onChange={handleFileChange}
          ></input>
          <label htmlFor="addPicture">
            <Box
              sx={{
                "&:hover": {
                  opacity: "40%"
                }
              }}
            >
              <img
                style={{ maxWidth: "300px", maxHeight: "300px" }}
                alt="product"
                src={
                  productImage
                    ? URL.createObjectURL(productImage)
                    : "https://via.placeholder.com/300x300"
                }
              />
            </Box>
          </label>
        </Box>
      </Container>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginY: "1em" }}
      ></Box>
    </>
  );
};

export default AddProductForm;
