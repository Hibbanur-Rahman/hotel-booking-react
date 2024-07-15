import logo from '../assets/images/userDashboard/logo.png'
import userImg from '../assets/images/userDashboard/userImg.jpg';
const HeadingData = () => {
  return (
    <div className="heading row m-0 p-0 bg-primary pt-4 pb-5">
      <div className="upperNav row m-0 p-0 ps-3">
        <div className="left row col-6 d-flex flex-row justify-content-start align-items-center">
          <img src={logo} alt style={{height:'70px',width:'70px'}}/>
          <div className="search d-flex justify-content-end align-items-center col-8 position-relative">
            <input
              type="text"
              className="form-control p-2"
              placeholder="search"
            />
            <i className="bi bi-search position-absolute me-3" />
          </div>
        </div>
        <div className="right col-6 d-flex justify-content-end align-items-center">
          <div className="notification rounded-5 p-2 d-flex align-items-center justify-content-center me-3">
            <i className="bi bi-bell p-0 m-0" />
            <div className="notificationCount bg-light p-1 d-flex align-items-center justify-content-center position-absolute">
              <p className="p-0 m-0">5</p>
            </div>
          </div>
          <div className="profileImg profileImgLeft rounded-5 overflow-hidden col-4 p-0 d-flex">
            <img src={userImg} alt />
          </div>
          <div className="profileToolPit col-2 position-absolute m-0 p-0 z-1 d-none">
            <div className="card m-0 pt-2 w-auto border-0 overflow-hidden">
              <p className="m-0 p-0 fs-5 fw-bold text-secondary ps-3">
                WELCOME!
              </p>
              <li className="list-unstyled  p-0  ">
                <a
                  href="/myProfile"
                  className="text-decoration-none ps-4 pt-3 pb-3 m-0  text-dark d-flex align-items-center"
                >
                  <i className="la la-user text-dark fs-4" />
                  <p className="m-0 p-0 w-auto ps-2 fs-6">My Profile</p>
                </a>
              </li>
              <li className="list-unstyled  p-0  ">
                <a
                  href="/myBooking"
                  className="text-decoration-none ps-4 pt-3 pb-3 m-0  text-dark d-flex align-items-center"
                >
                  <i className="la la-shopping-cart ext-dark fs-4" />
                  <p className="m-0 p-0 w-auto ps-2 fs-6">My Booking</p>
                </a>
              </li>
              <li className="list-unstyled  p-0  ">
                <a
                  href="/myReviews"
                  className="text-decoration-none ps-4 pt-3 pb-3 m-0  text-dark d-flex align-items-center"
                >
                  <i className="la la-heart text-dark fs-4" />
                  <p className="m-0 p-0 w-auto ps-2 fs-6">My Reviews</p>
                </a>
              </li>
              <li className="list-unstyled  p-0  ">
                <a
                  href="/userSetting"
                  className="text-decoration-none ps-4 pt-3 pb-3 m-0  text-dark d-flex align-items-center"
                >
                  <i className="la la-gear text-dark fs-4" />
                  <p className="m-0 p-0 w-auto ps-2 fs-6">Settings</p>
                </a>
              </li>
              <li className="list-unstyled  p-0  ">
                <a
                  href="/"
                  className="text-decoration-none ps-4 pt-3 pb-3 m-0  text-dark d-flex align-items-center"
                >
                  <i className="la la-power-off text-dark fs-4" />
                  <p className="m-0 p-0 w-auto ps-2 fs-6">Logout</p>
                </a>
              </li>
            </div>
          </div>
          <p className="p-0 m-0 ps-3 text-light">Hibbanur Rahman</p>
        </div>
      </div>
      <div className="lowerNav row m-0 p-0 d-flex align-items-center p-4">
        <div className="col-6 d-flex align-items-center">
          <h2 className="text-light p-0 m-0">Dashboard</h2>
        </div>
        <div className="breadcrumb_items col-6 d-flex align-items-center justify-content-end">
          <nav className="w-auto" aria-label="breadcrumb">
          <ol className="breadcrumb w-auto p-2 rounded-2 m-0">
            <li className="breadcrumb-item">
              <a href="#" className="text-light">Home</a>
            </li>
            <li className="breadcrumb-item text-light" aria-current="page">
              <a href="/userDashboard" className="text-light">Dashboard</a>
            </li>
            <li className="breadcrumb-item active text-light" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>
        </div>
      </div>
    </div>
  );
};

export default HeadingData;
