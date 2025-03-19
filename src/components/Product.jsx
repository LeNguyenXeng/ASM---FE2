import { Link } from "react-router";
import crossIcon from "../assets/images/cross.svg";

function Product({ product }) {
  return (
    <div className="col-12 col-md-4 col-lg-3 mb-5">
      <Link className="product-item" to={`/product-detail/${product.id}`}>
        <img src={product.image} className="img-fluid product-thumbnail" />
        <h3 className="product-title">{product.name}</h3>
        <strong className="product-price">{product.price}₫</strong>
        <Link to={"/shopping-cart"}>
          <span className="icon-cross">
            <img src={crossIcon} className="img-fluid" />
          </span>
        </Link>
      </Link>
    </div>
  );
}
export default Product;
