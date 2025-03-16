import img from "../assets/images/product-1.png";

function Total() {
  return (
    <div className="untree_co-section before-footer-section">
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12" method="post">
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Hình ảnh</th>
                    <th className="product-name">Tên sản phẩm</th>
                    <th className="product-price">Giá sản phẩm</th>
                    <th className="product-quantity">Số lượng</th>
                    <th className="product-total">Thành tiền</th>
                    <th className="product-remove">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="product-thumbnail">
                      <img src={img} alt="Image" className="img-fluid" />
                    </td>
                    <td className="product-name">
                      <h2 className="h5 text-black">Product 1</h2>
                    </td>
                    <td>2.300.000₫</td>
                    <td>
                      <div
                        className="input-group mb-3 d-flex align-items-center quantity-container"
                        style={{ maxWidth: 120 }}
                      >
                        <div className="input-group-prepend">
                          <button
                            className="btn btn-outline-black decrease"
                            type="button"
                          >
                            −
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control text-center quantity-amount"
                          defaultValue={1}
                          placeholder
                          aria-label="Example text with button addon"
                          aria-describedby="button-addon1"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-black increase"
                            type="button"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>2.300.000₫</td>
                    <td>
                      <a href="#" className="btn btn-black btn-sm">
                        X
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row justify-content-end">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">
                      Tổng giỏ hàng
                    </h3>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black" style={{ fontSize: 20 }}>
                      Tổng tiền:
                    </span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong style={{ fontSize: 20, color: "rgb(210, 0, 0)" }}>
                      4.600.000₫
                    </strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <button
                      className="btn btn-black btn-lg py-3 btn-block"
                      onclick="window.location='checkout.html'"
                    >
                      Thanh Toán
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Total;
