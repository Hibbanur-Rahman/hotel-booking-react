const MyBooking = () => {
  return (
    <div>
      &lt;&gt;
      <div
        className="contents container-fluid m-0 p-0 "
        style={{ marginLeft: "300px !important" }}
      >
        &lt;%- include('../common/headingData.ejs',{"{"}user:user,page:"My
        Booking"{"}"})%&gt;
        <div className="bookingTable card m-5 p-3 border-0 position-relative">
          <p className="fw-bold">Booking Results</p>
          <table id="example" className="display" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiger</td>
                <td>Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>320800</td>
              </tr>
              <tr>
                <td>Garrett</td>
                <td>Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>170750</td>
              </tr>
              <tr>
                <td>Ashton</td>
                <td>Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>86000</td>
              </tr>
              <tr>
                <td>Cedric</td>
                <td>Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>433060</td>
              </tr>
              <tr>
                <td>Airi</td>
                <td>Satou</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>162700</td>
              </tr>
              <tr>
                <td>Brielle</td>
                <td>Williamson</td>
                <td>Integration Specialist</td>
                <td>New York</td>
                <td>372000</td>
              </tr>
              <tr>
                <td>Herrod</td>
                <td>Chandler</td>
                <td>Sales Assistant</td>
                <td>San Francisco</td>
                <td>137500</td>
              </tr>
              <tr>
                <td>Rhona</td>
                <td>Davidson</td>
                <td>Integration Specialist</td>
                <td>Tokyo</td>
                <td>327900</td>
              </tr>
              <tr>
                <td>Colleen</td>
                <td>Hurst</td>
                <td>Javascript Developer</td>
                <td>San Francisco</td>
                <td>205500</td>
              </tr>
              <tr>
                <td>Sonya</td>
                <td>Frost</td>
                <td>Software Engineer</td>
                <td>Edinburgh</td>
                <td>103600</td>
              </tr>
              <tr>
                <td>Jena</td>
                <td>Gaines</td>
                <td>Office Manager</td>
                <td>London</td>
                <td>90560</td>
              </tr>
              <tr>
                <td>Quinn</td>
                <td>Flynn</td>
                <td>Support Lead</td>
                <td>Edinburgh</td>
                <td>342000</td>
              </tr>
              <tr>
                <td>Charde</td>
                <td>Marshall</td>
                <td>Regional Director</td>
                <td>San Francisco</td>
                <td>470600</td>
              </tr>
              <tr>
                <td>Haley</td>
                <td>Kennedy</td>
                <td>Senior Marketing Designer</td>
                <td>London</td>
                <td>313500</td>
              </tr>
              <tr>
                <td>Tatyana</td>
                <td>Fitzpatrick</td>
                <td>Regional Director</td>
                <td>London</td>
                <td>385750</td>
              </tr>
              <tr>
                <td>Michael</td>
                <td>Silva</td>
                <td>Marketing Designer</td>
                <td>London</td>
                <td>198500</td>
              </tr>
              <tr>
                <td>Paul</td>
                <td>Byrd</td>
                <td>Chief Financial Officer (CFO)</td>
                <td>New York</td>
                <td>725000</td>
              </tr>
              <tr>
                <td>Gloria</td>
                <td>Little</td>
                <td>Systems Administrator</td>
                <td>New York</td>
                <td>237500</td>
              </tr>
              <tr>
                <td>Bradley</td>
                <td>Greer</td>
                <td>Software Engineer</td>
                <td>London</td>
                <td>132000</td>
              </tr>
              <tr>
                <td>Dai</td>
                <td>Rios</td>
                <td>Personnel Lead</td>
                <td>Edinburgh</td>
                <td>217500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default MyBooking;
