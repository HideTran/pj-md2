import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import './main.scss'
import Register from "./pages/Register"
import Login from "./pages/Login"
import Product from "./pages/products/Product"
import User from "./pages/users/User"
import Cart from "./pages/Cart"
import Receipts from "./pages/Receipts"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="products" element={<Product/>}></Route>
        <Route  path="users" element={<User/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/receipts" element={<Receipts/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
