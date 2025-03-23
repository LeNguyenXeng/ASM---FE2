import { useParams } from "react-router";
import TextProductDetail from "./TextProductDetail";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "../assets/css/productdetail.css";

function ProductDetailCMP() {
  
  

  const { id } = useParams();
  const [products, setProducts] = useState([]);

  const getApi = async (id) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/products/${id}`
      );
      setProducts(data);
    } catch (error) {
      console.log(error);
      toast.error("Không thể gọi API");
    }
  };

  useEffect(() => {
    getApi(id);
  }, [id]);
  return (
    <>
      <section className="py-5 ">
        <div className="container" style={{ marginTop: 70, marginBottom: 40 }}>
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className=" mb-3 d-flex justify-content-center">
                <img className="image-product-detail" src={products.image} />
              </div>
            </aside>
            <main className="col-lg-6">
              <TextProductDetail products={products} />
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProductDetailCMP;
