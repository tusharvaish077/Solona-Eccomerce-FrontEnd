import React from 'react'

const CategoryGrid = () => {
  return (
    <div className='grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>
        <div className="col-span-3 row-span-12 text-white">
            <img className='w-full h-full object-cover object-top rounded-md' src="https://manyavar.scene7.com/is/image/manyavar/9000004362.21730_13-05-2023-23-31:650x900?&dpr=on,2" alt="" />
        </div>
        <div className="col-span-2 row-span-6 text-white">
             <img className='w-full h-full object-cover object-top rounded-md' src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/p/l/n/6-mexico-11-6-asian-green-original-imah3nxzfcgrn75k.jpeg?q=70" alt="" />
        </div>
        <div className="col-span-4 row-span-6 text-white">
             <img className='w-full h-full object-cover object-top rounded-md' src="https://www.giva.co/cdn/shop/files/BR044_5_c034f584-b788-4700-be5e-662d1c4a7597.jpg?v=1739884341&width=713" alt="" />
        </div>
        <div className="col-span-3 row-span-12 text-white">
             <img className='w-full h-full object-cover object-top rounded-md' src="https://manyavar.scene7.com/is/image/manyavar/SDES1160_316-Dark+Green_101.8174_26-09-2024-14-59:650x900?&dpr=on,2" alt="" />
        </div>
        <div className="col-span-4 row-span-6 text-white">
             <img className='w-full h-full object-cover object-top rounded-md' src="https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd8356bd1/images/hi-res/51D4G2VAS1A00_1.jpg" alt="" />
        </div>
        <div className="col-span-2 row-span-6 text-white">
             <img className='w-full h-full object-cover object-top rounded-md' src="https://m.media-amazon.com/images/I/812S2vpReAL._SX679_.jpg" alt="" />
        </div>
    </div>
  )
}

export default CategoryGrid