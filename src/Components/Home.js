import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getSearchAPI } from "../redux/actions";
import { PRODUCT_ACTION } from "../redux/actions/productAction";
import "primeflex/primeflex.css";
import { Card } from "primereact/card";
import { Carousel } from "primereact/carousel";
// import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { Tag } from "primereact/tag";
import undraw_connection from "../assets/undraw_connection.jpg";
import { Button, Stack, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import MyNavbar from "./MyNavbar";

const welcomeDivStyles = {
  display: { xs: "flex" },
  flexGrow: 1,
  fontFamily: "monospace",
  fontWeight: 700,
  justifyContent: "center",
  color: "inherit",
  textDecoration: "none"
};

function Home() {
  const dispatch = useDispatch();
  const productArray = useSelector((state) => state.product.productData);
  useEffect(() => {
    dispatch(getSearchAPI());
    dispatch(PRODUCT_ACTION());
  }, []);
  const currentUser = "";
  const welcomeHeader = currentUser ? (
    <>
      <Typography
        variant="h4"
        noWrap
        component="div"
        gutterBottom
        sx={welcomeDivStyles}
      >
        Hello {currentUser.name},<br /> Welcome to onlineMarketplace!!
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Link to="/product/add">
          <Button
            // color="warning"
            // variant="outlined"
            sx={{
              color: "white",
              textDecoration: "none",
              bgcolor: ["#12343b"],

              borderRadius: "50px",
              padding: "1rem",
              marginBottom: "1rem",
              width: "200px",
              fontWeight: "bold"
            }}
          >
            Add product
          </Button>
        </Link>
        <Link to="/info">
          <Typography>Check how it works</Typography>
        </Link>
      </Box>
    </>
  ) : (
    <>
      <Typography
        variant="h4"
        noWrap
        component="div"
        gutterBottom
        sx={welcomeDivStyles}
      >
        {" "}
        <br></br>
        Welcome to onlineMarketplace!!
      </Typography>
      {/* <Typography variant="body2" sx={{ textDecoration: "justify" }}>
        Swapp is a mobile application that aims to promote sustainability and
        community building by allowing users to swap products in various
        categories while also providing a platform for social interaction and
        engagement.
      </Typography> */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Link to="/register">
          <Button
            // color="warning"
            // variant="outlined"
            sx={{
              color: "white",
              textDecoration: "none",
              bgcolor: ["#12343b"],
              borderRadius: "50px",
              padding: "1rem",
              marginBottom: "1rem",
              width: "200px",
              fontWeight: "bold"
            }}
          >
            Sign Up
          </Button>
        </Link>

        <Link to="/info">
          <Typography>Check how it works</Typography>
        </Link>
      </Box>
    </>
  );

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1
    }
  ];

  const productTemplate = (product) => {
    return (
      <div className="border-1 surface-border border-round shadow-2 m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={product.thumbnail}
            alt={product.name}
            className={`w-6 shadow-2 ${styles.imageSize}`}
          />
        </div>
        <div>
          <h4 className="mb-1">{product.name}</h4>
          <h6 className="mt-0 mb-3">${product.price}</h6>
          <Tag
            value={product.inventoryStatus}
            severity={getSeverity(product)}
          ></Tag>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button icon="pi pi-search" className="p-button p-button-rounded" />
            <Button
              icon="pi pi-star-fill"
              className="p-button-success p-button-rounded"
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.App}>
      {/* <MyNavbar /> */}
      <Container
        maxWidth
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          bgcolor: "white",
          marginTop: "0"
        }}
      >
        {" "}
        <Box p={"1rem"}>{welcomeHeader}</Box>
        <Box>
          <img className="mainGraphic" alt="" src={undraw_connection} />
        </Box>
      </Container>
      <div className="card m-4">
        <div className="card mt-4">
          <Carousel
            value={productArray}
            numVisible={3}
            numScroll={3}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
          />
        </div>
      </div>
      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <h3>About Us</h3>
            <p>
              We are a team of passionate developers who love building awesome
              products.
            </p>
          </div>
          <div className={styles.footerColumn}>
            <h3>Contact Us</h3>
            <ul>
              <li>Email: kajalbodarya77@gmail.com</li>
              <li>Phone: +1 555-555-5555</li>
              <li>Address: 123 Main St, London UK</li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
