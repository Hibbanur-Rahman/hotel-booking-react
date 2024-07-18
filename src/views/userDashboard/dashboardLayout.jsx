import { Route, Routes,useNavigate } from "react-router-dom";
import "../../assets/style/userDashboard_css/main.scss";
import DashboardSidebar from "../../components/dashboardSidebar";
import Dashboard from "./dashboard";
import Booking from "./booking";
import Profile from "./profile";
import Reviews from "./reviews";
import Wishlist from "./wishlist";
import Setting from "./setting";
import HeadingData from "../../components/headingData";
import Navbar from "../../components/navbar";
import { useEffect } from "react";


const DashboardLayout = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('token')===null){
      navigate('/');
    }
  },[])
  return (
    <>
    <Navbar/>
    <div
      className="row m-0 p-0 d-flex flex-row overflow-y-hidden position-relative"
      style={{ height: "100vh",top:'55px', }}
    >
      <DashboardSidebar />
      <div className="contents col-lg-10 col-12 m-0 p-0">
        {/* <HeadingData/> */}
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </div>
    </>
  );
};

export default DashboardLayout;
