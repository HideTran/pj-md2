import React from 'react'
import './user.scss'
import UserList from './components/UserList'
import { useSelector } from 'react-redux'


export default function User() {
const userStore = useSelector(store => store.userStore)

  return (
    <div className='user_page'>
        <h2>Quản Lý Người Dùng</h2>
        <UserList></UserList>
    </div>
  )
}
