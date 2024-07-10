import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./views/home";
import Login from "./views/login";
import AboutUs from "./views/aboutUs";
import Blog from "./views/blog";
import Contact from "./views/contact";
import Gallery from "./views/gallery";
import Rooms from "./views/rooms";
import Services from "./views/services";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/rooms" element={<Rooms />} />
        <Route exact path="/services" element={<Services />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
