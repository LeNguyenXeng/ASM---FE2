import React from 'react';
import '../assets/css/checkout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router';
import formatCurrency from '../consts/formatCurrency';
function Checkout() {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || {
    cartItems: [],
    totalPrice: 0,
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              <ol className="activity-checkout mb-0 px-4 mt-3">
                <li className="checkout-item">
                  <div className="avatar checkout-icon p-1">
                    <div className="avatar-title rounded-circle">
                      <FontAwesomeIcon
                        style={{ fontSize: 17 }}
                        icon={faInfoCircle}
                      />
                    </div>
                  </div>
                  <div className="feed-item-list">
                    <div>
                      <h5 className="font-size-16 mb-1">Thông tin</h5>
                      <p className="text-muted text-truncate mb-4">
                        Vui lòng nhập thông tin thanh toán
                      </p>
                      <div className="mb-3">
                        <form>
                          <div>
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="billing-name"
                                  >
                                    Họ tên:
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="billing-name"
                                    placeholder="Nhập họ tên"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="billing-email-address"
                                  >
                                    Email:
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="billing-email-address"
                                    placeholder="Nhập email"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="billing-phone"
                                  >
                                    Số điện thoại:
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="billing-phone"
                                    placeholder="Nhập số điện thoại"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="billing-address"
                              >
                                Địa Chỉ:
                              </label>
                              <textarea
                                className="form-control"
                                id="billing-address"
                                rows={3}
                                placeholder="Nhập địa chỉ"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="checkout-item">
                  <div className="avatar checkout-icon p-1">
                    <div className="avatar-title rounded-circle">
                      <FontAwesomeIcon
                        style={{ fontSize: 17 }}
                        icon={faDollarSign}
                      />
                    </div>
                  </div>
                  <div className="feed-item-list">
                    <div>
                      <h5 className="font-size-16 mb-1">Thanh Toán</h5>
                      <p className="text-muted text-truncate mb-4">
                        Vui lòng chọn phương thức thanh toán
                      </p>
                    </div>
                    <div>
                      <h5 className="font-size-14 mb-3">
                        Phương thức thanh toán :
                      </h5>
                      <div className="col-lg-3 col-xl-6">
                        <div className="radio-input">
                          <div>
                            <input type="radio" />
                          </div>
                          <span>Thanh Toán Khi Nhận Hàng</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <div className="row my-4">
            <div className="col">
              <Link
                to={'/shop'}
                className="btn btn-link "
                style={{
                  background: '#6c757d',
                  border: '#6c757d',
                  color: 'white',
                }}
              >
                Tiếp tục mua sắm
              </Link>
            </div>{' '}
            <div className="col">
              <div className="text-end mt-2 mt-sm-0">
                <a
                  href="#"
                  className="btn btn-success"
                  style={{ background: '#3b5d50', border: '#3b5d50' }}
                >
                  Thanh Toán
                </a>
              </div>
            </div>{' '}
          </div>{' '}
        </div>
        <div className="col-xl-4">
          <div className="card checkout-order-summary">
            <div className="card-body">
              <div className="p-3 bg-light mb-3">
                <h5 className="font-size-16 mb-0">
                  Tổng tiền:
                  <span
                    className="float-end ms-2 text-danger"
                    style={{ fontWeight: 700 }}
                  >
                    {formatCurrency(totalPrice)}
                  </span>
                </h5>
              </div>
              <div className="table-responsive">
                <table className="table table-centered mb-0 table-nowrap">
                  <tbody>
                    {cartItems.map((item) => (
                      <tr>
                        <td scope="row">
                          <Link
                            to={`/product-detail/${item.id}`}
                            className="text-dark"
                          >
                            <img
                              src={item.image}
                              alt="product-img"
                              title="product-img"
                              className="avatar-lg rounded"
                            />
                          </Link>
                        </td>
                        <td>
                          <h5
                            className="font-size-16 text-truncate"
                            style={{ width: 140 }}
                          >
                            <Link
                              to={`/product-detail/${item.id}`}
                              className="text-dark"
                            >
                              {item.name}
                            </Link>
                          </h5>
                          <p className="text-muted mb-0">
                            <i className="bx bxs-star text-warning" />
                            <i className="bx bxs-star text-warning" />
                            <i className="bx bxs-star text-warning" />
                            <i className="bx bxs-star text-warning" />
                            <i className="bx bxs-star-half text-warning" />
                          </p>
                          <p className="text-muted mb-0 mt-1">
                            {formatCurrency(item.price)} x {item.quantity}
                          </p>
                        </td>
                        <td style={{ fontWeight: 600 }}>
                          {formatCurrency(item.price)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end row */}
    </div>
  );
}
export default Checkout;
