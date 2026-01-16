import React from 'react'
import { HomeCategory } from '../../../../types/HomeCategoryTypes'

const AdBannerItem = ({ item }: { item: HomeCategory }) => {
  return (
    <div className='flex gap-3 flex-col justify-center items-center cursor-pointer'>
        <div className='custom-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-color'>
            
              <img className='group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full'
            src={item.image} alt="" />
        </div>
        <h1>{item.name}</h1>
    </div>
  )
}

export default AdBannerItem