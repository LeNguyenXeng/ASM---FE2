import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import '../../assets/css/adminheader.css';
import '../../assets/css/admincontent.css';
import axios from 'axios';
import { toast } from 'react-toastify';

function AccountPage() {
  const [users, setUsers] = useState([]);

  const getListUser = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users`
      );
      setUsers(data);
    } catch (error) {
      console.error(
        'API call failed:',
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    getListUser();
  }, []);

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold" style={{ fontWeight: 700 }}>
            DANH SÁCH SẢN PHẨM
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
                  <th>Tên tài khoản</th>
                  <th>Email</th>
                  <th>Địa chỉ</th>
                  <th>Số điện thoại</th>
                  <th>Quyền hạn</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.phone}</td>
                    <td
                      className={item.is_admin ? 'text-danger' : 'text-success'}
                    >
                      {item.is_admin ? 'Admin' : 'Member'}
                    </td>

                    <td>
                      <div style={{ display: 'flex' }}>
                        <Link
                          to={`/admin/updateaccount/${item.id}`}
                          className="button-circle-edit"
                        >
                          <div className="icon-circle-edit">
                            <i className="fa fa-wrench" />
                          </div>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountPage;
