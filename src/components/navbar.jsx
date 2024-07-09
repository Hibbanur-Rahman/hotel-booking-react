import logo from "../assets/images/login/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg position-fixed z-3 bg-white border-bottom w-100">
        <div className="container">
          <div className="d-flex align-content-center">
            <Link className to="/">
              <img src={logo} alt="logo" />
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
              <Link className to="/">
                <img src={logo} alt="logo" />
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
            <div className="d-flex">
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
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
