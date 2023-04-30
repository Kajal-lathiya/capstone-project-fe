import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MyNavbar from "./MyNavbar";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoriesContainer from "./CategoriesContainer";
import Breadcrumbs from "./Breadcrumbs";
import { GET_PRODUCTS_ACTION } from "../redux/actions/adminAction";
import { useDispatch, useSelector } from "react-redux";

const ProductsPage = () => {
  const dispatch = useDispatch();

  const productArray = useSelector((state) => state.admin.productsData);

  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);
  const [selectedCatProducts, setSelectedCatProducts] = useState([]);

  useEffect(() => {
    dispatch(GET_PRODUCTS_ACTION());
  }, []);

  useEffect(() => {
    setSelectedCategory(categoryFromURL);
  }, [categoryFromURL]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const products = productArray.filter(
      (product) => product.category === category
    );
    setSelectedCatProducts(products);
    setSearchParams({ category });
  };

  return (
    <>
      <MyNavbar />
      <Breadcrumbs selectedCategory={selectedCategory} />
      <CategoriesContainer onItemClick={handleCategoryClick} />
      <SearchBar />
      <Box
        paddingY="2rem"
        maxWidth="lg"
        display="flex"
        alignItems="center"
        margin="0 auto"
      >
        <Box marginX="2rem">
          <Grid
            container
            spacing={4}
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            {selectedCatProducts.length !== 0
              ? selectedCatProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              : productArray.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ProductsPage;
