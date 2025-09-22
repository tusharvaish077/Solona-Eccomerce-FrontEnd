import React from 'react'
import { Deal } from '../../../../types/dealTypes'

const DealCard = ({item}:{item:Deal}) => {
  return (
    <div className="ribbon cursor-pointer w-[12rem] overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        {/* <img className='border-x-[7px] border-t-[7px] border-pink-600 w-full h-[11rem] object-cover object-top'
         src="https://m.media-amazon.com/images/I/51m4NsZau4L._SX679_.jpg" alt="" /> */}

         <img className='border-x-[7px] border-t-[7px] border-pink-600 w-full h-[11rem] object-cover object-top'
         src={item.category.image} alt="" />

        <div className='border-4 border-black bg-black text-white p-2 text-center'>
            <p className='text-lg font-semibold'>{item.category.name}</p>
            <p className='text-2xl font-bold'>{item.discount}% OFF</p>
            <p className='text-balance text-lg'>shop now</p>
        </div>
    </div>
  )
}

export default DealCard