import {
  Avatar,
  Typography,
  Button,
  Grid,
  Paper
} from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MyNavbar from "./MyNavbar";
import EditProfileModal from "./EditProfileModal";
import { GET_PROFILE_ACTION } from "../redux/actions/userAction";
import { useDispatch } from "react-redux";

const UserProfilePage = () => {
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_PROFILE_ACTION());
  }, []);

  return (
    <>
      <MyNavbar />
      <Grid
        container
        justifyContent="center"
        sx={{ marginTop: 10, marginBottom: 1 }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
            <Avatar
              sx={{ width: 100, height: 100, margin: "auto" }}
              src={currentUser.avatar}
            />
            <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 1 }}>
              {currentUser.firstName} {currentUser.lastName}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              {currentUser.email}
            </Typography>
            <Button
              variant="contained"
              sx={{ marginBottom: 2 }}
              onClick={() => {
                setShowEditProfileModal(true);
              }}
            >
              Edit Profile
            </Button>
            <EditProfileModal
              show={showEditProfileModal}
              close={() => setShowEditProfileModal(false)}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default UserProfilePage;
