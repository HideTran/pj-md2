import React, { useEffect } from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
import jwt from '../services/jwt'
import {api} from '../services/apis'
export default function Login() {

  useEffect(() => {
    if(localStorage.getItem("token")) {
      window.location.href = "/"
    }
  }, [])
  return (
    <div className='login_page'>
        <form onSubmit={async (e) => {
          e.preventDefault();
          let data = {
            userName: e.target.userName.value,
            password: e.target.password.value
          }
          await api.userApi.findByUserName(data.userName)
          .then(res => {
            if(res.data.length != 0) {
              if(data.password != jwt.verifyToken(res.data[0].password, import.meta.env.VITE_PRIVATE_KEY)) {
                alert("Mật khẩu sai @@")
                return
              }
              let token = jwt.createToken(res.data[0])
              localStorage.setItem("token", token)
              window.location.href = "/"
            }else {
              alert("Tài khoản không tồn tại @@")
            }
          })

         
          
       

        }} className='form_login'>
              <h2>Mời Bạn Đăng Nhập</h2>
                <div>
                    <input name='userName' type="text" placeholder='Tên Đăng Nhập' />
                </div>
                <div>
                    <input name='password' type="text" placeholder='Mật Khẩu' />
                </div>
                <div>
                    <Link to={"/register"}>Bạn Chưa Có Tài Khoản? Đăng Ký Ngay!</Link>
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>Đăng Nhập</button>
                </div>
        </form>
    </div>
  )
}
