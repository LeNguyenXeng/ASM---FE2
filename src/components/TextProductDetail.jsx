import { Link } from "react-router";


function TextProductDetail({ products }) {
  return (
    <div className="ps-lg-3">
      <h4 className="title text-dark" style={{ fontSize: 24 }}>
        {products.name}
      </h4>
      <div className="mb-3">
        <span className="h6">{products.price}₫</span>
      </div>
      <p style={{ fontSize: 15 }}>{products.description}</p>
      <div className="mb-4">
        <label htmlFor="quantity" className="form-label">
          Số lượng:
        </label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          defaultValue={1}
          min={1}
          style={{ width: 80 }}
        />
      </div>

      <hr />
      <Link to={"/shopping-cart"} className="btn btn-primary shadow-0">
        Thêm vào giỏ hàng
      </Link>
    </div>
  );
}
export default TextProductDetail;
