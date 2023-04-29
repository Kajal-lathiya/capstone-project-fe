import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AllInclusive } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "../redux/reducers/auth/userAuthSlice";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GET_PROFILE_ACTION } from "../redux/actions/userAction";

// import { productActions } from "../redux/reducers/products/productsSlice";
import {
  Badge,
  MenuItem,
  Tooltip,
  Button,
  Avatar,
  IconButton,
  Typography,
  AppBar,
  Box,
  Toolbar,
  Menu,
  Container
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./MyNavbar.module.css";

// import { messagesActions } from "../redux/reducers/messages/messagesSlice";

const navItemStyle = {
  "&:hover": {
    backgroundColor: "transparent",
    textShadow: "1px 1px 5px rgba(255, 255, 255, 0.5);"
  }
};

function MyNavbar() {
  const currentUser = useSelector((state) => state.user.currentUser);
  // const cartCount = useSelector((state) => state.cart.cartData.length);
  const cartCount = 2;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpenMessages = () => {
    // dispatch(messagesActions.openMessageList());
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    console.log("handleLogout");
    let clear = localStorage.clear();
    let userToken = localStorage.getItem("USER_TOKEN");
    let userId = localStorage.getItem("CURRENT_USER");
    dispatch(GET_PROFILE_ACTION());
    console.log("clear-->", userToken, userId);
    navigate("/login");
  };

  const navigateCart = () => {
    // if (cartCount > 0) {
    //   navigate("/cart");
    // }
  };
  return (
    <AppBar
      className={classes.navbar}
      position="sticky"
      sx={{ bgcolor: ["#12343b"], color: "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <div className={classes.logoContainer}>
              <img
                src={
                  "https://tse3.mm.bing.net/th?id=OIP.OCUP9yojSLsGZPJz9aGNsAHaCR&pid=Api&P=0"
                }
                alt="Onlline Marketplace"
                className={classes.logoSize}
              />
            </div>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              className={classes.smallToolbar}
              id="menu-appbar"
              anchorEl={anchorElNav}
              disableScrollLock={true}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  <Typography textAlign="center">Home</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  <Typography textAlign="center">Products</Typography>
                </NavLink>
              </MenuItem>
              {/* <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  to="/community"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {" "}
                  <Typography textAlign="center">Community</Typography>
                </NavLink>
              </MenuItem> */}
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {" "}
                  <Typography textAlign="center">Contact</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink
                  to="/info"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {" "}
                  <Typography textAlign="center">Our Goals</Typography>
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem
              onClick={handleCloseNavMenu}
              disableRipple={true}
              disableTouchRipple={true}
              sx={navItemStyle}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <Typography textAlign="center">Home</Typography>
              </NavLink>
            </MenuItem>
            <MenuItem
              onClick={handleCloseNavMenu}
              disableRipple={true}
              disableTouchRipple={true}
              sx={navItemStyle}
            >
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <Typography textAlign="center">Products</Typography>
              </NavLink>
            </MenuItem>
            {/* <MenuItem
              onClick={handleCloseNavMenu}
              disableRipple={true}
              disableTouchRipple={true}
              sx={navItemStyle}
            >
              <NavLink
                to="/community"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                {" "}
                <Typography textAlign="center">Community</Typography>
              </NavLink>
            </MenuItem> */}
            <MenuItem
              onClick={handleCloseNavMenu}
              disableRipple={true}
              disableTouchRipple={true}
              sx={navItemStyle}
            >
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                {" "}
                <Typography textAlign="center">Contact</Typography>
              </NavLink>
            </MenuItem>
            <MenuItem
              onClick={handleCloseNavMenu}
              disableRipple={true}
              disableTouchRipple={true}
              sx={navItemStyle}
            >
              <NavLink
                to="/info"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                {" "}
                <Typography textAlign="center">Our Goals</Typography>
              </NavLink>
            </MenuItem>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {currentUser && currentUser.user ? (
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <div onClick={navigateCart}>
                  <i
                    className={`pi pi-shopping-cart p-overlay-badge ${classes.cartIcon}`}
                    style={{ fontSize: "2rem" }}
                  >
                    {/* {cartCount > 0 ? ( */}
                    <Badge
                      value={cartCount}
                      className={classes.badgeContent}
                    ></Badge>
                    {/* ) : (
                      ""
                    )} */}
                  </i>
                </div>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 1 }}>
                    <Avatar
                      alt=""
                      src={currentUser.user.avatar}
                      sx={{
                        border: "0.1px solid grey"
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            ) : (
              <Link to="/login">
                <Button
                  className={classes.btnStyle}
                  color="warning"
                  variant="contained"
                >
                  LOGIN
                </Button>
              </Link>
            )}

            <Menu
              className={classes.smallToolbar}
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              disableScrollLock
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link to="/user">
                  <Typography textAlign="center">My profile</Typography>
                </Link>
              </MenuItem>
              <MenuItem component="div" onClick={handleCloseUserMenu}>
                <Link to="/user_edit">
                  <Typography textAlign="center">Profile settings</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link to="/">
                  <Typography onClick={handleLogout} textAlign="center">
                    Logout
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyNavbar;
