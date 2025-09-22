import React from 'react'
import ElectricCategoryCard from './ElectricCategoryCard'
import { useAppSelector } from '../../../../State/Store'
import { useMediaQuery } from '@mui/material';

const ElectricCategory = () => {
  const {home} = useAppSelector(store => store);
  console.log("CustomerData as homepage" ,home.homePageData?.electrricCategories);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <div className='flex flex-wrap justify-between py-5 lg:px-20 border-b'>
        {/* {[1,1,1,1,1,1,1].map((item)=><ElectricCategoryCard/>)} */}

        {home.homePageData?.electrricCategories?.slice(0, isSmallScreen ? 5 : home.homePageData?.electrricCategories.length).map((item)=><ElectricCategoryCard item ={item}/>)}
        
    </div>
  )
}

export default ElectricCategory