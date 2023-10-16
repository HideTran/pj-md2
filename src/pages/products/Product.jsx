import React from 'react'
import './product.scss'
import ProductList from './components/ProductList'
import { useSelector } from 'react-redux'
export default function Product() {
    const productStore = useSelector(store => store.productStore)
  return (
    <div className='product_page'>
        <h2>Quản Lý Sản Phẩm</h2>
        <ProductList productStore={productStore}></ProductList>
    </div>
  )
}
