import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import formatCurrency from '../consts/formatCurrency';

function OrderDetailsProduct() {
  const [orders, setOrders] = useState([]);

  const { id } = useParams();
  const getOrders = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/orders/${id}`);
      setOrders(res.data || {});
    } catch (error) {
      console.error('Lỗi API:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (id) {
      getOrders(id);
    }
  }, [id]);

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
                    <th className="product-quantity">Mô tả</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.items &&
                    orders.items.map((item, index) => (
                      <tr key={index}>
                        <td className="product-name">
                          <img
                            style={{ mixBlendMode: 'multiply' }}
                            width={200}
                            src={item.image}
                            alt={item.name}
                          />
                        </td>

                        <td className="product-name">{item.name}</td>
                        <td className="product-price">
                          {formatCurrency(item.price)}
                        </td>
                        <td className="product-quantity">{item.quantity}</td>
                        <td className="product-total">{item.description}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </form>
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="row justify-content-end">
                <div className="col-md-12">
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black" style={{ fontSize: 20 }}>
                        Tổng tiền:
                      </span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong style={{ fontSize: 20, color: 'rgb(210, 0, 0)' }}>
                        {formatCurrency(orders.totalPrice)}
                      </strong>
                    </div>
                  </div>
                  <div className="row">
                    <Link to={`/order/${orders.userId}`} className="col-md-12">
                      <button type="button" className="btn btn-primary">
                        Quay lại trang đơn hàng
                      </button>
                    </Link>
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

export default OrderDetailsProduct;
