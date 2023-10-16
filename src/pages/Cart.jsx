import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userAction } from '../store/slices/user.slice'
export default function Cart() {
    const dispatch = useDispatch()
    const userStore = useSelector(store => store.userStore)
  return (
    <div>
        <h2>Cart</h2>
        <ul>
            {
                userStore.cart.map((item, index) => {
                    return (
                        <li key={Date.now() * Math.random()}>
                            Name: {item.name}
                            Price: {item.price}
                            <input min={1} onChange={(e) => {
                                dispatch(userAction.changeQuantity({
                                    id: item.id,
                                    quantity: Number(e.target.value)
                                }))
                            }} type="number" defaultValue={item.quantity}/>
                            Total: {item.price * item.quantity}
                        </li>
                    )
                })
            }
            <button onClick={() => {
                let newReceipts = {
                    id: Date.now() * Math.random(),
                    total: userStore.cart.reduce((total, item) => {
                        return total + (item.price * item.quantity)
                    }, 0),
                    products: [...userStore.cart]
                }
                dispatch(userAction.addNewReceipt(newReceipts))
            }} className='btn btn-primary'>Checkout</button>
        </ul>
    </div>
  )
}
