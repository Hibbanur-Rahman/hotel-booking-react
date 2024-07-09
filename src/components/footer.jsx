import logo from '../assets/images/home/logo.png'
const Footer = () => {
  return (
    <div>
      {/*================= Footer Section Start ==================*/}
      <footer className="container-fluid pt-5 pb-5">
        <div className="container ">
          <div className="row ">
            <div className="col-md-4 ">
              <img src={logo} alt=" " />
              <div className="d-flex align-items-center mt-5 ">
                <i className="bi bi-envelope text-white pe-4 fs-4 " />
                <a
                  href="mailto:haquedot@gmail.com "
                  className="text-white text-decoration-none fs-6 "
                >
                  hibbanrahmanhyt@gmail.com
                </a>
              </div>
              <div className="d-flex align-items-center ">
                <i className="bi bi-telephone text-white pe-4 fs-4 " />
                <a
                  href="callto:7502461630 "
                  className="text-white text-decoration-none fs-6 "
                >
                  9973152523
                </a>
              </div>
              <div className="d-flexalign-items-center mb-5 ">
                <i className="bi bi-house text-white pe-4 fs-4 " />
                <a href=" " className="text-white text-decoration-none fs-6 ">
                  MANUU, Hyderabad
                </a>
              </div>
            </div>
            <div className="d-blck col-md-4 ">
              <h4 className="text-white ">USEFUL LINKS</h4>
              <div className="row ">
                <div className="d-block col-6 mt-5 ">
                  <p className="text-white text-decoration-none fs-6 ">
                    About Us
                  </p>
                  <p className="text-white text-decoration-none fs-6 ">Rooms</p>
                  <p className="text-white text-decoration-none fs-6 ">
                    Service
                  </p>
                </div>
                <div className="d-block col-6 mt-5 mb-5 ">
                  <p className="text-white text-decoration-none fs-6 ">
                    Contact
                  </p>
                  <p className="text-white text-decoration-none fs-6 ">
                    Gallery
                  </p>
                  <p className="text-white text-decoration-none fs-6 ">Blog</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <h4 className="text-white ">STAY IN TOUCH</h4>
              <div className="input-group mt-5 ">
                <input
                  type="text "
                  className="form-control py-2 "
                  placeholder="Enter your email "
                  aria-label="Recipient 's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="text-white border-0 px-4"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
              <div className="d-flex my-4">
                <a href>
                  <i className="bi bi-facebook text-white pe-4 fs-4" />
                </a>
                <a href>
                  <i className="bi bi-twitter-x text-white pe-4 fs-4" />
                </a>
                <a href>
                  <i className="bi bi-instagram text-white pe-4 fs-4" />
                </a>
                <a href>
                  <i className="bi bi-youtube text-white pe-4 fs-4" />
                </a>
              </div>
            </div>
          </div>
          <hr className="text-white border-1" />
          <div className="d-flex ">
            <i className="bi bi-c-circle text-white pe-2" />
            <p className="text-white">2023 HMZ. All Right Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
