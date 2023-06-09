import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MyNavbar from "./MyNavbar";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoriesContainer from "./CategoriesContainer";
import Breadcrumbs from "./Breadcrumbs";
import {
  GET_PRODUCTS_ACTION,
  CATEGORY_WISE_PRODUCTS_ACTION,
  SEARCH_PRODUCTS_ACTION
} from "../redux/actions/adminAction";
import { useDispatch, useSelector } from "react-redux";

const ProductsPage = () => {
  const dispatch = useDispatch();

  const productArray = useSelector((state) => state.admin.productsData);
  const catwiseProductArray = useSelector(
    (state) => state.admin.catwiseProducts
  );
  const searchProductArray = useSelector(
    (state) => state.admin.searchProducts
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);
  const [catWiseProduct, setCatWiseProduct] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const [searchProduct, setSearchProduct] = useState(false);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    dispatch(GET_PRODUCTS_ACTION());
  }, []);

  useEffect(() => {
    setSelectedCategory(categoryFromURL);
  }, [categoryFromURL]);

  const handleCategoryClick = (category) => {
    setCategoryName(category);
    dispatch(CATEGORY_WISE_PRODUCTS_ACTION(category));
    setSearchProduct(false);
    setCatWiseProduct(true);
  };

  const handleSearchClick = (name) => {
    setProductName(name);
    dispatch(SEARCH_PRODUCTS_ACTION(name));
    setCatWiseProduct(false);
    setSearchProduct(true);
  };

  return (
    <>
      <MyNavbar />
      <Breadcrumbs selectedCategory={selectedCategory} />
      <CategoriesContainer onItemClick={handleCategoryClick} />
      <SearchBar onClick={handleSearchClick} />
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
            {catWiseProduct === true
              ? catwiseProductArray.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    categoryName={categoryName}
                  />
                ))
              : searchProduct === true
              ? searchProductArray.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    productName={productName}
                  />
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
