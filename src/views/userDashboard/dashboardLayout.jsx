import { Route, Routes } from "react-router-dom";
import "../../assets/style/userDashboard_css/main.scss";
import DashboardSidebar from "../../components/dashboardSidebar";
import Dashboard from "./dashboard";
import Booking from "./booking";
import Profile from "./profile";
import Reviews from "./reviews";
import Wishlist from "./wishlist";
import HeadingData from "../../components/headingData";

const DashboardLayout = () => {
  return (
    <div
      className="row m-0 p-0 d-flex flex-row overflow-y-hidden"
      style={{ height: "100vh" }}
    >
      <DashboardSidebar />
      <div className="col-10 m-0 p-0">
        <HeadingData/>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
