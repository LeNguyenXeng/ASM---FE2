import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";
import crossIcon from "../assets/images/cross.svg";

function ProductSection() {
  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          {/* Start Column 1 */}
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">Khám phá tất cả sản phẩm</h2>
            <p className="mb-4">
              Nhấn vào đây để tìm hiểu thêm về những chiếc ghế tuyệt đẹp, được
              thiết kế tinh tế với chất lượng hàng đầu!
            </p>
            <p>
              <a href="shop.html" className="btn">
                Khám phá
              </a>
            </p>
          </div>
          {/* End Column 1 */}
          {/* Start Column 2 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <div className="product-item">
              <a href="product-detail.html">
                <img src={product1} className="img-fluid product-thumbnail" />
              </a>
              <a href="product-detail.html" style={{ textDecoration: "none" }}>
                <h3 className="product-title">Nordic Chair</h3>
              </a>
              <strong className="product-price">1.273.160₫</strong>
              <a href="cart.html">
                <span className="icon-cross">
                  <img src={crossIcon} className="img-fluid" />
                </span>
              </a>
            </div>
          </div>
          {/* End Column 2 */}
          {/* Start Column 3 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <a className="product-item" href="cart.html">
              <img
                src={product2}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Kruzo Aero Chair</h3>
              <strong className="product-price">1.986.130₫</strong>
              <span className="icon-cross">
                <img src={crossIcon} className="img-fluid" />
              </span>
            </a>
          </div>
          {/* End Column 3 */}
          {/* Start Column 4 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
            <a className="product-item" href="cart.html">
              <img
                src={product3}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Ergonomic Chair</h3>
              <strong className="product-price">1.094.918₫</strong>
              <span className="icon-cross">
                <img src={crossIcon} className="img-fluid" />
              </span>
            </a>
          </div>
          {/* End Column 4 */}
        </div>
      </div>
    </div>
  );
}
export default ProductSection;
