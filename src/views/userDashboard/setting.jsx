import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import userImg from "../../assets/images/userDashboard/userImg.jpg";
import DOMAIN from "../../../environmentVariables";
import httpStatusCode from "../../constants/httpStatusCode";
const Setting = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    DOB: "",
    address: "",
    city: "",
    state: "",
    pincode:'',
    country:'India'
  });
  const [previewImage, setPreviewImage] = useState(userImg);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmitUserDetails = async (event) => {
    event.preventDefault();
    try{
        const response=await axios.post(`${DOMAIN}/update-user-details`,{user},{
          headers:{
            Authorization:localStorage.getItem('token')
          }
        })
        if(response.status===httpStatusCode.OK){
          toast.success('User Details Updated Successfully')
        }
    }catch(error){
      console.log("Error to update the userDetails:",error);
      toast.error('failed to update user details')
    }
  };
  const handleSubmit= async (event) => {
    event.preventDefault();
    // Add logic to handle form submission, e.g., update user details
  };
  useEffect(() => {
    handleViewUserDetails();
  }, []);
  return (
    <div
      className="container-fluid m-0 p-0 position-relative"
      style={{ top: "100px" }}
    >
      <div className="row m-0 p-0 ps-lg-3 align-items-lg-start">
        <div className="col-lg-6 col-12 ">
          <div style={{maxWidth:'100%'}} className="card personalInformation border-0 mt-0">
            <div className="row m-0 p-3 border border-top-0 border-start-0 border-end-0">
              <h3 className="m-0 p-0 fs-5">Personal Information</h3>
            </div>
            <div className="row m-0 p-3">
              <div className="col-3 rounded-1 overflow-hidden p-0">
                <img
                  src={previewImage}
                  alt="User"
                  className="imgPreviewProfile rounded-2 img-fluid"
                />
              </div>
              <div className="col-9 d-flex flex-column ps-4">
                <p>
                  Max file size is 5MB, Minimum Dimension: 150x150, and Suitable
                  files are .jpg & .png
                </p>
                <div className="inputField uploadFile row p-0 m-0">
                  <input
                    type="file"
                    id="profilePhotoUpload"
                    accept=".png,.jpg,.jpeg"
                    className="m-0 w-auto p-0"
                    onChange={handleImageChange}
                  />
                </div>
                <div className="row m-0 p-0">
                  <button className="btn btn-primary w-auto mt-2 p-2">
                    Save Image
                  </button>
                </div>
              </div>
            </div>
            <div className="row m-0 p-3">
              <form onSubmit={handleSubmitUserDetails} className="m-0 p-0">
                <div className="row m-0 p-0 pt-lg-4 pt-0">
                  <div className="col-lg-6 col-12 mt-3 p-0 m-0 pe-lg-3 pe-0">
                    <p className="m-0 p-0 pb-2">User Name</p>
                    <div className="inputField m-0 p-0 row">
                      <i className="las la-user position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                      <input
                        type="text"
                        className="p-2 position-relative ps-5 rounded-1 border border-1"
                        name="username"
                        placeholder="username"
                        value={user.username}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 mt-3 p-0 m-0 ps-lg-1 ps-0">
                    <p className="m-0 p-0 pb-2">Phone number</p>
                    <div className="inputField row m-0 p-0">
                      <i className="las la-phone position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                      <input
                        id="phone"
                        type="text"
                        className="p-2 position-relative ps-5 rounded-1 border border-1"
                        placeholder="+91 99731 52523"
                        name="phone"
                        value={user.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row m-0 p-0 pt-lg-4 pt-0">
                  <div className="col-lg-6 col-12 mt-3 p-0 m-0 pe-lg-3 pe-0">
                    <p className="m-0 p-0 pb-2">Date of birth</p>
                    <div className="inputField row m-0 p-0">
                      <i className="las la-user position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                      <input
                        type="text"
                        className="m-0 p-2 position-relative ps-5 rounded-1 border border-1"
                        placeholder="11 Nov 2004"
                        name="DOB"
                        value={user.DOB}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 mt-3 p-0 m-0 ps-lg-1 ps-0">
                    <p className="m-0 p-0 pb-2">City</p>
                    <div className="inputField row m-0 p-0">
                      <i className="las la-map position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                      <input
                        type="text"
                        className="p-2 position-relative ps-5 rounded-1 border border-1"
                        name="city"
                        placeholder="city"
                        value={user.city}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row m-0 p-0 pt-lg-4 pt-0">
                  <div className="col-lg-6 col-12 mt-3 p-0 m-0 pe-lg-3 pe-0">
                    <p className="m-0 p-0 pb-2">state</p>
                    <div className="inputField row m-0 p-0">
                      <i className="las la-map position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                      <input
                        type="text"
                        className="p-2 position-relative ps-5 rounded-1 border border-1"
                        name="state"
                        placeholder="state"
                        value={user.state}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 mt-3 p-0 m-0 ps-lg-1 ps-0">
                    <p className="m-0 p-0 pb-2">pincode</p>
                    <div className="inputField row m-0 p-0">
                      <i className="las la-map position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                      <input
                        id="pincode"
                        type="text"
                        className="p-2 ps-5 rounded-1 border border-1"
                        placeholder="500032"
                        name="pincode"
                        value={user.pincode}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row m-0 p-0 pt-lg-4 pt-0">
                  <div className="col-lg-6 col-12 mt-3 p-0 m-0 pe-lg-3 pe-0">
                    <p className="m-0 p-0 pb-2">country</p>
                    <div className="inputField row m-0 p-0">
                      <i className="las la-map position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                      <input
                        type="text"
                        className="p-2 position-relative ps-5 rounded-1 border border-1"
                        name="country"
                        placeholder="country"
                        value={user.country}
                        onChange={handleInputChange}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 mt-3 p-0 m-0 ps-lg-1 ps-0">
                    <p className="m-0 p-0 pb-2">Address</p>
                    <div className="inputField row m-0 p-0">
                      <i className="las la-map position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                      <input
                        id="address"
                        type="text"
                        className="p-2 ps-5 rounded-1 border border-1"
                        placeholder="Gacchibowli, Hyderabad"
                        name="address"
                        value={user.address}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Change Email */}
        <div className="col-lg-6 col-12 mt-lg-0 m-0 mt-5 pe-lg-4 p-2 pt-0">
          <div style={{maxWidth:'100%'}} className="card changeEmail m-lg-0 mt-0 p-0 border-0">
            <div className="row m-0 p-3 border border-top-0 border-start-0 border-end-0">
              <h3 className="m-0 p-0 fs-5">Change Email</h3>
            </div>
            <div className="row m-0 p-3">
              <form onSubmit={handleSubmit} className="m-0 p-0">
                <div className="row p-0 m-0 pt-2">
                  <p className="p-0 m-0 pb-2">Current Email</p>
                  <div className="inputField row m-0 p-0">
                    <i className="las la-envelope position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                    <input
                      type="email"
                      className="p-2 ps-5 rounded-1 border border-1"
                      placeholder="Current email"
                      name="currentEmail"
                      value={user.email}
                      disabled
                    />
                  </div>
                </div>
                <div className="row p-0 m-0 pt-4">
                  <p className="p-0 m-0 pb-2">New Email</p>
                  <div className="inputField row m-0 p-0">
                    <i className="las la-envelope position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                    <input
                      type="email"
                      className="p-2 ps-5 rounded-1 border border-1"
                      placeholder="New email"
                      name="newEmail"
                    />
                  </div>
                </div>
                <div className="row p-0 m-0 pt-4">
                  <p className="p-0 m-0 pb-2">New Email Again</p>
                  <div className="inputField row m-0 p-0">
                    <i className="las la-envelope position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                    <input
                      type="email"
                      className="p-2 ps-5 rounded-1 border border-1"
                      placeholder="New email again"
                      name="newEmailAgain"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Change Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row m-0 p-0 ps-lg-3 pt-lg-5 pb-5">
        {/* Change Password */}
        <div className="col-lg-6 col-12 mt-3">
          <div style={{maxWidth:'100%'}} className="card m-0 p-0 border-0 changePassword">
            <div className="row m-0 p-3 border border-top-0 border-start-0 border-end-0">
              <h3 className="m-0 p-0 fs-5">Change Password</h3>
            </div>
            <div className="row m-0 p-3">
              <form onSubmit={handleSubmit} className="m-0 p-0">
                <div className="row m-0 p-0 pt-lg-4 pt-0">
                  <div className="col-lg-6 col-12 mt-3 p-0 m-0 pe-lg-3 pe-0">
                    <p className="m-0 p-0 pb-2">Current Password</p>
                    <div className="inputField m-0 p-0 row">
                      <i className="las la-lock position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                      <input
                        type="text"
                        className="p-2 position-relative ps-5 rounded-1 border border-1"
                        placeholder="Current password"
                        name="currentPassword"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 mt-3 p-0 m-0 ps-lg-1 ps-0">
                    <p className="m-0 p-0 pb-2">New Password</p>
                    <div className="inputField row p-0 m-0">
                      <i className="las la-user position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                      <input
                        type="text"
                        className="p-2 position-relative ps-5 rounded-1 border border-1"
                        placeholder="New password"
                        name="newPassword"
                      />
                    </div>
                  </div>
                </div>
                <div className="row m-0 p-0 pt-lg-4 pt-0">
                  <div className="col-lg-6 col-12 mt-3 p-0 m-0 pe-lg-3 pe-0">
                    <p className="m-0 p-0 pb-2">New Password Again</p>
                    <div className="inputField m-0 p-0 row">
                      <i className="las la-lock position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                      <input
                        type="text"
                        className="p-2 position-relative ps-5 rounded-1 border border-1"
                        placeholder="New password again"
                        name="newPasswordAgain"
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="col-lg-6 col-12 mt-3 m-0 pe-lg-4">
          <div style={{maxWidth:'100%'}} className="card forgotPassword m-0 border-0 p-3">
            <div className="row m-0 p-0">
              <h3 className="m-0 p-0 fs-5 pb-3">Forgot Password</h3>
              <p className="m-0 p-0 text-secondary">
                Enter the Email of your account to reset the password. Then you
                will receive a link to email to reset the password. If you have
                any issue about reset password, contact us.
              </p>
            </div>
            <div className="row m-0 p-0">
              <form onSubmit={handleSubmit} className="m-0 p-0">
                <div className="row p-0 m-0 pt-4">
                  <p className="p-0 m-0 pb-2">Email Address</p>
                  <div className="inputField row m-0 p-0">
                    <i className="las la-envelope position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                    <input
                      type="text"
                      className="p-2 ps-5 rounded-1 border border-1"
                      placeholder="Enter email address"
                      name="forgotEmail"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Forgot Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
