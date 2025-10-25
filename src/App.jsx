import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import SideBar from "./components/Sidebar";
import AddProduct from "./pages/AddProduct";
import AddCustomer from "./pages/AddCustomer";
import Invoice from "./pages/Invoice";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="container">
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<AddProduct />} />
            <Route path="/customers" element={<AddCustomer />} />
            <Route path="/invoice" element={<Invoice />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
