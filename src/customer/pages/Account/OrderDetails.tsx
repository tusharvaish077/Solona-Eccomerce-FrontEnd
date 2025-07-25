import { Box, Button, Divider } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import OrderStepper from './OrderStepper';

const OrderDetails = () => {
    const navigate = useNavigate();
  return (
    <div>
       <Box className='space-y-5'>
        <section className="flex flex-col gap-5 jsutify-center items-center">
            <img src="https://m.media-amazon.com/images/I/71rbX-kQQBL._AC_UL480_FMwebp_QL65_.jpg" alt="" className="w-[100px]" />
        
       
            <h1 className="font-bold">{"Samsung Inc."}
            </h1>
            <p>{"Samsung 7 kg, 5 Star, AI Control, Wi-Fi, Digital Inverter, Motor, Fully-Automatic Front Load Washing Machine (WW70T502NAN1TL, Hygiene Steam, Inox)"}</p>
            <p><strong>Capacity: </strong>7Kg</p>
            <div>
                <Button onClick={()=>navigate(`/reviews/${5}/create`)}>
                    Write Review
                </Button>
            </div>
       
        </section>

        <section>
            <OrderStepper orderStatus={"SHIPPED"}/>
        </section>

        <div className="border p-5">
            <h1 className="font-bold pb-3">Delivery Address</h1>
            <div className="text-sm space-y-2">
                <div className="flex gap-5 font-medium">
                    <p>{"Tushar"}</p>
                    <Divider flexItem orientation='vertical'/>
                    <p>{67445345}</p>
                    
                </div>
                <p>Noida City Grandtrunk road under the haunted Underpass</p>
            </div>
        </div>
        <div className="border space-y-4">
            <div className="flex justify-between text-sm pt-5 px-5">
                <div className="space-y-1">
                    <p className="font-bold">Total Item Price</p>
                    <p>You saved<span className="text-green-500 font-medium text-xs">₹{800}.00</span> on this item</p>
                </div>
                <p className="font-medium">₹{78}.00</p>
            </div>
        </div>
        </Box> 
    </div>
  ) 
}

export default OrderDetails