import { Routes, Route, BrowserRouter } from "react-router-dom";

import DashboardLayout from "./views/userDashboard/dashboardLayout";
import Layout from "./layout";
function App() {
  return (
    <div className="m-0 p-0">
      <Routes>
        <Route exact path="/*" element={<Layout />} />
        <Route exact path="/user/*" element={<DashboardLayout/>}/>
      </Routes>
    </div>
  );
}

export default App;
