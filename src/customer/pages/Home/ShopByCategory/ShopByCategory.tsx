import React from 'react'
import ShopByCategoryCard from './ShopByCategoryCard'
import { useAppSelector } from '../../../../State/Store'
const ShopByCategory = () => {
    const { home } = useAppSelector(store => store)
  return (
    <div className='flex flex-wrap justify-between gap-7 lg:px-20'>
        {home.homePageData?.shopByCategories?.map((item)=><ShopByCategoryCard item={item}/>)}
    </div>
  )
}

export default ShopByCategory