import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import formatCurrency from '../../consts/formatCurrency';

function UpdateOrder() {
  const [orderProducts, setOrderProducts] = useState([]);
  const { id } = useParams();
  const [status, setStatus] = useState('');
  const navigate = useNavigate();
  const getList = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/orders/${id}`);
      setOrderProducts(res.data);
      setStatus(res.data.status);
    } catch (error) {
      console.log(error);
      toast.error('Lỗi');
    }
  };

  const updateStatus = async () => {
    try {
      await axios.patch(`http://localhost:3000/orders/${id}`, {
        status: status,
      });
      toast.success('Cập nhật trạng thái thành công!');
      navigate('/admin/listorder');
    } catch (error) {
      console.log(error);
      toast.error('Lỗi khi cập nhật trạng thái');
    }
  };

  useEffect(() => {
    getList(id);
  }, [id]);
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold" style={{ fontWeight: 700 }}>
            CẬP NHẬT ĐƠN HÀNG
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing={0}
            >
              <thead>
                <tr>
                  <th>ID Sản phẩm</th>
                  <th>Hình Ảnh</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Giá</th>
                  <th>Số Lượng</th>
                  <th>Thành Tiền</th>
                </tr>
              </thead>
              <tbody>
                {orderProducts.items &&
                  Array.isArray(orderProducts.items) &&
                  orderProducts.items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '120px' }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{formatCurrency(item.price)}</td>
                      <td>{item.quantity}</td>
                      <td>{formatCurrency(item.price * item.quantity)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div
              style={{
                display: 'flex',
                gap: 10,
                marginTop: 20,
                justifyContent: 'end',
                marginRight: 10,
              }}
            >
              <p style={{ fontSize: 17, fontWeight: 500 }}>Tổng Tiền:</p>
              <span style={{ fontSize: 17, fontWeight: 700, color: 'red' }}>
                {formatCurrency(orderProducts.totalPrice)}
              </span>
            </div>
            <div>
              <label
                style={{ fontSize: 16, marginBottom: 10, fontWeight: 600 }}
              >
                Trạng thái:
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Chờ xác nhận">Chờ xác nhận</option>
                <option value="Đã xác nhận">Đã xác nhận</option>
                <option value="Chờ lấy hàng">Chờ lấy hàng</option>
                <option value="Đang giao hàng">Đang giao hàng</option>
                <option value="Giao hàng thành công">
                  Giao hàng thành công
                </option>
                <option value="Đã hủy">Đã hủy</option>
                <option value="Trả hàng">Trả hàng</option>
              </select>
            </div>
            <div style={{ marginTop: 20 }}>
              <button
                style={{ background: '#4e73df', border: '1px solid #4e73df' }}
                type="submit"
                className="btn btn-primary mt-3"
                onClick={updateStatus}
              >
                Cập nhật đơn hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UpdateOrder;
