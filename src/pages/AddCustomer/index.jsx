import { IoPerson } from "react-icons/io5";

import "../../pages/styles.css";

export default function AddCustomer() {
  return (
    <div className="main">
      <>
        <div className="form-header">
          <span>
            <IoPerson color="#c1c1c1" size={20} />
          </span>
          <span className="title">Customer Information</span>
        </div>
        <div className="form-container">
          <form className="employee-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name*</label>
                <input type="text" placeholder="Enter name" />
              </div>
              <div className="form-group">
                <label>Discount*</label>
                <input type="text" placeholder="Discount" />
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
