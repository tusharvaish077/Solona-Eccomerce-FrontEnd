import React from 'react'

const DealCard = () => {
  return (
    <div className="ribbon cursor-pointer w-[12rem] overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <img className='border-x-[7px] border-t-[7px] border-pink-600 w-full h-[11rem] object-cover object-top'
         src="http://m.media-amazon.com/images/I/71dV1Nr821L._SX679_.jpg" alt="" />
        <div className='border-4 border-black bg-black text-white p-2 text-center'>
            <p className='text-lg font-semibold'>Smart Watch</p>
            <p className='text-2xl font-bold'>20% OFF</p>
            <p className='text-balance text-lg'>shop now</p>
        </div>
    </div>
  )
}

export default DealCard