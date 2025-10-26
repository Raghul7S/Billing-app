import { useState } from "react";
import { FaBoxes } from "react-icons/fa";

import "../../pages/styles.css";

export default function AddProduct({ products, setProducts }) {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (product && price) {
      setProducts([...products, { product, price }]);
      setProduct("");
      setPrice("");
    } else {
      alert("Enter all fields");
    }
  };

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
                <input
                  type="text"
                  value={product}
                  placeholder="Product Name"
                  onChange={(e) => setProduct(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Price*</label>
                <input
                  type="number"
                  value={price}
                  min={0}
                  placeholder="Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="confirm-btn" onClick={handleAdd}>
                Confirm
              </button>
            </div>
          </form>
          {products.length > 0 && (
            <>
              <h3>Product list</h3>
              <ul>
                {products.map((item, index) => (
                  <li key={index}>
                    {item.product} - {item.price}%
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </>
    </div>
  );
}
