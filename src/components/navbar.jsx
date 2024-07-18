// src/components/Navbar.jsx
import "../assets/style/aboutUs_css/style.css";
import logo from "../assets/images/login/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import userImg from '../assets/images/userDashboard/userImg.jpg';
import '../assets/style/navbar_css/navbar.scss';
import toast from "react-hot-toast";
import { useSelector, useDispatch } from 'react-redux';
import { logout, login,selectAuth } from '../redux/slices/authSlice';
import { decode } from "jwt-js-decode";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(selectAuth);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    toast.success("Logout successfully!!");
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Fetch user details from token or API here and dispatch login
      const jwt=decode(token)
      const user = jwt.payload.user; // Example user data
      dispatch(login({ user, token }));
    }
  }, [dispatch]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg position-fixed z-3 bg-white border-bottom w-100">
        <div className="container">
          <div className="d-flex align-content-center">
            <Link  to="/">
              <img src={logo}  />
            </Link>
            <div className="dropdown dropdown-center">
              <button
                id="dropdownMenuButton"
                className="dropdown-toggle border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                | EN
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Urdu
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Hindi
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabIndex={-1}
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div className="offcanvas-header">
              <Link  to="/">
                <img src={logo}  />
              </Link>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <ul className="navbar-nav px-3 justify-content-center w-100">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/aboutUs" ? "active" : ""
                  }`}
                  to="/aboutUs"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link ${
                    location.pathname === "/rooms" ? "active" : ""
                  }`}
                  to="/rooms"
                >
                  Room
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/services" ? "active" : ""
                  }`}
                  to="/services"
                >
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/blog" ? "active" : ""
                  }`}
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/gallery" ? "active" : ""
                  }`}
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            {isAuthenticated ? (
              <div className="ms-3 m-lg-0 d-flex align-items-center">
                <div className="notification rounded-5 p-2 d-flex align-items-center justify-content-center me-3">
                  <i className="bi bi-bell p-0 m-0" />
                  <div className="notificationCount bg-light p-1 d-flex align-items-center justify-content-center position-absolute">
                    <p className="p-0 m-0">5</p>
                  </div>
                </div>
                <div className="profileImg profileImgLeft rounded-5 overflow-hidden col-4 p-0 d-flex justify-content-center align-items-center">
                  <img src={userImg}/>
                </div>
                
                <div className="profileToolPit col-2 position-absolute m-0 p-0 z-1 ">
                  <div className="card m-0 pt-2 w-auto border-0 overflow-hidden">
                    <p className="m-0 p-0 fs-5 fw-bold text-secondary ps-3">
                      WELCOME!
                    </p>
                    <li className="list-unstyled  p-0  ">
                      <Link
                        to="/user/profile"
                        className="text-decoration-none ps-4 pt-3 pb-3 m-0  text-dark d-flex align-items-center"
                      >
                        <i className="la la-user text-dark fs-4" />
                        <p className="m-0 p-0 w-auto ps-2 fs-6">My Profile</p>
                      </Link>
                    </li>
                    <li className="list-unstyled  p-0  ">
                      <Link
                        href="/user/booking"
                        className="text-decoration-none ps-4 pt-3 pb-3 m-0  text-dark d-flex align-items-center"
                      >
                        <i className="la la-shopping-cart ext-dark fs-4" />
                        <p className="m-0 p-0 w-auto ps-2 fs-6">My Booking</p>
                      </Link>
                    </li>
                    <li className="list-unstyled  p-0  ">
                      <Link
                        to="/user/reviews"
                        className="text-decoration-none ps-4 pt-3 pb-3 m-0  text-dark d-flex align-items-center"
                      >
                        <i className="la la-heart text-dark fs-4" />
                        <p className="m-0 p-0 w-auto ps-2 fs-6">My Reviews</p>
                      </Link>
                    </li>
                    <li className="list-unstyled  p-0  ">
                      <Link
                        href="/user/setting"
                        className="text-decoration-none ps-4 pt-3 pb-3 m-0  text-dark d-flex align-items-center"
                      >
                        <i className="la la-gear text-dark fs-4" />
                        <p className="m-0 p-0 w-auto ps-2 fs-6">Settings</p>
                      </Link>
                    </li>
                    <li className="list-unstyled  p-0  ">
                      <div
                        className="text-decoration-none ps-4 pt-3 pb-3 m-0  text-dark d-flex align-items-center"
                        style={{cursor:'pointer'}}
                        onClick={handleLogout}
                      >
                        <i className="la la-power-off text-danger fs-4" />
                        <p className="m-0 p-0 w-auto ps-2 fs-6 text-danger">Logout</p>
                      </div>
                    </li>
                  </div>
                </div>
                <p className="p-0 m-0 ps-3 text-dark">{user.username}</p>
              </div>
            ) : (
              <div className="ms-3 m-lg-0 d-flex">
                <button
                  className="me-2 border-1 border-dark border-opacity-10 rounded bg-transparent px-2"
                  type="submit"
                >
                  <i className="bi bi-cart" style={{ color: "#2596be" }} />
                </button>
                <Link to="/login">
                  {" "}
                  <button className="custom-btn">Login</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
