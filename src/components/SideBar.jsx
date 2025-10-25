import React from "react";
import { FaBoxes, FaUser, FaFileInvoice } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./styles.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <h2 className="logo">RS–TECH</h2>

      <div className="sidebar_content">
        <NavLink to="/" className="link">
          <FaBoxes className="icon" />
          Products
        </NavLink>
        <NavLink to="/customers" className="link">
          <FaUser className="icon" />
          Customers
        </NavLink>
        <NavLink to="/invoice" className="link">
          <FaFileInvoice className="icon" />
          Invoice
        </NavLink>
      </div>
    </div>
  );
}
