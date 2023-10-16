import React from 'react'
import { useSelector } from 'react-redux'
export default function Receipts() {
    const userStore = useSelector(store => store.userStore)
  return (
    <div>
        <h2>Receipts</h2>
        <ul>
            {
                userStore.receipts.map((item, index) => (
                    <li key={item.id}>
                        id: {item.id}
                        total: {item.total}
                        Tổng SP: {item.products.reduce((value, cur) => {
                            return value + cur.quantity
                        }, 0)}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
