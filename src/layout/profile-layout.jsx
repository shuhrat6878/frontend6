import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const ProfileLayout = () => {
  return (
    <div className='flex'>
      <div className='h-[83vh] w-[300px] bg-green-400 flex flex-col gap-[41px] pr-5'>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/profile/order"}>Order</Link>
        <Link to={"/profile/change-account"}>ChangeAaccaunt</Link>
        <Link to={"/profile/addres"}>Addres</Link>
      </div>
      <div className='p-5'>
        <Outlet/>
      </div>
    </div>
  )
}

