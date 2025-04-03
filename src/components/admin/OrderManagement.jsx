import { Link } from 'react-router';

function OrderManagement() {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold" style={{ fontWeight: 700 }}>
            DANH SÁCH ĐƠN HÀNG
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
                  <th>ID Đơn Hàng</th>
                  <th>Họ Tên Người Đặt</th>
                  <th>Số Điện Thoại</th>
                  <th>Địa chỉ</th>
                  <th>Phương Thức Thanh Toán</th>
                  <th>Trạng Thái</th>
                  <th>Hành động</th>
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

                  <td>
                    <div style={{ display: 'flex' }}>
                      <Link
                        style={{ background: '#36b9cc' }}
                        to={`/admin/updateorder/:id`}
                        className="button-circle-edit"
                      >
                        <div className="icon-circle-edit">
                          <i className="fa fa-wrench" />
                        </div>
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderManagement;
