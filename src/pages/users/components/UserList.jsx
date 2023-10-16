import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { userAction } from '../../../store/slices/user.slice'
import { Modal } from 'antd'
import axios from 'axios'
import MeoMeoJs from '@mieuteacher/meomeojs'

export default function UserList() {
  const [usersData, setUsersData] = useState([]);
  const dispatch = useDispatch()
  const userStore = useSelector(store => store.userStore)

  useEffect(() => {
    if (localStorage.getItem("token")) {
        if (userStore.data) {
            if (userStore.data?.role != "admin") {
                if (window.confirm("Bạn không có quyền truy cập trang này, vui lòng đăng nhập với tài khoản admin!")) {
                    window.location.href = "/"
                } else {
                    window.location.href = "/"
                }
            }
        }
    } else {
        window.location.href = "/login"
    }
}, [userStore.data])

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        console.log("res.data", res.data);

        setUsersData(res.data);

      })
      .catch((error) => {
      })
  }, [])

  console.log(usersData);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên Người Dùng</th>
            <th scope="col">Cấp Quyền</th>
            <th scope="col">Trạng Thái</th>
            <th scope="col">Email</th>
            <th scope="col">Giỏ Hàng</th>
            <th scope="col">Tùy Chọn</th>
          </tr>
        </thead>
        <tbody>
          {
            usersData.map((user, index) => {
              return (

                <tr key={Math.random()}>
                  <th scope="row">{index+1}</th>
                  <td>{user.userName}</td>
                  <td>{user.role}</td>
                  <td>{user.status ? 'true' : 'false'}</td>
                  <td>{user.email}</td>
                  <td>{user.cart}</td>
                  <td className='btn_tools'>
                    <button type="button" class="btn btn-primary">Sửa</button>
                    <button type="button" className="btn btn-danger">Xóa</button>
                  </td>

                </tr>
               ) 
             }
            )
          } 

        </tbody>




      </table>
    </>
  )
}
