const MyProfile=()=>{
    return(
      <div>
  &lt;&gt;
  <div className="contents container-fluid m-0 p-0" style={{marginLeft: '300px !important'}}>
    &lt;%- include('../common/headingData.ejs',{'{'}user:user,page:"My Profile"{'}'})%&gt;
    <div className="profileInfoCard card m-0  m-5 border-0 p-3">
      <div className="row m-0 p-0 border border-bottom-1 border-top-0 border-start-0 border-end-0">
        <p className="fw-bold">Profile Information</p>
      </div>
      <div className="row m-0 p-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 p-3 ps-0">
        <div className="col-3">
          <p className="fw-bold m-0">First Name</p>
        </div>
        <div className="col-1">
          :
        </div>
        <div className="col-7">
          <p className="m-0">&lt;%= user.firstName%&gt;</p>
        </div>
      </div>
      <div className="row m-0 p-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 p-3 ps-0">
        <div className="col-3">
          <p className="fw-bold m-0">Last Name</p>
        </div>
        <div className="col-1">
          :
        </div>
        <div className="col-7">
          <p className="m-0">&lt;%= user.lastName%&gt;</p>
        </div>
      </div>
      <div className="row m-0 p-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 p-3 ps-0">
        <div className="col-3">
          <p className="fw-bold m-0">Email Address</p>
        </div>
        <div className="col-1">
          :
        </div>
        <div className="col-7">
          <p className="m-0">&lt;%= user.email%&gt;</p>
        </div>
      </div>
      <div className="row m-0 p-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 p-3 ps-0">
        <div className="col-3">
          <p className="fw-bold m-0">Phone Number</p>
        </div>
        <div className="col-1">
          :
        </div>
        <div className="col-7">
          <p className="m-0">+91-9973152523</p>
        </div>
      </div>
      <div className="row m-0 p-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 p-3 ps-0">
        <div className="col-3">
          <p className="fw-bold m-0">Date of Birth</p>
        </div>
        <div className="col-1">
          :
        </div>
        <div className="col-7">
          <p className="m-0">11 Nov 2004</p>
        </div>
      </div>
      <div className="row m-0 p-0 border border-bottom-1 border-top-0 border-start-0 border-end-0 p-3 ps-0">
        <div className="col-3">
          <p className="fw-bold m-0">Address</p>
        </div>
        <div className="col-1">
          :
        </div>
        <div className="col-7">
          <p className="m-0">Gacchibowli,telecome nagar,hyderabad,telangana,500032</p>
        </div>
      </div>
      <div className="row m-0 p-4 ps-0 pb-0">
        <a href="/userSetting">
          <button className="btn btn-primary w-auto p-2">Edit Profile</button>
        </a>
      </div>
    </div>
  </div>
</div>

    )
}
export default MyProfile;