import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import formatCurrency from '../consts/formatCurrency';

function OrderDetails() {
  const [orders, setOrders] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const getOrders = async (userId) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/orders?userId=${userId}`
      );
      setOrders(res.data);
    } catch (error) {
      console.error('Lỗi API:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (id) {
      getOrders(id);
    }
  }, [id]);

  const handleClickOrderDetailsProduct = (id) => {
    navigate(`/orderproduct/${id}`);
  };

  return (
    <div className="untree_co-section before-footer-section">
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12" method="post">
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Tên Khách Hàng</th>
                    <th className="product-name">Tổng Tiền</th>
                    <th className="product-price">Địa Chỉ</th>
                    <th className="product-quantity">Phương Thức Thanh Toán</th>
                    <th className="product-total">Trạng Thái</th>
                    <th className="product-remove">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index}>
                      <td className="product-name" style={{ fontWeight: 700 }}>
                        {order.customer?.name}
                      </td>
                      <td>{formatCurrency(order.totalPrice)}</td>
                      <td>{order.customer?.address}</td>
                      <td>
                        {order.customer?.paymentMethod === 'cod'
                          ? 'Thanh toán khi nhận hàng'
                          : 'Không xác định'}
                      </td>
                      <td>{order.status}</td>
                      <td>
                        <button
                          type="button"
                          style={{
                            backgroundColor: '#0d6efd',
                            borderRadius: 10,
                            color: 'white',
                          }}
                          onClick={() =>
                            handleClickOrderDetailsProduct(order.id)
                          }
                        >
                          Xem chi tiết
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
