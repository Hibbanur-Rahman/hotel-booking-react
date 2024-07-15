import { Routes, Route, BrowserRouter } from "react-router-dom";

import DashboardLayout from "./views/userDashboard/dashboardLayout";
import AdminDashboardLayout from './views/adminDashboard/dashboardLayout';
import Layout from "./layout";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="m-0 p-0">
      <Routes>
        <Route exact path="/*" element={<Layout />} />
        <Route exact path="/user/*" element={<DashboardLayout />} />
        <Route exact path="/admin/*" element={<AdminDashboardLayout />} />

      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
