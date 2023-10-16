import React, {useEffect} from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import { Outlet } from 'react-router-dom'
import jwt from '../services/jwt';
import { useDispatch } from 'react-redux';
import { userAction } from '../store/slices/user.slice';
import {api} from '../services/apis'
import { productAction } from '../store/slices/product.slice';
import { useSelector } from 'react-redux';
import axios from 'axios';
export default function Home() {
  const userStore = useSelector(store => store.userStore)
  const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.getItem("token")) {
       let user = jwt.verifyToken(localStorage.getItem("token"), import.meta.env.VITE_PRIVATE_KEY);
       if(!user) {
          localStorage.removeItem("token")
            return
        }
        axios.get(`http://localhost:3000/users/${user.id}`)
        .then(res => {
          dispatch(userAction.setData(res.data))
          dispatch(userAction.setCart(res.data.carts ?? []))
          dispatch(userAction.setReceipts(res.data.receipts ?? []))
        })
    }
}, [])

useEffect(() => {
 if(userStore.cart && userStore.data) {
  axios.patch(`http://localhost:3000/users/${userStore.data?.id}`, {
      carts: [...userStore.cart]
  })
 }
}, [userStore.cart])

useEffect(() => {
  if(userStore.receipts && userStore.data) {
   axios.patch(`http://localhost:3000/users/${userStore.data?.id}`, {
       receipts: [...userStore.receipts]
   })
  }
 }, [userStore.receipts])

useEffect(() => {
  api.productApi.findAll()
  .then(res => {
    dispatch(productAction.setProduct(res.data))
  })
}, [])
  return (
    <div className='home_page'>
        <Header></Header>
        <div className='home_container'>
          {/* <img src="https://firebasestorage.googleapis.com/v0/b/test2709-f8508.appspot.com/o/products%2F637864827884.3351.jpeg?alt=media&token=2ba72032-7912-46d3-b399-13fa4d6fdd7a" alt="" /> */}
        {/* <video autoPlay loop className='banner-video' src="https://firebasestorage.googleapis.com/v0/b/test2709-f8508.appspot.com/o/products%2F637864827884.3351.jpeg?alt=media&token=2ba72032-7912-46d3-b399-13fa4d6fdd7a"></video> */}
           {/* Nội dung của các route mà bao gồm nav + footer */}
           <Outlet/>
        </div>
        <Footer></Footer>
    </div>
  )
}
