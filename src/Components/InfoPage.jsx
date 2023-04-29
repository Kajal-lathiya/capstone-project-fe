import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
// import graphic from "../assets/undraw_Dreamer_re_9tua.png";
import graphic from "../assets/undraw_dream.jpg";
import styles from "./Home.module.css";

const InfoPage = () => {
  return (
    <>
      <Grid container sx={{ padding: "2rem" }}>
        <Grid item xs={12}>
          <div
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              textAlign: "center"
            }}
          >
            <h1
              sx={{
                fontSize: "3rem",
                fontWeight: "bold"
              }}
            >
              Welcome to our onlineMarketplace!?
            </h1>
            <Typography variant="body2">
              Our website is designed to make your shopping experience easy and
              enjoyable. Use our search bar to find specific items, or browse
              through our categories to discover new and exciting products. We
              also offer personalized recommendations based on your shopping
              history and preferences, making it easier than ever to find the
              perfect item.
            </Typography>{" "}
          </div>
        </Grid>
        <Grid item xs={12}>
          <div
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              textAlign: "center"
            }}
          >
            <h4
              sx={{
                fontSize: "3rem",
                fontWeight: "bold"
              }}
            >
              onlineMarketplace primary features:
            </h4>
            <Typography variant="body2">
              Buyers want to have access to a wide range of products to choose
              from a gallery of products within the six main categories.
            </Typography>{" "}
          </div>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body2">
            You can search for products or services using keywords, categories,
            or filters that help you find what you're looking for quickly.{" "}
            Each product or service should have a detailed listing with
            photos, descriptions, reviews, and pricing information. You
            can add items to your cart and review your total before checking
            out. The marketplace should offer multiple payment options,
            including credit card, debit card, PayPal, and other payment
            gateways.<br></br>You can save products or services that you're
            interested in buying later.
          </Typography>{" "}
        </Grid>
        <Grid item xs={12}>
          <div
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              textAlign: "center"
            }}
          >
            <h4
              sx={{
                fontSize: "3rem",
                fontWeight: "bold"
              }}
            >
              Now, lets start swapping!!
            </h4>
          </div>
        </Grid>
      </Grid>

      <Container
        maxWidth
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "20px"
        }}
      >
        <img className="mainGraphic" alt="" src={graphic} />
      </Container>
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
    </>
  );
};

export default InfoPage;
