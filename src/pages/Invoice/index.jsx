import { useEffect, useState } from "react";
import { FaBoxes } from "react-icons/fa";
import jsPDF from "jspdf";

import "../../pages/styles.css";

export default function Invoice({ customers, products }) {
  const [customer, setCustomer] = useState("");
  const [discount, setDiscount] = useState(0);
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [price, quantity, discount]);

  const handleCustomer = (e) => {
    const selectedCustomer = customers.find((c) => c.name === e.target.value);
    if (selectedCustomer) {
      setCustomer(selectedCustomer.name);
      setDiscount(selectedCustomer.discount);
    }
  };

  const handleProduct = (e) => {
    const selectedProduct = products.find((p) => p.product === e.target.value);
    if (selectedProduct) {
      setProduct(selectedProduct.product);
      setPrice(selectedProduct.price);
    }
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const downloadInvoice = () => {
    const doc = new jsPDF();
    doc.text(`Invoice`, 10, 10);
    doc.text(`Customer: ${customer}`, 10, 20);
    doc.text(`Product: ${product}`, 10, 30);
    doc.text(`Quantity: ${quantity}`, 10, 40);
    doc.text(`Price: INR ${price}`, 10, 50);
    doc.text(`Discount: ${discount}%`, 10, 60);
    doc.text(`Total: INR ${total}`, 10, 70);
    doc.save(`${customer}_invoice.pdf`);
  };

  const calculateTotal = () => {
    const subTotal = price * quantity;
    const discountAmount = (subTotal * discount) / 100;
    const grantTotal = subTotal - discountAmount;
    setTotal(grantTotal);
  };

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
                <label>Product</label>
                <select value={product} onChange={handleProduct}>
                  <option>Product Name</option>
                  {products.map((p, index) => (
                    <option
                      key={index}
                      value={p.product}
                      onClick={handleProduct}
                    >
                      {p.product}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  placeholder="Qunatity"
                  onChange={handleQuantity}
                />
              </div>
              <div className="form-group">
                <label>Price*</label>
                <input type="text" value={price} disabled />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Customer Name*</label>
                <select onChange={handleCustomer} value={customer}>
                  <option>Select Customer</option>
                  {customers.map((c, index) => (
                    <option key={index} value={c.name} onClick={handleProduct}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Discount*</label>
                <input
                  type="text"
                  value={discount}
                  placeholder="Discount"
                  disabled
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Grant Total*</label>
                <input
                  value={total}
                  type="number"
                  placeholder="Grant Total"
                  disabled
                />
              </div>
            </div>

            <div className="form-actions">
              <button
                type="submit"
                disabled={total === 0}
                className={total > 0 ? "confirm-btn" : "disabled-btn"}
                onClick={downloadInvoice}
              >
                Download Invoice
              </button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
}
