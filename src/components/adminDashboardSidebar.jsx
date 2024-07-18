import { Link, useLocation, useNavigate } from "react-router-dom";
import profileImg from "../assets/images/userDashboard/userImg.jpg";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from 'react-redux';
import { logout, login,selectAuth } from '../redux/slices/authSlice';
const DashboardSidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(selectAuth);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    toast.success("Logout successfully!!");
    navigate("/");
  };

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
            <h5>{user.username}</h5>
            <p className="p-0 m-0">Member Since Dec,2023</p>
          </div>
        </div>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="dashBoard nav-item ">
            <Link
              to="/admin/dashboard"
              className={`nav-link  ${
                location.pathname === "/admin/dashboard"
                  ? "active text-light"
                  : "text-dark"
              } `}
            >
              <i className="bi bi-speedometer2 me-2" />
              Dashboard
            </Link>
          </li>
          <li className="myBooking nav-item">
            <Link
              to="/admin/booking"
              className={`nav-link  ${
                location.pathname === "/admin/booking"
                  ? "active text-light"
                  : "text-dark"
              } `}
            >
              <i className="bi bi-cart2 me-2" />
              My Booking
            </Link>
          </li>
          <li className="myProfile nav-item">
            <Link
              to="/admin/profile"
              className={`nav-link  ${
                location.pathname === "/admin/profile"
                  ? "active text-light"
                  : "text-dark"
              } `}
            >
              <i className="bi bi-person me-2" />
              My Profile
            </Link>
          </li>
          <li className="myReviews nav-item">
            <Link
              to="/admin/reviews"
              className={`nav-link  ${
                location.pathname === "/admin/reviews"
                  ? "active text-light"
                  : "text-dark"
              } `}
            >
              <i className="bi bi-star-fill me-2" />
              My Reviews
            </Link>
          </li>
          <li className="myListing nav-item">
            <Link
              to="/admin/listing"
              className={`nav-link  ${
                location.pathname === "/admin/listing"
                  ? "active text-light"
                  : "text-dark"
              } `}
            >
              <i className="bi bi-copy me-2" />
              My Listings
            </Link>
          </li>
          <li className="addListing nav-item">
            <Link
              to="/admin/addListing"
              className={`nav-link  ${
                location.pathname === "/admin/addListing"
                  ? "active text-light"
                  : "text-dark"
              } `}
            >
              <i className="bi bi-clipboard-plus me-2" />
              Add Listing
            </Link>
          </li>
          <li className="wallet nav-item">
            <Link
              to="/admin/wallet"
              className={`nav-link  ${
                location.pathname === "/admin/wallet"
                  ? "active text-light"
                  : "text-dark"
              } `}
            >
              <i className="bi bi-wallet me-2" />
              Wallet
            </Link>
          </li>
          <li className="setting nav-item">
            <Link
              to="/admin/setting"
              className={`nav-link  ${
                location.pathname === "/admin/setting"
                  ? "active text-light"
                  : "text-dark"
              } `}
            >
              <i className="bi bi-gear me-2" /> Settings
            </Link>
          </li>
          <li className="logout nav-item">
            <div className="nav-link text-danger" onClick={handleLogout} style={{cursor:'pointer'}}>
              <i className="bi bi-power me-2 text-danger" /> Logout
            </div>
          </li>
        </ul>
      </div>

      <i
        className="bi bi-list position-absolute d-lg-none d-flex fs-1 mt-3 border border-1 w-auto rounded-3 p-0 ms-2"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
        style={{ zIndex: 12 }}
      ></i>
      <div className=" d-lg-none d-flex">
        <div
          className="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="author row align-items-center  text-decoration-none m-0">
              <div className="profileImg rounded-5 overflow-hidden col-4 p-0 d-flex">
                <img src={profileImg} alt />
              </div>
              <div className="userDetails col-8 pe-0">
                <h5>{user.username}</h5>
                <p className="p-0 m-0">Member Since Dec,2023</p>
              </div>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="dashBoard nav-item">
                <Link
                  to="/admin/dashboard"
                  className={`nav-link  ${
                    location.pathname === "/admin/dashboard"
                      ? "active text-light"
                      : "text-dark"
                  } `}
                >
                  <i className="bi bi-speedometer2 me-2" />
                  Dashboard
                </Link>
              </li>
              <li className="myBooking nav-item">
                <Link
                  to="/admin/booking"
                  className={`nav-link  ${
                    location.pathname === "/admin/booking"
                      ? "active text-light"
                      : "text-dark"
                  } `}
                >
                  <i className="bi bi-cart2 me-2" />
                  My Booking
                </Link>
              </li>
              <li className="myProfile nav-item">
                <Link
                  to="/admin/profile"
                  className={`nav-link  ${
                    location.pathname === "/admin/profile"
                      ? "active text-light"
                      : "text-dark"
                  } `}
                >
                  <i className="bi bi-person me-2" />
                  My Profile
                </Link>
              </li>
              <li className="myReviews nav-item">
                <Link
                  to="/admin/reviews"
                  className={`nav-link  ${
                    location.pathname === "/admin/reviews"
                      ? "active text-light"
                      : "text-dark"
                  } `}
                >
                  <i className="bi bi-star-fill me-2" />
                  My Reviews
                </Link>
              </li>
              <li className="myListing nav-item">
                <Link
                  to="/admin/listing"
                  className={`nav-link  ${
                    location.pathname === "/admin/listing"
                      ? "active text-light"
                      : "text-dark"
                  } `}
                >
                  <i className="bi bi-copy me-2" />
                  My Listings
                </Link>
              </li>
              <li className="addListing nav-item">
                <Link
                  to="/admin/addListing"
                  className={`nav-link  ${
                    location.pathname === "/admin/addListing"
                      ? "active text-light"
                      : "text-dark"
                  } `}
                >
                  <i className="bi bi-clipboard-plus me-2" />
                  Add Listing
                </Link>
              </li>
              <li className="wallet nav-item">
                <Link
                  to="/admin/wallet"
                  className={`nav-link  ${
                    location.pathname === "/admin/wallet"
                      ? "active text-light"
                      : "text-dark"
                  } `}
                >
                  <i className="bi bi-wallet me-2" />
                  Wallet
                </Link>
              </li>
              <li className="setting nav-item">
                <Link
                  to="/admin/setting"
                  className={`nav-link  ${
                    location.pathname === "/admin/setting"
                      ? "active text-light"
                      : "text-dark"
                  } `}
                >
                  <i className="bi bi-gear me-2" /> Settings
                </Link>
              </li>
              <li className="logout nav-item">
                <div className="nav-link text-danger" onClick={handleLogout}>
                  <i className="bi bi-power me-2 text-danger" /> Logout
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardSidebar;
