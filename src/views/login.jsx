import "../assets/style/login_css/style.css";
import loginImg from "../assets/images/login/login.jpg";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import DOMAIN from "../../environmentVariables";
import httpStatusCode from "../constants/httpStatusCode";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
const Login = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [isLoginShow, setIsLoginShow] = useState(true);
  const [isRegisterShow, setIsRegisterShow] = useState(false);
  const [isLoginPasswordShow, setIsLoginPasswordShow] = useState(false);
  const [isRegisterPasswordShow, setIsRegisterPasswordShow] = useState(false);
  const [isLoginSubmiting, setIsLoginSubmiting] = useState(false);
  const [isRegisterSubmiting, setIsRegisterSubmiting] = useState(false);
  const [isRegisterRepeatPasswordShow, setIsRegisterRepeatPasswordShow] =
    useState(false);
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });
  const [userRegisterData, setUserRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    role: "user",
  });

  const handleLoginShow = () => {
    setIsLoginShow(true);
    setIsRegisterShow(false);
  };
  const handleRegisterShow = () => {
    setIsLoginShow(false);
    setIsRegisterShow(true);
  };
  const handleLoginPasswordShow = () => {
    setIsLoginPasswordShow(!isLoginPasswordShow);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoginSubmiting(true);
      const response = await axios.post(`${DOMAIN}/login`, userLoginData);
      if (response.status == httpStatusCode.Ok) {
        setIsLoginSubmiting(false);
        toast.success("Login Successfull");
        localStorage.setItem("token", response.data.data.token);
        setUserLoginData({
          email: "",
          password: "",
        });
        const user=response.data.data.user;
        const token=response.data.data.token
        dispatch(login({user,token}))
        if (response.data.data.role === "user") {
          navigate("/user/dashboard");
        } else if (response.data.data.role === "admin") {
          navigate("/admin/dashboard");
        }
      }
    } catch (error) {
      setIsLoginSubmiting(false);
      toast.error("Failed to login");
    }
  };

  const handleChangeLoginInput = (e) => {
    setUserLoginData({ ...userLoginData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userRegisterData.password != userRegisterData.repeatPassword) {
        toast.error("Password and Repeat Password are not same");
        return;
      }
      setIsRegisterSubmiting(true);
      const response = await axios.post(`${DOMAIN}/register`, userRegisterData);
      if (response.status == httpStatusCode.Created) {
        setIsRegisterSubmiting(false);
        toast.success("Register Successfull");
        setUserRegisterData({
          username: "",
          email: "",
          password: "",
          repeatPassword: "",
        });
        setIsRegisterShow(false);
        setIsLoginShow(true);
      }
    } catch (error) {
      setIsRegisterSubmiting(false);
      toast.error("Failed to register");
    }
  };

  const handleRegisterInputChange = (e) => {
    setUserRegisterData({
      ...userRegisterData,
      [e.target.name]: e.target.value,
    });
  };
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
                        className={`nav-link btn-class loginAnchor  ${
                          isLoginShow ? "active" : ""
                        }`}
                        onClick={handleLoginShow}
                        style={{ cursor: "pointer" }}
                      >
                        Login
                      </div>
                    </div>
                    <div className="pe-1 w-50 text-center login">
                      <div
                        className={`nav-link btn-class registerAnchor ${
                          isRegisterShow ? "active" : ""
                        }`}
                        onClick={handleRegisterShow}
                        style={{ cursor: "pointer" }}
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
                        <form method="post" onSubmit={handleChangeLoginInput}>
                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="loginName"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              onChange={handleChangeLoginInput}
                              value={userLoginData.email}
                            />
                            {/* <label className="form-label" htmlFor="loginName">
                              Email
                            </label> */}
                          </div>
                          <div className="form-outline mb-4 d-flex password align-items-center position-relative">
                            <i
                              className={`la  ${
                                isLoginPasswordShow ? "la-eye-slash" : "la-eye"
                              } w-auto position-absolute`}
                              onClick={handleLoginPasswordShow}
                            />
                            <input
                              type={`${
                                isLoginPasswordShow ? "text" : "password"
                              }`}
                              id="loginPassword"
                              className="form-control"
                              name="password"
                              placeholder="Password"
                              onChange={handleChangeLoginInput}
                              value={userLoginData.password}
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
                          {isLoginSubmiting ? (
                            <button className="custom-btn w-100 mb-4" disabled>
                              submiting...
                            </button>
                          ) : (
                            <button
                              className="custom-btn w-100 mb-4"
                              onClick={handleLoginSubmit}
                            >
                              Sign in
                            </button>
                          )}
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
                              name="username"
                              placeholder="Name"
                              onChange={handleRegisterInputChange}
                              value={userRegisterData.username}
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
                              onChange={handleRegisterInputChange}
                              value={userRegisterData.email}
                            />
                            {/* <label
                              className="form-label"
                              htmlFor="registerEmail"
                            >
                              Email
                            </label> */}
                          </div>
                          <div className="form-outline mb-4 d-flex password align-items-center position-relative">
                            <i
                              className={`la  ${
                                isRegisterPasswordShow
                                  ? "la-eye-slash"
                                  : "la-eye"
                              } w-auto position-absolute`}
                              onClick={() => {
                                setIsRegisterPasswordShow(
                                  !isRegisterPasswordShow
                                );
                              }}
                            />
                            <input
                              type={`${
                                isRegisterPasswordShow ? "text" : "password"
                              }`}
                              id="registerPassword"
                              className="form-control"
                              name="password"
                              placeholder="Password"
                              onChange={handleRegisterInputChange}
                              value={userRegisterData.password}
                            />
                            {/* <label
                              className="form-label"
                              htmlFor="registerPassword"
                            >
                              Password
                            </label> */}
                          </div>
                          <div className="form-outline mb-0 d-flex password align-items-center position-relative">
                            <i
                              className={`la  ${
                                isRegisterRepeatPasswordShow
                                  ? "la-eye-slash"
                                  : "la-eye"
                              } w-auto position-absolute`}
                              onClick={() => {
                                setIsRegisterRepeatPasswordShow(
                                  !isRegisterRepeatPasswordShow
                                );
                              }}
                            />
                            <input
                              type={`${
                                isRegisterRepeatPasswordShow
                                  ? "text"
                                  : "password"
                              }`}
                              id="registerRepeatPassword"
                              className="form-control"
                              name="repeatPassword"
                              placeholder="Repeat Password"
                              onChange={handleRegisterInputChange}
                              value={userRegisterData.repeatPassword}
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
                          {isRegisterSubmiting ? (
                            <button className="custom-btn w-100 mb-3" disabled>
                              Submiting ...
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="custom-btn w-100 mb-3"
                              onClick={handleRegisterSubmit}
                            >
                              Sign up
                            </button>
                          )}
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
