const Setting = () => {
  return (
    <div>
      &lt;&gt;
      <div
        className="contents container-fluid m-0 p-0"
        style={{ marginLeft: "300px !important" }}
      >
        &lt;%- include('../common/headingData.ejs',{"{"}
        user:user,page:"Settings"{"}"})%&gt;
        <div className="row m-0 p-0 ps-3">
          {/* ====================  change personal data ================== */}
          <div className="col-6">
            <div className="card personalInformation border-0">
              <div className="row m-0 p-3 border border-top-0 border-start-0 border-end-0">
                <h3 className="m-0 p-0 fs-5">Personal Information</h3>
              </div>
              <div className="row m-0 p-3 ">
                <div className="col-3 rounded-1 overflow-hidden p-0">
                  <img
                    src="../../images/userDashboard/userImg.jpg"
                    alt
                    className="imgPreviewProfile rounded-2 img-fluid"
                  />
                </div>
                <div className="col-9 d-flex flex-column ps-4">
                  <p>
                    Max file size is 5MB ,Minimum Dimension :150x150 And
                    Suitable files are .jpg &amp; .png
                  </p>
                  <div className="inputField uploadFile row p-0 m-0">
                    <input
                      type="file"
                      id="profilePhotoUpload"
                      accept=".png,.jpg,.jpeg"
                      className="m-0 w-auto p-0"
                    />
                  </div>
                  <div className="row m-0 p-0">
                    <button className="btn btn-primary w-auto mt-2 p-2">
                      Remove Image
                    </button>
                  </div>
                </div>
              </div>
              <div className="row m-0 p-3">
                <form
                  action="/personalInformation"
                  method="post"
                  className="m-0 p-0"
                >
                  <div className="row m-0 p-0 pt-4">
                    <div className="col-6 p-0 m-0 pe-3">
                      <p className="m-0 p-0 pb-2">First Name</p>
                      <div className="inputField m-0 p-0 row">
                        <i className="las la-user position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                        <input
                          type="text"
                          className="p-2 position-relative ps-5 rounded-1 border border-1"
                          placeholder="<%= user.firstName%>"
                        />
                      </div>
                    </div>
                    <div className="col-6 p-0 m-0 ps-1">
                      <p className="m-0 p-0 pb-2">Last Name</p>
                      <div className="inputField row p-0 m-0">
                        <i className="las la-user position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                        <input
                          type="text"
                          className="p-2 position-relative ps-5 rounded-1 border border-1"
                          placeholder="<%= user.lastName%>"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row m-0 p-0 pt-4">
                    <div className="col-6 p-0 m-0 pe-3">
                      <p className="m-0 p-0 pb-2">Email Address</p>
                      <div className="inputField row m-0 p-0">
                        <i className="las la-envelope position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                        <input
                          type="text"
                          className="p-2 position-relative ps-5 rounded-1 border border-1"
                          placeholder="<%= user.email%>"
                        />
                      </div>
                    </div>
                    <div className="col-6 p-0 m-0  ps-1">
                      <p className="m-0 p-0 pb-2">Phone number</p>
                      <div className="inputField row m-0 p-0">
                        <i className="las la-phone position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                        <input
                          id="phone"
                          type="text"
                          className="p-2 position-relative ps-5 rounded-1 border border-1"
                          placeholder="+91 99731 52523"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row m-0 p-0 pt-4">
                    <div className="col-6 p-0 m-0 pe-3">
                      <p className="m-0 p-0 pb-2">Date of birth</p>
                      <div className="inputField row m-0 p-0">
                        <i className="las la-user position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                        <input
                          type="text"
                          className=" m-0 p-2 position-relative ps-5 rounded-1 border border-1"
                          placeholder="11 Nov 2004"
                        />
                      </div>
                    </div>
                    <div className="col-6 p-0 m-0  ps-1">
                      <p className="m-0 p-0 pb-2">Address</p>
                      <div className="inputField row m-0 p-0">
                        <i className="las la-map position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                        <input
                          id="phone"
                          type="text"
                          className=" p-2  ps-5 rounded-1 border border-1"
                          placeholder="Gacchibowli,Hyderabad"
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
          {/* ====================  change Email ================== */}
          <div className="col-6 m-0 pe-4">
            <div className="card changeEmail m-0 p-0 border-0">
              <div className="row m-0 p-3 border border-top-0 border-start-0 border-end-0">
                <h3 className="m-0 p-0 fs-5">Change Email</h3>
              </div>
              <div className="row m-0 p-3">
                <form action className="m-0 p-0">
                  <div className="row p-0 m-0 pt-2 ">
                    <p className="p-0 m-0 pb-2">Current Email</p>
                    <div className="inputField row m-0 p-0">
                      <i className="las la-envelope position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                      <input
                        type="email"
                        className=" p-2  ps-5 rounded-1 border border-1"
                        placeholder="Current email"
                      />
                    </div>
                  </div>
                  <div className="row p-0 m-0 pt-4">
                    <p className="p-0 m-0 pb-2">New Email</p>
                    <div className="inputField row m-0 p-0">
                      <i className="las la-envelope position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                      <input
                        type="email"
                        className=" p-2  ps-5 rounded-1 border border-1"
                        placeholder="New email"
                      />
                    </div>
                  </div>
                  <div className="row p-0 m-0 pt-4">
                    <p className="p-0 m-0 pb-2">New Email Again</p>
                    <div className="inputField row m-0 p-0">
                      <i className="las la-envelope position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                      <input
                        type="email"
                        className=" p-2  ps-5 rounded-1 border border-1"
                        placeholder="New email again"
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
        <div className="row m-0 p-0 ps-3 pt-5 pb-5">
          {/* ====================  change password ================== */}
          <div className="col-6">
            <div className="card m-0 p-0 border-0 changePassword">
              <div className="row m-0 p-3 border border-top-0 border-start-0 border-end-0">
                <h3 className="m-0 p-0 fs-5">Change Password</h3>
              </div>
              <div className="row m-0 p-3">
                <form action className="m-0 p-0">
                  <div className="row m-0 p-0 pt-4">
                    <div className="col-6 p-0 m-0 pe-3">
                      <p className="m-0 p-0 pb-2">Current Password</p>
                      <div className="inputField m-0 p-0 row">
                        <i className="las la-lock position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                        <input
                          type="text"
                          className="p-2 position-relative ps-5 rounded-1 border border-1"
                          placeholder="Current password"
                        />
                      </div>
                    </div>
                    <div className="col-6 p-0 m-0 ps-1">
                      <p className="m-0 p-0 pb-2">New Password</p>
                      <div className="inputField row p-0 m-0">
                        <i className="las la-user position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                        <input
                          type="text"
                          className="p-2 position-relative ps-5 rounded-1 border border-1"
                          placeholder="New password"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row m-0 p-0 pt-4">
                    <div className="col-6 p-0 m-0 pe-3">
                      <p className="m-0 p-0 pb-2">New Password Again</p>
                      <div className="inputField m-0 p-0 row">
                        <i className="las la-lock position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                        <input
                          type="text"
                          className="p-2 position-relative ps-5 rounded-1 border border-1"
                          placeholder="New password again"
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
          {/* ====================  forgot password ================== */}
          <div className="col-6  m-0 pe-4">
            <div className="card forgotPassword m-0 border-0 p-3">
              <div className="row m-0 p-0">
                <h3 className="m-0 p-0 fs-5 pb-3">Forgot Password</h3>
                <p className="m-0 p-0 text-secondary">
                  Enter the Email of your account to reset password. Then you
                  will recieve a link to email
                </p>
                <p className="m-0 p-0 text-secondary">
                  to reset the password if you have any issue about reset
                  password contact us
                </p>
              </div>
              <div className="row m-0 p-0">
                <form action className="m-0 p-0">
                  <div className="row p-0 m-0 pt-4">
                    <p className="p-0 m-0 pb-2">Email Address</p>
                    <div className="inputField row m-0 p-0">
                      <i className="las la-envelope position-absolute fs-3 z-1 m-0 mt-2 w-auto" />
                      <input
                        id="phone"
                        type="text"
                        className=" p-2  ps-5 rounded-1 border border-1"
                        placeholder="Enter email address"
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
    </div>
  );
};

export default Setting;
