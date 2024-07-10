const Wallet = () => {
  return (
    <div>
      &lt;&gt;
      <div
        className="contents container-fluid m-0 p-0"
        style={{ marginLeft: "300px !important" }}
      >
        &lt;%- include('../common/headingData.ejs',{"{"}user:user,page:"My
        Wallet"{"}"})%&gt;
        <div className="walletContent container m-0 p-0 p-4 pt-0">
          <div className="row m-0 p-0">
            <div className="col-4">
              <div className="card p-2 pt-4 pb-4 border-0">
                <div className="row m-0 p-0 align-items-center">
                  <div className="col-8">
                    <h1 className="m-0 p-0 w-auto fs-1 fw-bold text-secondary">
                      94.50
                    </h1>
                    <p className="m-0 p-0 w-auto text-secondary fs-5">
                      {" "}
                      withdrawal Balance
                    </p>
                  </div>
                  <div className="col-4">
                    <i className="bi bi-cash fs-1 text-primary" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card p-2 pt-4 pb-4 border-0">
                <div className="row m-0 p-0 align-items-center">
                  <div className="col-8">
                    <h1 className="m-0 p-0 w-auto fs-1 fw-bold text-secondary">
                      314.11
                    </h1>
                    <p className="m-0 p-0 w-auto text-secondary fs-5">
                      {" "}
                      Total Earning
                    </p>
                  </div>
                  <div className="col-4">
                    <i className="bi bi-bag fs-6 text-success" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card p-2 pt-4 pb-4 border-0">
                <div className="row m-0 p-0 align-items-center">
                  <div className="col-8">
                    <h1 className="m-0 p-0 w-auto fs-1 fw-bold text-secondary">
                      5
                    </h1>
                    <p className="m-0 p-0 w-auto text-secondary fs-5">
                      {" "}
                      Total Orders
                    </p>
                  </div>
                  <div className="col-4">
                    <i className="bi bi-cart fs-1 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-0 p-0 mt-5 ">
            <div className="col-6 p-3">
              <div className="card p-3 border-0">
                <div className="row m-0 p-0 align-items-center pt-2 pb-2 justify-content-between">
                  <p className="m-0 p-0 fs-5 fw-bold w-auto">Earnings</p>
                  <p className="m-0 p-0 text-secondary w-auto">
                    Fee:<span className="m-0 p-0 text-dark">10%</span>
                  </p>
                </div>
                <table id="myTable" className="row-border">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Fee</th>
                      <th>Fee</th>
                      <th>Net Earning</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-primary">RA0449</td>
                      <td className="text-dark">$89</td>
                      <td className="text-danger">$11,50</td>
                      <td className="text-success">$80.50</td>
                      <td className="text-secondary">05/01/2023</td>
                    </tr>
                    <tr>
                      <td className="text-primary">RA0449</td>
                      <td className="text-dark">$89</td>
                      <td className="text-danger">$11,50</td>
                      <td className="text-success">$80.50</td>
                      <td className="text-secondary">05/01/2023</td>
                    </tr>
                    <tr>
                      <td className="text-primary">RA0449</td>
                      <td className="text-dark">$89</td>
                      <td className="text-danger">$11,50</td>
                      <td className="text-success">$80.50</td>
                      <td className="text-secondary">05/01/2023</td>
                    </tr>
                    <tr>
                      <td className="text-primary">RA0449</td>
                      <td className="text-dark">$89</td>
                      <td className="text-danger">$11,50</td>
                      <td className="text-success">$80.50</td>
                      <td className="text-secondary">05/01/2023</td>
                    </tr>
                    <tr>
                      <td className="text-primary">RA0449</td>
                      <td className="text-dark">$89</td>
                      <td className="text-danger">$11,50</td>
                      <td className="text-success">$80.50</td>
                      <td className="text-secondary">05/01/2023</td>
                    </tr>
                    <tr>
                      <td className="text-primary">RA0449</td>
                      <td className="text-dark">$89</td>
                      <td className="text-danger">$11,50</td>
                      <td className="text-success">$80.50</td>
                      <td className="text-secondary">05/01/2023</td>
                    </tr>
                    <tr>
                      <td className="text-primary">RA0449</td>
                      <td className="text-dark">$89</td>
                      <td className="text-danger">$11,50</td>
                      <td className="text-success">$80.50</td>
                      <td className="text-secondary">05/01/2023</td>
                    </tr>
                    <tr>
                      <td className="text-primary">RA0449</td>
                      <td className="text-dark">$89</td>
                      <td className="text-danger">$11,50</td>
                      <td className="text-success">$80.50</td>
                      <td className="text-secondary">05/01/2023</td>
                    </tr>
                    <tr>
                      <td className="text-primary">RA0449</td>
                      <td className="text-dark">$89</td>
                      <td className="text-danger">$11,50</td>
                      <td className="text-success">$80.50</td>
                      <td className="text-secondary">05/01/2023</td>
                    </tr>
                    <tr>
                      <td className="text-primary">RA0449</td>
                      <td className="text-dark">$89</td>
                      <td className="text-danger">$11,50</td>
                      <td className="text-success">$80.50</td>
                      <td className="text-secondary">05/01/2023</td>
                    </tr>
                    <tr>
                      <td className="text-primary">RA0449</td>
                      <td className="text-dark">$89</td>
                      <td className="text-danger">$11,50</td>
                      <td className="text-success">$80.50</td>
                      <td className="text-secondary">05/01/2023</td>
                    </tr>
                    <tr>
                      <td className="text-primary">RA0449</td>
                      <td className="text-dark">$89</td>
                      <td className="text-danger">$11,50</td>
                      <td className="text-success">$80.50</td>
                      <td className="text-secondary">05/01/2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-6 p-3">
              <div className="card p-3 border-0">
                <div className="row m-0 p-0 align-items-center pt-2 pb-2 justify-content-between">
                  <p className="m-0 p-0 fs-5 fw-bold w-auto">Payout History</p>
                  <p className="m-0 p-0 text-secondary w-auto">
                    Fee:<span className="m-0 p-0 text-dark">10%</span>
                  </p>
                </div>
                <table id="payOutHistoryTable" className="row-border">
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Item</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-secondary">Udin Wayang</td>
                      <td className="text-secondary">Nasi Padang</td>
                      <td className="text-secondary">20/12/23</td>
                      <td className>
                        <button
                          className="btn btn-success m-0 p-1 fs-6"
                          style={{ fontSize: "13px !important" }}
                        >
                          Paid
                        </button>
                      </td>
                      <td className>
                        <button className="btn btn-primary"> Invoice</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Udin Wayang</td>
                      <td className="text-secondary">Nasi Padang</td>
                      <td className="text-secondary">20/12/23</td>
                      <td className>
                        <button
                          className="btn btn-success m-0 p-1 fs-6"
                          style={{ fontSize: "13px !important" }}
                        >
                          Paid
                        </button>
                      </td>
                      <td className>
                        <button className="btn btn-primary"> Invoice</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Udin Wayang</td>
                      <td className="text-secondary">Nasi Padang</td>
                      <td className="text-secondary">20/12/23</td>
                      <td className>
                        <button
                          className="btn btn-success m-0 p-1 fs-6"
                          style={{ fontSize: "13px !important" }}
                        >
                          Paid
                        </button>
                      </td>
                      <td className>
                        <button className="btn btn-primary"> Invoice</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Udin Wayang</td>
                      <td className="text-secondary">Nasi Padang</td>
                      <td className="text-secondary">20/12/23</td>
                      <td className>
                        <button
                          className="btn btn-success m-0 p-1 fs-6"
                          style={{ fontSize: "13px !important" }}
                        >
                          Paid
                        </button>
                      </td>
                      <td className>
                        <button className="btn btn-primary"> Invoice</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Udin Wayang</td>
                      <td className="text-secondary">Nasi Padang</td>
                      <td className="text-secondary">20/12/23</td>
                      <td className>
                        <button
                          className="btn btn-success m-0 p-1 fs-6"
                          style={{ fontSize: "13px !important" }}
                        >
                          Paid
                        </button>
                      </td>
                      <td className>
                        <button className="btn btn-primary"> Invoice</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Udin Wayang</td>
                      <td className="text-secondary">Nasi Padang</td>
                      <td className="text-secondary">20/12/23</td>
                      <td className>
                        <button
                          className="btn btn-success m-0 p-1 fs-6"
                          style={{ fontSize: "13px !important" }}
                        >
                          Paid
                        </button>
                      </td>
                      <td className>
                        <button className="btn btn-primary"> Invoice</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Udin Wayang</td>
                      <td className="text-secondary">Nasi Padang</td>
                      <td className="text-secondary">20/12/23</td>
                      <td className>
                        <button
                          className="btn btn-success m-0 p-1 fs-6"
                          style={{ fontSize: "13px !important" }}
                        >
                          Paid
                        </button>
                      </td>
                      <td className>
                        <button className="btn btn-primary"> Invoice</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Udin Wayang</td>
                      <td className="text-secondary">Nasi Padang</td>
                      <td className="text-secondary">20/12/23</td>
                      <td className>
                        <button
                          className="btn btn-success m-0 p-1 fs-6"
                          style={{ fontSize: "13px !important" }}
                        >
                          Paid
                        </button>
                      </td>
                      <td className>
                        <button className="btn btn-primary"> Invoice</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Udin Wayang</td>
                      <td className="text-secondary">Nasi Padang</td>
                      <td className="text-secondary">20/12/23</td>
                      <td className>
                        <button
                          className="btn btn-success m-0 p-1 fs-6"
                          style={{ fontSize: "13px !important" }}
                        >
                          Paid
                        </button>
                      </td>
                      <td className>
                        <button className="btn btn-primary"> Invoice</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Udin Wayang</td>
                      <td className="text-secondary">Nasi Padang</td>
                      <td className="text-secondary">20/12/23</td>
                      <td className>
                        <button
                          className="btn btn-success m-0 p-1 fs-6"
                          style={{ fontSize: "13px !important" }}
                        >
                          Paid
                        </button>
                      </td>
                      <td className>
                        <button className="btn btn-primary"> Invoice</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Udin Wayang</td>
                      <td className="text-secondary">Nasi Padang</td>
                      <td className="text-secondary">20/12/23</td>
                      <td className>
                        <button
                          className="btn btn-success m-0 p-1 fs-6"
                          style={{ fontSize: "13px !important" }}
                        >
                          Paid
                        </button>
                      </td>
                      <td className>
                        <button className="btn btn-primary"> Invoice</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Udin Wayang</td>
                      <td className="text-secondary">Nasi Padang</td>
                      <td className="text-secondary">20/12/23</td>
                      <td className>
                        <button
                          className="btn btn-success m-0 p-1 fs-6"
                          style={{ fontSize: "13px !important" }}
                        >
                          Paid
                        </button>
                      </td>
                      <td className>
                        <button className="btn btn-primary"> Invoice</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
