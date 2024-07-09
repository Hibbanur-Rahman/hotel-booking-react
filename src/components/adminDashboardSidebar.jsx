const AdmindashboardSidebar=()=>{
    return(
       <div>
  &lt;&gt;
  <div className="sidebar container-fluid d-flex flex-column flex-shrink-0 p-3 text-dark bg-white m-0 position-fixed" style={{width: 300}}>
    <div className="author row align-items-center text-dark text-decoration-none m-0">
      <div className="profileImg rounded-5 overflow-hidden col-4 p-0 d-flex">
        <img src="../../images/userDashboard/userImg.jpg" alt />
      </div>
      <div className="userDetails col-8 pe-0">
        <h5>
          &lt;%= user.name%&gt;
        </h5>
        <p className="p-0 m-0">Member Since Dec,2023</p>
      </div>
    </div>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="dashBoard nav-item">
        <a href="/adminRoutes/dashboard" className="nav-link text-dark">
          <i className="bi bi-speedometer2 me-2" />
          Dashboard
        </a>
      </li>
      <li className="myBooking nav-item">
        <a href="/adminRoutes/myBooking" className="nav-link text-dark">
          <i className="bi bi-cart2 me-2" />
          My Booking
        </a>
      </li>
      <li className="myProfile nav-item">
        <a href="/adminRoutes/myProfile" className="nav-link text-dark">
          <i className="bi bi-person me-2" />
          My Profile
        </a>
      </li>
      <li className="myReviews nav-item">
        <a href="/adminRoutes/myReviews" className="nav-link text-dark">
          <i className="bi bi-star-fill me-2" />
          My Reviews
        </a>
      </li>
      <li className="myListing nav-item">
        <a href="/adminRoutes/myListing" className="nav-link text-dark">
          <i className="bi bi-copy me-2" />
          My Listings
        </a>
      </li>
      <li className="addListing nav-item">
        <a href="/adminRoutes/addListing" className="nav-link text-dark">
          <i className="bi bi-clipboard-plus me-2" />
          Add Listing
        </a>
      </li>
      <li className="wallet nav-item">
        <a href="/adminRoutes/wallet" className="nav-link text-dark">
          <i className="bi bi-wallet me-2" />
          Wallet
        </a>
      </li>
      <li className="setting nav-item">
        <a href="/adminRoutes/setting" className="nav-link text-dark">
          <i className="bi bi-gear me-2" /> Settings
        </a>
      </li>
      <li className="logout nav-item">
        <a href="/adminRoutes/" className="nav-link text-dark" style={{transform: 'rotate(45deg)'}}>
          <i className="bi bi-power me-2" /> Logout
        </a>
      </li>
    </ul>
  </div>
</div>

    )
}
export default AdmindashboardSidebar;