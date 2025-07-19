import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import { teal } from '@mui/material/colors';
import { Button, Divider } from '@mui/material';
import { AddShoppingCart, FavoriteBorder, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material';
import SimilarProducts from './SimilarProducts';

const PageDetails = () => {

  const [quantity, setQuantity] = useState(1);
  return (
    <div className='px-5 lg:px-20 pt-10'>
         <div className='grid grid-col-1 lg:grid-cols-2 gap-10'>
            <section className='flex flex-col lg:flex-row gap-5'>

              <div className='w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3'>
                {[1,1,1,1].map((item)=>
                <img className='w-[50px] lg:w-full rounded-md cursor-pointer'
                   src='https://m.media-amazon.com/images/I/71POSeQhetL._SY879_.jpg' alt=''/>)}
              </div>

              <div className='w-full lg:w-[85%]'>
                <img className='w-full rounded-md'
                 src="https://m.media-amazon.com/images/I/71qJVX1UzML._SY879_.jpg" alt="" />
              </div>
            </section>
            <section>
              <h1 className='font-bold text-lg lg:text-2xl text-primary-color'>
                Manyavar
              </h1>
              <p className='text-gray-500 font-semibold'>
                Women Maroon Saree
              </p>
              <div className='flex justify-between items-center py-2 border w-[180px] px-3 pt-5 mt-5'>

                <div className='flex gap-1 items-center'>
                  <span>4</span>
                  <StarIcon sx={{color:teal[500], fontSize:"17px"}}/>
                </div>
                <Divider orientation='vertical' flexItem /> 
                <span>234 Ratings</span>
              </div>
              
              <div>
                <div className='price flex items-center gap-3 mt-5 text-2xl'>
                  <span className='font-sans text-gray-800'>
                    ₹900
                  </span>
                  <span className='line-through text-gray-400'>
                    ₹1499
                  </span>
                  <span className='text-primary-color font-semibold'>
                    60%
                  </span>
                </div>

                <p className='text-sm'>Inclusive of all taxes. Free Shipping above ₹1499</p>
              </div>

              <div className='mt-7 space-y-3'>

                <div className='flex items-center gap-4'>
                  <Shield sx={{color:teal[500] }}/>
                  <p>Authentic & Quality Assured</p>
                </div>

                <div className='flex items-center gap-4'>
                  <WorkspacePremium sx={{color:teal[500] }}/>
                  <p>100% money back guarantee</p>
                </div>

                <div className='flex items-center gap-4'>
                  <LocalShipping sx={{color:teal[500] }}/>
                  <p>Free Shipping & Returns</p>
                </div>

                <div className='flex items-center gap-4'>
                  <Wallet sx={{color:teal[500] }}/>
                  <p>Pay on delivery might be available</p>
                </div>

              </div>

              <div className='mt-7 space-y-2'>
                <h1>Quantity</h1>

                <div className="flex items-center gap-2 w-[140px] justify-between">
                  
                  <Button disabled={quantity==1} onClick={()=>setQuantity(quantity-1)}>
                    <Remove/>
                  </Button>

                  <span>{quantity}</span>
                  
                   <Button onClick={()=>setQuantity(quantity+1)}>
                    <AddIcon/>
                  </Button>

                </div>
              </div>

              <div className="mt-12 flex items-center gap-5">
                <Button 
                  fullWidth
                  variant='contained'
                  startIcon={<AddShoppingCart/>}
                  sx={{paddingY:'1rem'}}>
                  Add To Bag
                </Button>

                <Button 
                  fullWidth
                  variant='outlined'
                  startIcon={<FavoriteBorder/>}
                  sx={{paddingY:'1rem'}}>
                    Wishlist
                </Button>
              </div>

              <div className='mt-5 text-sm'>
                <p>The saree comes with embroidered Banarasi Pattern enriching the pious culutre of Varanasi. The blouse comes as unstiched piece the images shown are illustaration of afterwork in blouse piece.</p>
              </div>


            </section>
         </div>
        
        <div className="mt-20">
          <h1 className='text-lg font-bold'>Similar Product</h1>
          <div className='pt-5'>
            <SimilarProducts/>
          </div>
          
        </div>
         
    </div>
  )
}

export default PageDetails