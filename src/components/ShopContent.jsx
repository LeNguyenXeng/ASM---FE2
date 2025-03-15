import crossIcon from "../assets/images/cross.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import "../assets/css/product.css";
import toast from "react-hot-toast";

function ShopContent() {
  const [products, setProducts] = useState([]);

  const getList = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
      toast.success("Lỗi");
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="untree_co-section product-section before-footer-section">
      <div className="container">
        <div className="row">
          {/* Start Column 1 */}
          {products.map((product) => (
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img
                  src={product.image}
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">{product.name}</h3>
                <strong className="product-price">{product.price}₫</strong>
                <span className="icon-cross">
                  <img src={crossIcon} className="img-fluid" />
                </span>
              </a>
            </div>
          ))}

          {/* End Column 1 */}
        </div>
      </div>
    </div>
  );
}
export default ShopContent;
