import "../assets/style/login_css/style.css";
import loginImg from "../assets/images/login/login.jpg";
import { useState } from "react";
const Login = () => {
  const [isLoginShow, setIsLoginShow] = useState(true);
  const [isRegisterShow, setIsRegisterShow] = useState(false);
  const [isLoginPasswordShow,setIsLoginPasswordShow]=useState(false);
  const [isRegisterPasswordShow,setIsRegisterPasswordShow]=useState(false);
  const [isRegisterRepeatPasswordShow,setIsRegisterRepeatPasswordShow]=useState(false);

  const handleLoginShow = () => {
    setIsLoginShow(true);
    setIsRegisterShow(false);
  };
  const handleRegisterShow = () => {
    setIsLoginShow(false);
    setIsRegisterShow(true)
  };

  const handleLoginPasswordShow=()=>{
    setIsLoginPasswordShow(!isLoginPasswordShow);
  }
  return (
    <div className="container-fluid bg-light overflow-x-hidden">
      <section className="vh-100" style={{ paddingTop: "0px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src={loginImg}
                alt="Login image"
                className="w-100 vh-100"
                style={{ objectFit: "cover", objectPosition: "left" }}
              />
            </div>
            <div className="col-sm-6 text-black">
              <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="d-block border p-4 rounded">
                  <ul
                    className="list-unstyled mb-3 d-flex"
                    id="ex1"
                    role="tablist"
                  >
                    <div className="pe-1 w-50 text-center login">
                      <div
                        className={`nav-link btn-class loginAnchor  ${isLoginShow?'active':''}`}
                        onClick={handleLoginShow}
                        style={{cursor:'pointer'}}
                      >
                        Login
                      </div>
                    </div>
                    <div className="pe-1 w-50 text-center login">
                      <div
                        className={`nav-link btn-class registerAnchor ${isRegisterShow?'active':''}`}
                        onClick={handleRegisterShow}
                        style={{cursor:'pointer'}}
                      >
                        Register
                      </div>
                    </div>
                  </ul>
                  <div className="tab-content">
                    {/* ======================= login form section ====================== */}
                    {isLoginShow ? (
                      <div
                        className="tab-pane fade show active"
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="tab-login"
                      >
                        <form action="/login" method="post">
                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="loginName"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                            />
                            {/* <label className="form-label" htmlFor="loginName">
                              Email
                            </label> */}
                          </div>
                          <div className="form-outline mb-4 d-flex password align-items-center position-relative">
                            <i className={`la  ${isLoginPasswordShow?'la-eye-slash':'la-eye'} w-auto position-absolute`} onClick={handleLoginPasswordShow} />
                            <input
                              type={`${isLoginPasswordShow?'text':'password'}`}
                              id="loginPassword"
                              className="form-control"
                              name="password"
                              placeholder="Password"
                            />
                            {/* <label
                              className="form-label"
                              htmlFor="loginPassword"
                            >
                              Password
                            </label> */}
                          </div>
                          <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center">
                              <div className="form-check mb-3 mb-md-0">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                  id="loginCheck"
                                  defaultChecked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="loginCheck"
                                >
                                  {" "}
                                  Remember me
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center">
                              <a href="#!">Forgot password?</a>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="custom-btn w-100 mb-4"
                          >
                            Sign in
                          </button>
                        </form>
                      </div>
                    ) : (
                      ""
                    )}

                    {/* ======================= signup or register form section ====================== */}
                    {isRegisterShow ? (
                      <div
                        className="tab-pane show fade active"
                        id="pills-register"
                        role="tabpanel"
                        aria-labelledby="tab-register"
                      >
                        <form action="/signup" method="post">
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="registerName"
                              className="form-control"
                              name="name"
                              placeholder="Name"
                            />
                            {/* <label
                              className="form-label"
                              htmlFor="registerName"
                            >
                              Name
                            </label> */}
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="registerEmail"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                            />
                            {/* <label
                              className="form-label"
                              htmlFor="registerEmail"
                            >
                              Email
                            </label> */}
                          </div>
                          <div className="form-outline mb-4 d-flex password align-items-center position-relative">
                          <i className={`la  ${isRegisterPasswordShow?'la-eye-slash':'la-eye'} w-auto position-absolute`} onClick={()=>{setIsRegisterPasswordShow(!isRegisterPasswordShow)}} />
                          <input
                              type={`${isRegisterPasswordShow?'text':'password'}`}
                              id="registerPassword"
                              className="form-control"
                              name="password"
                              placeholder="Password"
                            />
                            {/* <label
                              className="form-label"
                              htmlFor="registerPassword"
                            >
                              Password
                            </label> */}
                          </div>
                          <div className="form-outline mb-0 d-flex password align-items-center position-relative">
                          <i className={`la  ${isRegisterRepeatPasswordShow?'la-eye-slash':'la-eye'} w-auto position-absolute`} onClick={()=>{setIsRegisterRepeatPasswordShow(!isRegisterRepeatPasswordShow)}} />
                            <input
                              type={`${isRegisterRepeatPasswordShow?'text':'password'}`}
                              id="registerRepeatPassword"
                              className="form-control"
                              name="repeatPassword"
                              placeholder="Repeat Password"
                            />
                            {/* <label
                              className="form-label"
                              htmlFor="registerRepeatPassword"
                            >
                              Repeat password
                            </label> */}
                          </div>
                          <p className="matchingStatement m-0 p-0 mb-3 text-danger" />
                          <div className="form-check d-flex justify-content-center mb-4">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              defaultValue
                              id="registerCheck"
                              defaultChecked
                              aria-describedby="registerCheckHelpText"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="registerCheck"
                            >
                              I have read and agree to the terms
                            </label>
                          </div>
                          <button
                            type="submit"
                            className="custom-btn w-100 mb-3"
                            onclick=" OnToast()"
                            id="signUp"
                          >
                            Sign up
                          </button>
                        </form>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
