import { FaBoxes } from "react-icons/fa";

import "../../pages/styles.css";

export default function Invoice() {
  return (
    <div className="main">
      <>
        <div className="form-header">
          <span>
            <FaBoxes color="#c1c1c1" className="icon" />
          </span>
          <span className="title">Invoice</span>
        </div>
        <div className="form-container">
          <form className="employee-form">
            <div className="form-row">
              <div className="form-group">
                <label>Product Name*</label>
                <input type="text" placeholder="Product Name" />
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input type="text" placeholder="1" />
              </div>
              <div className="form-group">
                <label>Price*</label>
                <input type="text" placeholder="Price" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Customer Name*</label>
                <input type="text" placeholder="Customer Name" />
              </div>
              <div className="form-group">
                <label>Discount*</label>
                <input type="text" placeholder="Discount" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Grant Total*</label>
                <input disabled type="text" placeholder="Grant Total" />
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn">
                Cancel
              </button>
              <button type="submit" className="confirm-btn">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
}
