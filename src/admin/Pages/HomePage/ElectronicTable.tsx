import React from 'react'
import HomeCategoryTable from './HomeCategoryTable'
import { useAppSelector } from '../../../State/Store';

const ElectronicTable = () => {
  const {home} = useAppSelector(store => store);
  console.log(home);
  return (
    <div><HomeCategoryTable data={home.homePageData?.electrricCategories || []}/></div>
   
  )
}

export default ElectronicTable