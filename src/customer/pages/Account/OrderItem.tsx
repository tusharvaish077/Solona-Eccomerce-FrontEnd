import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'

const OrderItem = () => {
  return (
    <div className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>
        <div className="flex item-center gap-5">
            <div>
                <Avatar sizes='small' sx={{bgcolor:teal[500]}}>
                    <ElectricBolt/>
                </Avatar>

            </div>
            <div>
                <h1 className='font-bold text-primary-color'>
                    PENDING
                </h1>
                <p>Arriving By Mon, 28 Jul</p>
            </div>
        </div>
        <div className="p-5 bg-teal-50 flex gap-3">
            <div>
                <img className='w-[70px]'
                 src="https://m.media-amazon.com/images/I/71rbX-kQQBL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
            </div>
            <div className='w-full space-y-2'>
                <h1 className='font-bold'>Samsung Washing Machine</h1>
                <p>Samsung fully automatic, 5000RPM tough Washing Maching made for heavy duty work</p>
                <p>
                    <strong>Capacity: </strong> 7kg
                </p>
            </div>
        </div>
    </div>
  )
}

export default OrderItem