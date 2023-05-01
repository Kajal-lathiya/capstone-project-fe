import { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import "./Editprofilestyle.css";
import { useDispatch, useSelector } from "react-redux";
import {
  UPDATE_USERPROFILE_ACTION,
  UPLOAD_USER_PROFILEPIC_ACTION,
  GET_PROFILE_ACTION
} from "../redux/actions/userAction";

const EditProfileModal = ({ show, close }) => {
  const currentUser = useSelector((state) => state.user.currentUser.user);
  const [userInfo, setUserInfo] = useState(currentUser);

  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onChangeHandler = (e, fieldToSet) => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      [fieldToSet]: e.target.value
    }));
  };

  const editProfileInfo = (event) => {
    event.preventDefault();
    const { firstName, lastName } = userInfo;
    console.log("firstName, lastName, email-->", firstName, lastName);
    let user = {
      firstName: firstName,
      lastName: lastName
    };
    dispatch(UPDATE_USERPROFILE_ACTION(user))
      .then((response) => {
        console.log("update response", response);
        if (file) {
          dispatch(UPLOAD_USER_PROFILEPIC_ACTION(file)).then((res) => {
            console.log(res);
            dispatch(GET_PROFILE_ACTION());
          });
        }
        dispatch(GET_PROFILE_ACTION());
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal show={show} onHide={close} className="modalContainer">
      <Modal.Header closeButton>
        <Modal.Title>Edit profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control
              className="editProfileInput"
              type="text"
              placeholder="Type your first name here"
              required
              value={userInfo.firstName}
              onChange={(e) => onChangeHandler(e, "firstName")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last name</Form.Label>
            <Form.Control
              className="editProfileInput"
              type="text"
              placeholder="Type your last name here"
              required
              value={userInfo.lastName}
              onChange={(e) => onChangeHandler(e, "lastName")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="editProfileInput"
              type="email"
              disabled
              placeholder="Enter email"
              defaultValue={userInfo.email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formFile">
            <Form.Label>Select your profile picture</Form.Label>
            <Form.Control
              type="file"
              name="avatar"
              onChange={handleFileChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button
          style={{ width: "200px" }}
          className="ratingModalButton"
          type="submit"
          onClick={async (event) => {
            await editProfileInfo(event);
            close();
          }}
        >
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileModal;
