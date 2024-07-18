import { useEffect } from "react";
import { Route, Routes,useNavigate } from "react-router-dom";
import "../../assets/style/userDashboard_css/main.scss";
import '../../assets/style/adminDashboard_css/main.scss';
import DashboardSidebar from "../../components/adminDashboardSidebar";
import Dashboard from "./dashboard";
import Booking from "./booking";
import Profile from "./profile";
import Reviews from "./reviews";
import Setting from "./setting";
import Listing from "./listing";
import AddListing from './addListing'
import HeadingData from "../../components/headingData";
import Navbar from "../../components/navbar";

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
          <Route exact path="/listing" element={<Listing />} />
          <Route exact path="/addListing" element={<AddListing />} />
          <Route exact path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </div>
    </>
  );
};

export default DashboardLayout;
