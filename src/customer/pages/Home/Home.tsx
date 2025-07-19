import React from 'react'
import ElectricCategory from './ElectricCategory/ElectricCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import screenshot from '../../../Assets/spring-beauty-young-beautiful-stylish-female-model-posing-against-pink-background-cross-arms-chest-smiling-happy.jpg';

import Deal from './Deal/Deal'
import { Button } from '@mui/material';
import { Storefront } from '@mui/icons-material';

const Home = () => {
  return (
    <>
        <div className="space-y-5 lg:space-y-10 relative">
            <ElectricCategory/>
            <CategoryGrid/>
            <div className='pt-15'>
              <h1 className='text-lg lg:text-4xl font-bold text-primary-color
               pb-5 lg:pb-20 text-center'>TODAY'S DEAL</h1>
               <Deal/>
            </div>

            <section className='pt-15'>
              <h1 className='text-lg lg:text-4xl font-bold text-primary-color
               pb-5 lg:pb-20 text-center'>SHOP BY CATEGORY</h1>
              <ShopByCategory/>
            </section>

            {/* <section className='lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
              <img className='w-full h-full' src={screenshot} alt="Screenshot" />
              <div className='absolute z-50 top-1/3 left-4 lg:left-[15rem] transform-translate-y-1/2 bg-gradient-to-r from-blue-500 to-transparent via-blue-500 [background-size:200%_100%] [background-position:left_center]' ></div>
              <div className='absolute top-1/3 left-4 lg:left-[15rem] transform-translate-y-1/2 font-semibold lg:text-4xl space-y-3'>
                Sell Your Product
                <p>With</p>
                <p className='logo'>Solona Ecommerce</p>
              </div>

            </section> */}

            <section className="lg:px-20 relative h-[200px] lg:h-[450px] object-cover  mx-auto">
              <img className="w-full h-full rounded" src={screenshot} alt="Screenshot" />
              <div className="absolute top-0 left-0 h-full w-1/2 z-10"></div>

              {/* Text Content */}
              <div className="absolute top-1/2 left-4 lg:left-[15rem] -translate-y-1/2 z-20 font-semibold lg:text-4xl space-y-3 text-white">
                Sell Your Product
                <p className='text-lg md:text-2xl'>With <span className="logo">Solona Ecommerce</span></p>
               <div className="pt-6 flex justify-center">
              <Button startIcon={<Storefront/>} variant='contained' size='large'>Become Seller</Button></div>
              </div>
              
            </section>

        </div>
    </>
  )
}

export default Home