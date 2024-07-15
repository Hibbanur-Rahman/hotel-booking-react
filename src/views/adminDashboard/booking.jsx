const Booking = () => {
  return (
    <div>
      &lt;&gt;
      <div
        className="contents container-fluid m-0 p-0"
        style={{ marginLeft: "300px !important" }}
      >
        <div className="row m-0 p-4">
          <div className="bookingCard card m-0 p-4 border-0">
            <div className="row m-0 p-0 justify-content-between align-items-center">
              <h3 className="fs-5 w-auto p-0 m-0">Booking Requests</h3>
              <select
                className="form-select w-auto m-0 border-1"
                aria-label="select"
              >
                <option selected>All</option>
                <option value={1}>All</option>
                <option value={2}>Approved</option>
                <option value={3}>Pending</option>
                <option value={4}>Cancelled</option>
              </select>
            </div>
            <div className="bookingItems row m-0 p-0 pt-4">
              <div className="col-8 p-0">
                <div className="row m-0 p-0">
                  <div className="profile overflow-hidden d-flex   w-auto">
                    <img
                      src="../../images/adminDashboard/userImg.jpg"
                      alt
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div className="col-10">
                    <h4 className="m-0 p-0 fs-6 fw-bold">
                      Dumpling Baby India Bista
                    </h4>
                    <div className="row m-0 p-0 pt-4">
                      <div className="col-4 m-0 p-0">
                        <p> Booking Date:</p>
                        <p>Persions:</p>
                        <p>Price:</p>
                        <p>Email:</p>
                        <p>Phone:</p>
                        <p>Client:</p>
                        <p>Payment Status</p>
                      </div>
                      <div className="col-8 m-0 p-0">
                        <p>11.03.2020-14.04.2020</p>
                        <p>2 Peoples</p>
                        <p>$124</p>
                        <p>hibbanrahmanhyt@gmail.com</p>
                        <p>+91 9973152523</p>
                        <p>Alex</p>
                        <div className="row m-0 p-0">
                          <button className="btn btn-primary disabled w-auto p-1">
                            Pending
                          </button>
                          <button className="btn btn-danger disabled m-0 ms-2 p-1 w-auto">
                            Unpaid
                          </button>
                        </div>
                      </div>
                      <button className="btn btn-outline-secondary border border-1 w-auto m-0">
                        Send Message <i className="la la-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row m-0 p-0 justify-content-end">
                  <button className="btn btn-danger w-auto me-1">
                    {" "}
                    <i className="la la-times-circle" /> Cancel
                  </button>
                  <button className="btn btn-success w-auto ms-1">
                    {" "}
                    <i className="bi bi-check-circle" /> Approve
                  </button>
                </div>
              </div>
            </div>
            <div className="bookingItems row m-0 p-0 pt-4">
              <div className="col-8 p-0">
                <div className="row m-0 p-0">
                  <div className="profile overflow-hidden d-flex   w-auto">
                    <img
                      src="../../images/adminDashboard/userImg.jpg"
                      alt
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div className="col-10">
                    <h4 className="m-0 p-0 fs-6 fw-bold">
                      Dumpling Baby India Bista
                    </h4>
                    <div className="row m-0 p-0 pt-4">
                      <div className="col-4 m-0 p-0">
                        <p> Booking Date:</p>
                        <p>Persions:</p>
                        <p>Price:</p>
                        <p>Email:</p>
                        <p>Phone:</p>
                        <p>Client:</p>
                        <p>Payment Status</p>
                      </div>
                      <div className="col-8 m-0 p-0">
                        <p>11.03.2020-14.04.2020</p>
                        <p>2 Peoples</p>
                        <p>$124</p>
                        <p>hibbanrahmanhyt@gmail.com</p>
                        <p>+91 9973152523</p>
                        <p>Alex</p>
                        <div className="row m-0 p-0">
                          {/* <button class="btn btn-primary disabled w-auto p-1">Pending</button>
                          <button class="btn btn-danger disabled m-0 ms-2 p-1 w-auto">Unpaid</button> */}
                          <button className="btn btn-success disabled w-auto p-1">
                            Approved
                          </button>
                        </div>
                      </div>
                      <button className="btn btn-outline-secondary border border-1 w-auto m-0">
                        Send Message <i className="la la-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row m-0 p-0 justify-content-end">
                  <button className="btn btn-danger w-auto me-1">
                    {" "}
                    <i className="la la-times-circle" /> Cancel
                  </button>
                  {/* <button class="btn btn-success w-auto ms-1"> <i class="bi bi-check-circle"></i> Approve</button> */}
                </div>
              </div>
            </div>
            <div className="bookingItems row m-0 p-0 pt-4">
              <div className="col-8 p-0">
                <div className="row m-0 p-0">
                  <div className="profile overflow-hidden d-flex   w-auto">
                    <img
                      src="../../images/adminDashboard/userImg.jpg"
                      alt
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div className="col-10">
                    <h4 className="m-0 p-0 fs-6 fw-bold">
                      Dumpling Baby India Bista
                    </h4>
                    <div className="row m-0 p-0 pt-4">
                      <div className="col-4 m-0 p-0">
                        <p> Booking Date:</p>
                        <p>Persions:</p>
                        <p>Price:</p>
                        <p>Email:</p>
                        <p>Phone:</p>
                        <p>Client:</p>
                        <p>Payment Status</p>
                      </div>
                      <div className="col-8 m-0 p-0">
                        <p>11.03.2020-14.04.2020</p>
                        <p>2 Peoples</p>
                        <p>$124</p>
                        <p>hibbanrahmanhyt@gmail.com</p>
                        <p>+91 9973152523</p>
                        <p>Alex</p>
                        <div className="row m-0 p-0">
                          <button className="btn btn-primary disabled w-auto p-1">
                            Pending
                          </button>
                          <button className="btn btn-danger disabled m-0 ms-2 p-1 w-auto">
                            Unpaid
                          </button>
                        </div>
                      </div>
                      <button className="btn btn-outline-secondary border border-1 w-auto m-0">
                        Send Message <i className="la la-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row m-0 p-0 justify-content-end">
                  <button className="btn btn-danger w-auto me-1">
                    {" "}
                    <i className="la la-times-circle" /> Cancel
                  </button>
                  <button className="btn btn-success w-auto ms-1">
                    {" "}
                    <i className="bi bi-check-circle" /> Approve
                  </button>
                </div>
              </div>
            </div>
            <div className="bookingItems row m-0 p-0 pt-4">
              <div className="col-8 p-0">
                <div className="row m-0 p-0">
                  <div className="profile overflow-hidden d-flex   w-auto">
                    <img
                      src="../../images/adminDashboard/userImg.jpg"
                      alt
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div className="col-10">
                    <h4 className="m-0 p-0 fs-6 fw-bold">
                      Dumpling Baby India Bista
                    </h4>
                    <div className="row m-0 p-0 pt-4">
                      <div className="col-4 m-0 p-0">
                        <p> Booking Date:</p>
                        <p>Persions:</p>
                        <p>Price:</p>
                        <p>Email:</p>
                        <p>Phone:</p>
                        <p>Client:</p>
                        <p>Payment Status</p>
                      </div>
                      <div className="col-8 m-0 p-0">
                        <p>11.03.2020-14.04.2020</p>
                        <p>2 Peoples</p>
                        <p>$124</p>
                        <p>hibbanrahmanhyt@gmail.com</p>
                        <p>+91 9973152523</p>
                        <p>Alex</p>
                        <div className="row m-0 p-0">
                          <button className="btn btn-primary disabled w-auto p-1">
                            Pending
                          </button>
                          <button className="btn btn-danger disabled m-0 ms-2 p-1 w-auto">
                            Unpaid
                          </button>
                        </div>
                      </div>
                      <button className="btn btn-outline-secondary border border-1 w-auto m-0">
                        Send Message <i className="la la-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row m-0 p-0 justify-content-end">
                  <button className="btn btn-danger w-auto me-1">
                    {" "}
                    <i className="la la-times-circle" /> Cancel
                  </button>
                  <button className="btn btn-success w-auto ms-1">
                    {" "}
                    <i className="bi bi-check-circle" /> Approve
                  </button>
                </div>
              </div>
            </div>
            <div className="bookingItems row m-0 p-0 pt-4">
              <div className="col-8 p-0">
                <div className="row m-0 p-0">
                  <div className="profile overflow-hidden d-flex   w-auto">
                    <img
                      src="../../images/adminDashboard/userImg.jpg"
                      alt
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <div className="col-10">
                    <h4 className="m-0 p-0 fs-6 fw-bold">
                      Dumpling Baby India Bista
                    </h4>
                    <div className="row m-0 p-0 pt-4">
                      <div className="col-4 m-0 p-0">
                        <p> Booking Date:</p>
                        <p>Persions:</p>
                        <p>Price:</p>
                        <p>Email:</p>
                        <p>Phone:</p>
                        <p>Client:</p>
                        <p>Payment Status</p>
                      </div>
                      <div className="col-8 m-0 p-0">
                        <p>11.03.2020-14.04.2020</p>
                        <p>2 Peoples</p>
                        <p>$124</p>
                        <p>hibbanrahmanhyt@gmail.com</p>
                        <p>+91 9973152523</p>
                        <p>Alex</p>
                        <div className="row m-0 p-0">
                          <button className="btn btn-danger disabled w-auto p-1">
                            Canceled
                          </button>
                          {/* <button class="btn btn-primary disabled w-auto p-1">Pending</button>
                          <button class="btn btn-danger disabled m-0 ms-2 p-1 w-auto">Unpaid</button> */}
                        </div>
                      </div>
                      <button className="btn btn-outline-secondary border border-1 w-auto m-0">
                        Send Message <i className="la la-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row m-0 p-0 justify-content-end">
                  {/* <button class="btn btn-danger w-auto me-1"> <i class="la la-times-circle"></i> Cancel</button>
                  <button class="btn btn-success w-auto ms-1"> <i class="bi bi-check-circle"></i> Approve</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Booking;
