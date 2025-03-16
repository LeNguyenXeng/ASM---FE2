import { Link } from "react-router";
import crossIcon from "../assets/images/cross.svg";

function ProductHome({ product }) {
  return (
    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
      <div className="product-item">
        <Link to={"/product-detail"}>
          <img src={product.image} className="img-fluid product-thumbnail" />
        </Link>
        <Link to={"/product-detail"} style={{ textDecoration: "none" }}>
          <h3 className="product-title">{product.name}</h3>
        </Link>
        <strong className="product-price">1.273.160₫</strong>
        <Link to={"/shopping-cart"}>
          <span className="icon-cross">
            <img src={crossIcon} className="img-fluid" />
          </span>
        </Link>
      </div>
    </div>
  );
}
export default ProductHome;
