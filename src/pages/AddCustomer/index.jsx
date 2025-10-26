import { useState } from "react";
import { IoPerson } from "react-icons/io5";

import "../../pages/styles.css";

export default function AddCustomer({ customers, setCustomers }) {
  const [name, setName] = useState("");
  const [discount, setDiscount] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (name && discount) {
      setCustomers([...customers, { name, discount }]);
      setName("");
      setDiscount("");
    } else {
      alert("Enter all fields");
    }
  };

  return (
    <div className="main">
      <div className="form-header">
        <span>
          <IoPerson color="#c1c1c1" size={20} />
        </span>
        <span className="title">Customer Information</span>
      </div>
      <div className="form-container">
        <form className="employee-form" onSubmit={handleAdd}>
          <div className="form-row">
            <div className="form-group">
              <label>Name*</label>
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Discount (%)*</label>
              <input
                type="number"
                max={100}
                min={0}
                placeholder="Discount"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="confirm-btn">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
