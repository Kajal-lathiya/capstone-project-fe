import { Avatar, Box, Grid, Typography } from "@mui/material";

import { Link } from "react-router-dom";

import bulb from "../assets/Electronics.jpg";
import house from "../assets/Home.jpg";
import toy from "../assets/toys.jpg";
import plant from "../assets/other.jpg";
import shirt from "../assets/clothes.jpg";
import beauty from "../assets/beauty.jpg";

const categoriesListStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: { md: "1rem", sm: "none" },
  cursor: "pointer",
  textAlign: "center",
  opacity: "60%",
  transition: "opacity 150ms",
  "&:hover": {
    opacity: "100%",
    border: "black",
    textDecoration: "bold",
  },
};

const categories = [
  { name: "Home and garden", image: house, color: "#9bd19d" },
  { name: "Electronics", image: bulb, color: "#9e004d" },
  { name: "Clothing", image: house, color: "#fbae42" },
  { name: "Health and beauty", image: beauty, color: "#5f9f06" },
  { name: "Toys", image: toy, color: "#fc665b" },
  { name: "Other", image: plant, color: "#afafaf" },
];

const CategoriesContainer = ({ onItemClick }) => {
  const handleClick = (category) => {
    onItemClick(category);
  };

  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Box sx={{ bgcolor: "#fff", margin: "0 auto" }} maxWidth="lg">
        <Grid container justifyContent="center">
          {categories.map((category) => (
            <Grid
              item
              key={category.name}
              xs={12}
              md={4}
              lg={2}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Box
                key={category.name}
                onClick={() => handleClick(category.name)}
                sx={categoriesListStyles}
              >
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <Avatar
                    variant="rounded"
                    sx={{ height: "60px", width: "auto" }}
                    src={category.image}
                    alt={category.name}
                  />
                </Box>
                <Typography variant="h6">{category.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CategoriesContainer;
