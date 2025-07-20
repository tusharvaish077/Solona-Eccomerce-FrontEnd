import { Close, Remove } from '@mui/icons-material';
import { Button, Divider, IconButton } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);
  const handleUpdateQuantity =()=>{

  }
  return (
    <div className='border rounded-md relative'>
        <div className="p-5 flex gap-3">
            <div>
                <img  className='w-[90px] rounded-md '
                src="https://m.media-amazon.com/images/I/514jUYwSHzL._SX679_.jpg" alt="" />
            </div>

            <div className="space-y-2">
              <h1 className='font-semibold text-lg'>Monte Carlo Clothing</h1>
              <p className='text-gray-600 font-medium text-sm'>Jet Black Denim Shirt </p>
              <p className='text-gray-400 text-xs'><strong>Sold by: Saldon Textiles Private Limited</strong></p>
              <p className='text-sm'>7 days replacement available</p>
              <p className='text-sm text-gray-500'><strong>quantity:</strong>5</p>

            </div>
            
        </div>
        <Divider/>
            <div className='flex justify-between items-center'>
              <div className="px-5 py-2 flex justify-between items-center">
              <div className="flex items-center gap-2 w-[140px] justify-between">
                
                  
                  <Button disabled={quantity===1} onClick={()=>setQuantity(quantity-1)}>
                    <Remove/>
                  </Button>

                  <span>{quantity}</span>
                  
                   <Button onClick={()=>setQuantity(quantity+1)}>
                    <AddIcon/>
                  </Button>

                
              </div>
            </div>
            <div className='pr-5'>
              <p className='text-gray-700 font-medium'>₹799</p>
            </div>
          </div>
          <div className="absolute top-1 right-1">
            <IconButton color='primary'>
              <Close/>
            </IconButton>
          </div>
    </div> 
  )
}

export default CartItem