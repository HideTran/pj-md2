import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./header.scss"
export default function Header() {
    const userStore = useSelector(store => store.userStore)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("userStore", userStore)
    }, [userStore.data])
    return (
        <div className='home_navbar'>
         <div className='home_navbar_content'>
         <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                <i className="header_logo_icon fa-solid fa-motorcycle" />
                    <a className="navbar-brand" href="#">
                    World Of Motorcycles
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Giới Thiệu
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                Sản Phẩm
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dịch Vụ
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Đăng Ký Xe
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Bảo Hiểm
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Hỗ Trợ Sau Bán Hàng
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {
                            userStore.data == null ? <Link to="/login" className='btn btn-primary'>Login</Link>
                            :  <div>
                                    <span>Hi {userStore.data?.userName} </span>
                                    <button onClick={() => {
                                    localStorage.removeItem("token");
                                    window.location.reload()
                                }} className='btn btn-danger'>Logout</button>
                            </div>
                        }
                        
                    </div>
                    <Link to="/cart" className='btn btn-success'>Cart: {userStore.cart?.reduce((value, cur) => {
                        return value += cur.quantity
                    }, 0)}</Link>
                </div>
            </nav>
         </div>
        </div>
    )
}
