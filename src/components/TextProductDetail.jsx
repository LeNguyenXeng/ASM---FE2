import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { addToCart } from "../redux/action";
import { toast } from "react-toastify";
import { useState } from "react";
import formatCurrency from "../consts/formatCurrency.js";

function TextProductDetail({ products }) {
  const [quantity, setQuantity] = useState(1);

  const handleOnChange = (event) => {
    setQuantity(event.target.value);
  };

  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    const productItem = {
      ...products,
      quantity: Number(event.target.value),
    };
    event.stopPropagation();
    event.preventDefault();
    dispatch(addToCart(productItem));
    toast.success("Đã thêm vào giỏ hàng");
  };

  return (
    <div className="ps-lg-3">
      <h4 className="title text-dark" style={{ fontSize: 24 }}>
        {products.name}
      </h4>
      <div className="mb-3">
        <span className="h6">{formatCurrency(products.price)}</span>
      </div>
      <p style={{ fontSize: 15 }}>{products.description}</p>
      <div className="mb-4">
        <label htmlFor="quantity" className="form-label">
          Số lượng:
        </label>
        <input
          type="number"
          min={0}
          value={quantity}
          className="form-control"
          style={{ width: 80 }}
          onChange={handleOnChange}
        />
      </div>

      <hr />
      <button
        onClick={handleAddToCart}
        className="btn btn-primary shadow-0"
        disabled={quantity == 0}
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
}
export default TextProductDetail;
