import { Link } from 'react-router';

function UpdateOrder() {
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
                  <th>ID</th>
                  <th>Hình Ảnh</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Giá</th>
                  <th>Số Lượng</th>
                  <th>Thành Tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
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
                100000đ
              </span>
            </div>
            <div>
              <label
                style={{ fontSize: 16, marginBottom: 10, fontWeight: 600 }}
              >
                Trạng thái:
              </label>
              <select class="form-select" aria-label="Default select example">
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
