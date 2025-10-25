import { FaBoxes } from "react-icons/fa";

import "../../pages/styles.css";

export default function AddProduct() {
  return (
    <div className="main">
      <>
        <div className="form-header">
          <span>
            <FaBoxes color="#c1c1c1" className="icon" />
          </span>
          <span className="title">Customer Information</span>
        </div>
        <div className="form-container">
          <form className="employee-form">
            <div className="form-row">
              <div className="form-group">
                <label>Product*</label>
                <input type="text" placeholder="Product" />
              </div>
              <div className="form-group">
                <label>Price*</label>
                <input type="text" placeholder="Price" />
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
