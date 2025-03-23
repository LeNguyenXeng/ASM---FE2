import { Link } from "react-router";
import crossIcon from "../assets/images/cross.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action";
import { toast, ToastContainer } from "react-toastify";
import formatCurrency from "../consts/formatCurrency";

function Product({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    const productItem = {
      ...product,
      quantity: 1,
    };
    event.stopPropagation();
    event.preventDefault();
    dispatch(addToCart(productItem));
    toast.success("Đã thêm vào giỏ hàng");
  };

  return (
    <div className="col-12 col-md-4 col-lg-3 mb-5">
      <Link className="product-item" to={`/product-detail/${product.id}`}>
        <img src={product.image} className="img-fluid product-thumbnail" />
        <h3 className="product-title">{product.name}</h3>
        <strong className="product-price">
          {formatCurrency(product.price)}
        </strong>
        <div>
          <span onClick={handleAddToCart} className="icon-cross">
            <img src={crossIcon} className="img-fluid" />
          </span>
        </div>
      </Link>
    </div>
  );
}
export default Product;
