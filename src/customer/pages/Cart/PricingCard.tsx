import { Divider } from '@mui/material'
import React from 'react'

const PricingCard = () => {
  return (
    <>
    <div className='space-y-3 p-5 text-gray-600'>
      <div className="flex justify-between items-center">
        <span>Subtotal</span>
        <span>₹999</span>
      </div>

      <div className="flex justify-between items-center">
        <span>Discount</span>
        <span>₹999</span>
      </div>

      <div className="flex justify-between items-center">
        <span>Shipping</span>
        <span>₹999</span>
      </div>

      <div className="flex justify-between items-center">
        <span>Platform Fee</span>
        <span>Free</span>
      </div>
         
      
    </div>
    
      <Divider/>
    <div className='p-5'>
      <div className="flex justify-between items-center">
        <span>Total</span>
        <span>₹2997</span>
      </div>
    </div>
    </>
  )
}

export default PricingCard