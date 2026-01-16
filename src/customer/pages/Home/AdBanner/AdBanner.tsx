import React from 'react'
import AdBannerItem from './AdBannerItem'
import { useAppSelector } from '../../../../State/Store';

const AdBanner = () => {
  const { home } = useAppSelector(store => store);
  return (
    <div className='flex flex-wrap justify-between lg:px-10'>
      {home.homePageData?.adBanner.map((item)=><AdBannerItem item={item}/>)}
    </div>
  )
}

export default AdBanner