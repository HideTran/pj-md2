import React, { useEffect, useState } from 'react'
import MeoMeoJs from '@mieuteacher/meomeojs'
import { api } from '../../../services/apis'
import { Modal } from 'antd'
import { useDispatch } from 'react-redux'
import { productAction } from '../../../store/slices/product.slice'
import { uploadFileToStorage } from '../../../firebase'
import { useSelector } from 'react-redux'
import { userAction } from '../../../store/slices/user.slice'
import axios from 'axios'
export default function ProductList({ productStore }) {
    const userStore = useSelector(store => store.userStore)
    const dispatch = useDispatch()
    const [file, setFile] = useState(null)
    const [tempImgUrl, setTempImgUrl] = useState(null)
    async function handleAddProduct() {
        if (file == null) return alert("Chưa Chọn Ảnh!")
        let url = await uploadFileToStorage(file, "products")
        let newProduct = {
            pictures: [url ? url : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"],
            name: window.prompt("Tên Dòng Xe"),
            category: window.prompt("Hãng Sản Xuất:"),
            price: Number(window.prompt("Giá Bán"))
        }
        api.productApi.addProduct(newProduct)
            .then(res => {
                console.log("res.data", res.data)
                dispatch(productAction.addProduct(res.data))
            })
    }

    function updateProduct(product) {
        console.log("product", product);
        let updateProduct = {
            name: prompt("Dòng Xe", product.name),
            price: Number(prompt("Giá", product.price)),
            category: prompt("Hãng Sản Xuất", product.category)
        }
        dispatch(productAction.updateProduct(res.data))
    }



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

    return (
        <>
            {
                userStore.data?.role == "admin" &&
                <>
                    avatar <input onChange={e => {
                        if (e.target.files == 0) return
                        setFile(e.target.files[0])
                        setTempImgUrl(URL.createObjectURL(e.target.files[0]))
                    }} type="file" />
                    <img src={tempImgUrl ? tempImgUrl : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                    <button onClick={() => {
                        handleAddProduct()
                    }} className='btn btn-primary'>Thêm</button>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Dòng Xe</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Hãng Sản Xuất</th>
                                <th scope="col">Hình Ảnh</th>
                                <th scope="col">Thông Tin</th>
                                <th scope="col">Tùy Chọn</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productStore.data?.map((product, index) => {
                                    return (
                                        <tr key={MeoMeoJs.randomId()}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{product.name}</td>
                                            <td>{MeoMeoJs.convertToVND(product.price)}</td>
                                            <td>{product.category}</td>
                                            <td>
                                                <img src={product.pictures[0]} style={{ width: "35px", height: "35px", borderRadius: "50%" }} />
                                            </td>
                                            <td>
                                                <button className='btn btn-success'>Chi Tiết</button>
                                            </td>
                                            <td>
                                                <button className='btn btn-primary' onClick={() => {
                                                    updateProduct(product)
                                                }}>Sửa</button>
                                                <button onClick={() => {
                                                    Modal.confirm({
                                                        content: "Bạn chắc chắn muốn xóa?",
                                                        onOk: () => {
                                                            api.productApi.deleteById(product.id)
                                                                .then(res => {
                                                                    dispatch(productAction.deleteProduct(product.id))
                                                                })
                                                        }
                                                    })
                                                }} className='btn btn-danger'>Xóa</button>
                                                <button onClick={async () => {
                                                    dispatch(userAction.addToCart(product))

                                                }} className='btn btn-success'>Mua</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </>
            }
        </>
    )
}
