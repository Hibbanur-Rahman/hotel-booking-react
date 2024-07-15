import { Link } from "react-router-dom";
import profileImg from "../assets/images/userDashboard/userImg.jpg";

const DashboardSidebar = () => {
  return (
    <>
      <div
        className="sidebar container- col-2 d-lg-flex d-none flex-column flex-shrink-0 p-3 text-dark bg-white m-0 "
        // style={{ width: 300 }}
      >
        <div className="author row align-items-center text-dark text-decoration-none m-0">
          <div className="profileImg rounded-5 overflow-hidden col-4 p-0 d-flex">
            <img src={profileImg} alt />
          </div>
          <div className="userDetails col-8 pe-0">
            <h5>Hibbanur Rahman</h5>
            <p className="p-0 m-0">Member Since Dec,2023</p>
          </div>
        </div>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="dashBoard nav-item">
            <Link to="/user/dashboard" className="nav-link text-dark">
              <i className="bi bi-speedometer2 me-2" />
              Dashboard
            </Link>
          </li>
          <li className="myBooking nav-item">
            <Link to="/user/booking" className="nav-link text-dark">
              <i className="bi bi-cart2 me-2" />
              My Booking
            </Link>
          </li>
          <li className="myProfile nav-item">
            <Link to="/user/profile" className="nav-link text-dark">
              <i className="bi bi-person me-2" />
              My Profile
            </Link>
          </li>
          <li className="myReviews nav-item">
            <Link to="/user/reviews" className="nav-link text-dark">
              <i className="bi bi-star-fill me-2" />
              My Reviews
            </Link>
          </li>
          <li className="wishlist nav-item">
            <Link to="/user/wishlist" className="nav-link text-dark">
              <i className="bi bi-suit-heart-fill me-2" />
              Wishlist
            </Link>
          </li>
          <li className="setting nav-item">
            <Link to="/user/setting" className="nav-link text-dark">
              <i className="bi bi-gear me-2" /> Settings
            </Link>
          </li>
          <li className="logout nav-item">
            <Link to="/user/" className="nav-link text-dark">
              <i className="bi bi-power me-2" /> Logout
            </Link>
          </li>
        </ul>
      </div>

      <i
        className="bi bi-list position-absolute d-lg-none d-flex fs-1 mt-3 border border-1 w-auto rounded-3 p-0 ms-2"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
        style={{zIndex:12,}}
      ></i>
      <div className=" d-lg-none d-flex">
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div className="author row align-items-center text-dark text-decoration-none m-0">
              <div className="profileImg rounded-5 overflow-hidden col-4 p-0 d-flex">
                <img src={profileImg} alt  />
              </div>
              <div className="userDetails col-8 pe-0">
                <h5>Hibbanur Rahman</h5>
                <p className="p-0 m-0">Member Since Dec,2023</p>
              </div>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="dashBoard nav-item">
                <Link to="/user/dashboard" className="nav-link text-dark">
                  <i className="bi bi-speedometer2 me-2" />
                  Dashboard
                </Link>
              </li>
              <li className="myBooking nav-item">
                <Link to="/user/booking" className="nav-link text-dark">
                  <i className="bi bi-cart2 me-2" />
                  My Booking
                </Link>
              </li>
              <li className="myProfile nav-item">
                <Link to="/user/profile" className="nav-link text-dark">
                  <i className="bi bi-person me-2" />
                  My Profile
                </Link>
              </li>
              <li className="myReviews nav-item">
                <Link to="/user/reviews" className="nav-link text-dark">
                  <i className="bi bi-star-fill me-2" />
                  My Reviews
                </Link>
              </li>
              <li className="wishlist nav-item">
                <Link to="/user/wishlist" className="nav-link text-dark">
                  <i className="bi bi-suit-heart-fill me-2" />
                  Wishlist
                </Link>
              </li>
              <li className="setting nav-item">
                <Link to="/user/setting" className="nav-link text-dark">
                  <i className="bi bi-gear me-2" /> Settings
                </Link>
              </li>
              <li className="logout nav-item">
                <Link to="/user/" className="nav-link text-dark">
                  <i className="bi bi-power me-2" /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardSidebar;
