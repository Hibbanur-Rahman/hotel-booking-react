const DashboardSidebar = () => {
  return (
    <div>
      &lt;&gt;
      <div
        className="sidebar container-fluid d-flex flex-column flex-shrink-0 p-3 text-dark bg-white m-0 position-fixed"
        style={{ width: 300 }}
      >
        <div className="author row align-items-center text-dark text-decoration-none m-0">
          <div className="profileImg rounded-5 overflow-hidden col-4 p-0 d-flex">
            <img src="../../images/userDashboard/userImg.jpg" alt />
          </div>
          <div className="userDetails col-8 pe-0">
            <h5>&lt;%= user.name%&gt;</h5>
            <p className="p-0 m-0">Member Since Dec,2023</p>
          </div>
        </div>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="dashBoard nav-item">
            <a href="/userRoutes/dashboard" className="nav-link text-dark">
              <i className="bi bi-speedometer2 me-2" />
              Dashboard
            </a>
          </li>
          <li className="myBooking nav-item">
            <a href="/userRoutes/myBooking" className="nav-link text-dark">
              <i className="bi bi-cart2 me-2" />
              My Booking
            </a>
          </li>
          <li className="myProfile nav-item">
            <a href="/userRoutes/myProfile" className="nav-link text-dark">
              <i className="bi bi-person me-2" />
              My Profile
            </a>
          </li>
          <li className="myReviews nav-item">
            <a href="/userRoutes/myReviews" className="nav-link text-dark">
              <i className="bi bi-star-fill me-2" />
              My Reviews
            </a>
          </li>
          <li className="wishlist nav-item">
            <a href="/userRoutes/wishlist" className="nav-link text-dark">
              <i className="bi bi-suit-heart-fill me-2" />
              Wishlist
            </a>
          </li>
          <li className="setting nav-item">
            <a href="/userRoutes/setting" className="nav-link text-dark">
              <i className="bi bi-gear me-2" /> Settings
            </a>
          </li>
          <li className="logout nav-item">
            <a
              href="/userRoutes/"
              className="nav-link text-dark"
              style={{ transform: "rotate(45deg)" }}
            >
              <i className="bi bi-power me-2" /> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DashboardSidebar;
