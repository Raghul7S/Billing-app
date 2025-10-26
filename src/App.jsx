import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import SideBar from "./components/Sidebar";
import AddProduct from "./pages/AddProduct";
import AddCustomer from "./pages/AddCustomer";
import Invoice from "./pages/Invoice";
import "./index.css";

function App() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <Router>
      <div className="container">
        <SideBar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <AddProduct products={products} setProducts={setProducts} />
              }
            />
            <Route
              path="/customers"
              element={
                <AddCustomer
                  customers={customers}
                  setCustomers={setCustomers}
                />
              }
            />
            <Route
              path="/invoice"
              element={<Invoice customers={customers} products={products} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
