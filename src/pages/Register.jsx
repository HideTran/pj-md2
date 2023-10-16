import React, {useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import "./register.scss"
import {api} from '../services/apis'
import jwt from '../services/jwt' 
export default function Register() {
    const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem("token")) {
          window.location.href = "/"
        } 
      }, [])
    return (
        <div className='register_page'>
            <form onSubmit={async (e) => {
                e.preventDefault()
                let data = {
                    userName: e.target.userName.value,
                    password: jwt.createToken(e.target.password.value),
                    email: e.target.email.value,
                    role: "member",
                    status: true
                }
                
                let res = await api.userApi.findByUserName(data.username);
                if (res.data.length > 0) {
                    alert("Tài khoản đã tồn tại @@")   
                }else {
                    api.userApi.register(data)
                    .then(res  => {
                        alert("Đăng ký thành công! :)")
                        navigate("/login")
                    }).catch(err => {
                        alert("Kết nối lỗi!!!")
                    })
                }

            }} className='register_form'>
                <h2>Chào Mừng Bạn Đến Với World Of Bike</h2>
                <div>
                    <input name='userName' type="text" placeholder='Tên Đăng Nhập' />
                </div>
                <div>
                    <input name='password' type="text" placeholder='Mật Khẩu' />
                </div>
                <div>
                    <input type="text" placeholder='Nhập Lại Mật Khẩu' />
                </div>
                <div>
                    <input name='email' type="text" placeholder='Email' />
                </div>
                <div>
                    <Link to={"/login"}>Bạn Đã Có Tài Khoản? Đăng Nhập Tại Đây!</Link>
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>Đăng Ký</button>
                </div>
            </form>
        </div>
    )
}
