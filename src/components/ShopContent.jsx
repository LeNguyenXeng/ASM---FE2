import axios from "axios";
import { useEffect, useState } from "react";
import "../assets/css/product.css";
import toast from "react-hot-toast";
import Product from "./Product";

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
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ShopContent;
