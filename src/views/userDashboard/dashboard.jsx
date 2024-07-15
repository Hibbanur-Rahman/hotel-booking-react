const Dashboard = () => {
  return (
    <div
      className=" m-0 p-0 overflow-y-scroll"
    >
      <div className="infoList row m-0 p-3 pb-5 bg-primary pt-5">
        <div className="col-md-3  col-12 p-3 pt-0 pb-0">
          <div className="TotalBooking card col-12 p-4 ps-1 bg-light d-flex flex-row align-items-center justify-content-center">
            <div className="icon bg-primary d-flex rounded-4 align-items-center justify-content-center">
              <i className="bi bi-cart text-light" />
            </div>
            <div className="col-7 ps-3">
              <p className="m-0">Total Booking</p>
              <p className="m-0">44</p>
            </div>
          </div>
        </div>
        <div className="col-md-3  col-12 p-3 pt-0 pb-0">
          <div className="wishlist card col-12 p-4 ps-1 bg-light d-flex flex-row align-items-center justify-content-center">
            <div
              className="icon d-flex rounded-4 align-items-center justify-content-center"
              style={{ backgroundColor: "rgb(0, 207, 207)" }}
            >
              <i className="bi bi-bookmark text-light" />
            </div>
            <div className="col-7 ps-3">
              <p className="m-0">Wishlist</p>
              <p className="m-0">15</p>
            </div>
          </div>
        </div>
        <div className="col-md-3  col-12 p-3 pt-0 pb-0">
          <div className="TotalTravel card col-12 p-4 ps-1 bg-light d-flex flex-row align-items-center justify-content-center">
            <div
              className="icon d-flex rounded-4 align-items-center justify-content-center"
              style={{ backgroundColor: "rgb(244, 181, 6)" }}
            >
              <i className="bi bi-airplane text-light" />
            </div>
            <div className="col-7 ps-3">
              <p className="m-0">Total Travel</p>
              <p className="m-0">25</p>
            </div>
          </div>
        </div>
        <div className="col-md-3  col-12 p-3 pt-0 pb-0">
          <div className="Reviews card col-12 p-4 ps-1 bg-light d-flex flex-row align-items-center justify-content-center">
            <div
              className="icon d-flex rounded-4 align-items-center justify-content-center"
              style={{ backgroundColor: "rgb(159, 0, 207)" }}
            >
              <i className="bi bi-star-fill text-light" />
            </div>
            <div className="col-7 ps-3">
              <p className="m-0">Reviews</p>
              <p className="m-0">20</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row m-0 p-3 position-relative"
        style={{ marginTop: "-150px !important" }}
      >
        <div className="col-lg-6 responsive-column--m">
          <div className="form-box card bg-light p-4">
            <div className="form-title-wrap">
              <h3 className="title fs-4">Statics Results</h3>
            </div>
            <div className="form-content">
              <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                  <div className />
                </div>
                <div className="chartjs-size-monitor-shrink">
                  <div className />
                </div>
              </div>
              <canvas
                id="bar-chart"
                width={641}
                height={350}
                style={{ display: "block", height: 256, width: 513 }}
                className="chartjs-render-monitor"
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="NotificationList card bg-light">
            <div className="row m-0 p-0 justify-content-between p-3">
              <p className="justify-content-start col-10 fw-bold m-0 p-0">
                Notifications
              </p>
              <div className="iconCheckbox d-flex justify-content-center align-items-center rounded-2">
                <i className="bi bi-check2-square" />
              </div>
            </div>
            <div className="card row d-flex flex-row m-0 p-3 border border-bottom-0 border-start-0 border-end-0 rounded-0">
              <div className="col-2 icon bg-primary rounded-5 d-flex align-items-center justify-content-center">
                <i className="bi bi-bell text-light fs-5" />
              </div>
              <div className="col-9 ps-3">
                <p className="fw-bold m-0 fs-6">Group Trip - Available</p>
                <p className="p-0 m-0">2 min ago</p>
              </div>
              <div className="iconCheckbox listCheckBox d-flex justify-content-center align-items-center rounded-2 ms-4">
                <i className="bi bi-check2-square" />
              </div>
            </div>
            <div className="card row d-flex flex-row m-0 p-3 border border-bottom-0 border-start-0 border-end-0 rounded-0">
              <div className="col-2 icon bg-primary rounded-5 d-flex align-items-center justify-content-center">
                <i className="bi bi-bell text-light fs-5" />
              </div>
              <div className="col-9 ps-3">
                <p className="fw-bold m-0 fs-6">Group Trip - Available</p>
                <p className="p-0 m-0">2 min ago</p>
              </div>
              <div className="iconCheckbox listCheckBox d-flex justify-content-center align-items-center rounded-2 ms-4">
                <i className="bi bi-check2-square" />
              </div>
            </div>
            <div className="card row d-flex flex-row m-0 p-3 border border-bottom-0 border-start-0 border-end-0 rounded-0">
              <div className="col-2 icon bg-primary rounded-5 d-flex align-items-center justify-content-center">
                <i className="bi bi-bell text-light fs-5" />
              </div>
              <div className="col-9 ps-3">
                <p className="fw-bold m-0 fs-6">Group Trip - Available</p>
                <p className="p-0 m-0">2 min ago</p>
              </div>
              <div className="iconCheckbox listCheckBox d-flex justify-content-center align-items-center rounded-2 ms-4">
                <i className="bi bi-check2-square" />
              </div>
            </div>
            <div className="card row d-flex flex-row m-0 p-3 border border-bottom-0 border-start-0 border-end-0 rounded-0">
              <div className="col-2 icon bg-primary rounded-5 d-flex align-items-center justify-content-center">
                <i className="bi bi-bell text-light fs-5" />
              </div>
              <div className="col-9 ps-3">
                <p className="fw-bold m-0 fs-6">Group Trip - Available</p>
                <p className="p-0 m-0">2 min ago</p>
              </div>
              <div className="iconCheckbox listCheckBox d-flex justify-content-center align-items-center rounded-2 ms-4">
                <i className="bi bi-check2-square" />
              </div>
            </div>
            <div className="card row d-flex flex-row m-0 p-3 border border-bottom-0 border-start-0 border-end-0 rounded-0">
              <div className="col-2 icon bg-primary rounded-5 d-flex align-items-center justify-content-center">
                <i className="bi bi-bell text-light fs-5" />
              </div>
              <div className="col-9 ps-3">
                <p className="fw-bold m-0 fs-6">Group Trip - Available</p>
                <p className="p-0 m-0">2 min ago</p>
              </div>
              <div className="iconCheckbox listCheckBox d-flex justify-content-center align-items-center rounded-2 ms-4">
                <i className="bi bi-check2-square" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-0 p-3">
        <div className="col-6 messageAlert">
          <div className="card p-3">
            <div className="taskHead pb-4">
              <p className="m-0 p-0 fw-bold">Tasks</p>
            </div>
            <div
              className="alert alert-success alert-dismissible fade show d-flex  align-items-center p-2 "
              role="alert"
            >
              <i className="bi bi-check2 col-1" />
              <p className="m-0 p-0 col-8">
                Your booking <strong>Shimla to Goa</strong> has been done!
              </p>
              <button
                type="button"
                className="btn-close m-0"
                data-bs-dismiss="alert"
                aria-label="Close"
              />
            </div>
            <div
              className="alert alert-success alert-dismissible fade show d-flex  align-items-center p-2 "
              role="alert"
            >
              <i className="bi bi-check2 col-1" />
              <p className="m-0 p-0 col-8">
                Your booking <strong>Shimla to Goa</strong> has been done!
              </p>
              <button
                type="button"
                className="btn-close m-0"
                data-bs-dismiss="alert"
                aria-label="Close"
              />
            </div>
            <div
              className="alert alert-success alert-dismissible fade show d-flex  align-items-center p-2 "
              role="alert"
            >
              <i className="bi bi-check2 col-1" />
              <p className="m-0 p-0 col-8">
                Your booking <strong>Shimla to Goa</strong> has been done!
              </p>
              <button
                type="button"
                className="btn-close m-0"
                data-bs-dismiss="alert"
                aria-label="Close"
              />
            </div>
            <div
              className="alert alert-success alert-dismissible fade show d-flex  align-items-center p-2 "
              role="alert"
            >
              <i className="bi bi-check2 col-1" />
              <p className="m-0 p-0 col-8">
                Your booking <strong>Shimla to Goa</strong> has been done!
              </p>
              <button
                type="button"
                className="btn-close m-0"
                data-bs-dismiss="alert"
                aria-label="Close"
              />
            </div>
            <div
              className="alert alert-success alert-dismissible fade show d-flex  align-items-center p-2 "
              role="alert"
            >
              <i className="bi bi-check2 col-1" />
              <p className="m-0 p-0 col-8">
                Your booking <strong>Shimla to Goa</strong> has been done!
              </p>
              <button
                type="button"
                className="btn-close m-0"
                data-bs-dismiss="alert"
                aria-label="Close"
              />
            </div>
            <div
              className="alert alert-success alert-dismissible fade show d-flex  align-items-center p-2 "
              role="alert"
            >
              <i className="bi bi-check2 col-1" />
              <p className="m-0 p-0 col-8">
                Your booking <strong>Shimla to Goa</strong> has been done!
              </p>
              <button
                type="button"
                className="btn-close m-0"
                data-bs-dismiss="alert"
                aria-label="Close"
              />
            </div>
            <div
              className="alert alert-success alert-dismissible fade show d-flex  align-items-center p-2 "
              role="alert"
            >
              <i className="bi bi-check2 col-1" />
              <p className="m-0 p-0 col-8">
                Your booking <strong>Shimla to Goa</strong> has been done!
              </p>
              <button
                type="button"
                className="btn-close m-0"
                data-bs-dismiss="alert"
                aria-label="Close"
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card paymentDetails">
            <div className="ordersHead p-3 pb-4">
              <p className="p-0 fw-bold">Orders</p>
            </div>
            <div className="row m-0 p-3 border border-1 border-bottom-0 border-end-0 border-start-0 d-flex justify-content-between align-items-center">
              <div className="row m-0 p-0 col-8">
                <p className=" p-0 fw-bold w-auto">
                  3-Night Bahamas- Miami Round-Trip
                </p>
                <div className="row m-0 p-0 w-auto">
                  <div className="paidInfo bg-success rounded-2 w-auto me-3 d-flex justify-content-center align-items-center">
                    <p className="p-0 m-0 text-light">Paid</p>
                  </div>
                  <p className="p-0 m-0 w-auto">Order: #232 Date: 11/05/2019</p>
                </div>
              </div>
              <button className="btn btn-outline-primary w-auto d-flex p-2 m-0">
                Veiw Invoice
              </button>
            </div>
            <div className="row m-0 p-3 border border-1 border-bottom-0 border-end-0 border-start-0 d-flex justify-content-between align-items-center">
              <div className="row m-0 p-0 col-8">
                <p className=" p-0 fw-bold w-auto">
                  3-Night Bahamas- Miami Round-Trip
                </p>
                <div className="row m-0 p-0 w-auto">
                  <div className="paidInfo bg-success rounded-2 w-auto me-3 d-flex justify-content-center align-items-center">
                    <p className="p-0 m-0 text-light">Paid</p>
                  </div>
                  <p className="p-0 m-0 w-auto">Order: #232 Date: 11/05/2019</p>
                </div>
              </div>
              <button className="btn btn-outline-primary w-auto d-flex p-2 m-0">
                Veiw Invoice
              </button>
            </div>
            <div className="row m-0 p-3 border border-1 border-bottom-0 border-end-0 border-start-0 d-flex justify-content-between align-items-center">
              <div className="row m-0 p-0 col-8">
                <p className=" p-0 fw-bold w-auto">
                  3-Night Bahamas- Miami Round-Trip
                </p>
                <div className="row m-0 p-0 w-auto">
                  <div className="paidInfo bg-danger rounded-2 w-auto me-3 d-flex justify-content-center align-items-center">
                    <p className="p-0 m-0 text-light">Unpaid</p>
                  </div>
                  <p className="p-0 m-0 w-auto">Order: #232 Date: 11/05/2019</p>
                </div>
              </div>
              <button className="btn btn-outline-primary w-auto d-flex p-2 m-0">
                complete Transaction
              </button>
            </div>
            <div className="row m-0 p-3 border border-1 border-bottom-0 border-end-0 border-start-0 d-flex justify-content-between align-items-center">
              <div className="row m-0 p-0 col-8">
                <p className=" p-0 fw-bold w-auto">
                  3-Night Bahamas- Miami Round-Trip
                </p>
                <div className="row m-0 p-0 w-auto">
                  <div className="paidInfo bg-success rounded-2 w-auto me-3 d-flex justify-content-center align-items-center">
                    <p className="p-0 m-0 text-light">Paid</p>
                  </div>
                  <p className="p-0 m-0 w-auto">Order: #232 Date: 11/05/2019</p>
                </div>
              </div>
              <button className="btn btn-outline-primary w-auto d-flex p-2 m-0">
                Veiw Invoice
              </button>
            </div>
            <div className="row m-0 p-3 border border-1 border-bottom-0 border-end-0 border-start-0 d-flex justify-content-between align-items-center">
              <div className="row m-0 p-0 col-8">
                <p className=" p-0 fw-bold w-auto">
                  3-Night Bahamas- Miami Round-Trip
                </p>
                <div className="row m-0 p-0 w-auto">
                  <div className="paidInfo bg-success rounded-2 w-auto me-3 d-flex justify-content-center align-items-center">
                    <p className="p-0 m-0 text-light">Paid</p>
                  </div>
                  <p className="p-0 m-0 w-auto">Order: #232 Date: 11/05/2019</p>
                </div>
              </div>
              <button className="btn btn-outline-primary w-auto d-flex p-2 m-0">
                Veiw Invoice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
