import { Link } from "react-router";

function TextProductDetail() {
  return (
    <div className="ps-lg-3">
      <h4 className="title text-dark">Nordic Chair</h4>
      <div className="d-flex flex-row my-3">
        <div className="text-warning mb-1 me-2">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fas fa-star-half-alt" />
          <span className="ms-1">4.5</span>
        </div>
      </div>
      <div className="mb-3">
        <span className="h5">1.273.160₫</span>
      </div>
      <p>
        Modern look and quality demo item is a streetwear-inspired collection
        that continues to break away from the conventions of mainstream fashion.
        Made in Italy, these black and brown clothing low-top shirts for men.
      </p>
      <hr />
      <Link to={"/shopping-cart"} className="btn btn-primary shadow-0">
        Thêm vào giỏ hàng
      </Link>
    </div>
  );
}
export default TextProductDetail;
