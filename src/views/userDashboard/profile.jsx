import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import DOMAIN from "../../../environmentVariables";
import httpStatusCode from "../../constants/httpStatusCode";
const Profile = () => {
  const [user, setUser] = useState("");
  const handleViewUserDetails = async () => {
    try {
      const response = await axios.post(`${DOMAIN}/view-user-profile`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === httpStatusCode.OK) {
        setUser(response.data.data);
      }
    } catch (error) {
      toast.error("Failed to view User detail");
    }
  };
  useEffect(() => {
    handleViewUserDetails();
  }, []);
  return (
    <div
      className="row m-0 p-0 position-relative justify-content-center align-items-center"
      style={{ top: "100px" }}
    >
      <div
        className="profileInfoCard card m-0 mt-0 col-8 m-5 border-0 p-3"
        style={{ maxWidth: "100%" }}
      >
        <div className="row m-0 p-0 border border-bottom-1 border-top-0 border-start-0 border-end-0">
          <p className="fw-bold">Profile Information</p>
        </div>
        <div className="row m-0 p-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 p-3 ps-0">
          <div className="col-3">
            <p className="fw-bold m-0">User-Name</p>
          </div>
          <div className="col-1">:</div>
          <div className="col-7">
            <p className="m-0">{user.username}</p>
          </div>
        </div>
        {/* <div className="row m-0 p-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 p-3 ps-0">
          <div className="col-3">
            <p className="fw-bold m-0">Last Name</p>
          </div>
          <div className="col-1">:</div>
          <div className="col-7">
            <p className="m-0">&lt;%= user.lastName%&gt;</p>
          </div>
        </div> */}
        <div className="row m-0 p-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 p-3 ps-0">
          <div className="col-3">
            <p className="fw-bold m-0">Email Address</p>
          </div>
          <div className="col-1">:</div>
          <div className="col-7">
            <p className="m-0">{user.email}</p>
          </div>
        </div>
        <div className="row m-0 p-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 p-3 ps-0">
          <div className="col-3">
            <p className="fw-bold m-0">Phone Number</p>
          </div>
          <div className="col-1">:</div>
          <div className="col-7">
            {user.phone ? (
              <p className="m-0">{user.phone}</p>
            ) : (
              <p className="m-0">--------</p>
            )}
          </div>
        </div>
        <div className="row m-0 p-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 p-3 ps-0">
          <div className="col-3">
            <p className="fw-bold m-0">Date of Birth</p>
          </div>
          <div className="col-1">:</div>
          <div className="col-7">
          {user.DOB ? (
              <p className="m-0">{user.DOB}</p>
            ) : (
              <p className="m-0">--------</p>
            )}
          </div>
        </div>
        <div className="row m-0 p-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 p-3 ps-0">
          <div className="col-3">
            <p className="fw-bold m-0">Address</p>
          </div>
          <div className="col-1">:</div>
          <div className="col-7">
          {user.address ? (
              <p className="m-0">{user.address}</p>
            ) : (
              <p className="m-0">--------</p>
            )}
          </div>
        </div>
        <div className="row m-0 p-4 ps-0 pb-0">
          <Link to="/user/setting">
            <button className="btn btn-primary w-auto p-2">Edit Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Profile;
