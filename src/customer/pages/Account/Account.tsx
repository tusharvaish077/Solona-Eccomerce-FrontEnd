import { Divider } from '@mui/material'
import path from 'path'
import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Orders from './Orders'
import OrderDetails from './OrderDetails'
import UserDetails from './UserDetails'
import AddressCard from '../Checkout/AddressCard'
import Address from './Address'


const menu=[
    {name:"orders", path:"/account/orders"},
    {name:"profile", path:"/account"},
    {name:"Saved Cards", path:"/account/saved-cards"},
    {name:"Addresses", path:"/account/addresses"},
    {name:"Logout", path:"/"},
]
const Account = () => {
    const navigate = useNavigate();

    const handleClick =(item:any)=>{
        navigate(item.path);
    }
    const location= useLocation();
  return (
    <div className='px-g lg:px-52 min-h-screen mt-10'>
        <div>
            <h1 className="text-xl font-bold pb-5">
                Tushar
            </h1>
        </div>
        <Divider/>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]">
            <section className='cols-span-1 lg:border-r lg:pr-5 py-5 h-full'>
                {
                    menu.map((items)=>(
                        <div onClick={()=>handleClick(items)} key={items.name}
                        className={`${items.path === location.pathname ? "bg-primary-color text-white" :""}
                            py-3 cursor-pointer hover:text-white hover:bg-primary-color
                            px-5 rounded-md`}>
                            <p>{items.name}</p>
                        </div>
                    ))
                }
            </section>
            <section className='right col-span-2 lg:cols-span-5 lg:pl-5 py-5'>
                <Routes>
                    <Route path='/' element={<UserDetails/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/order/:OrderId/:orderItemId' element={<OrderDetails/>}/>
                    <Route path='/addresses' element={<Address/>}/>
                </Routes>
            </section>
        </div>
    </div>
  )
}

export default Account