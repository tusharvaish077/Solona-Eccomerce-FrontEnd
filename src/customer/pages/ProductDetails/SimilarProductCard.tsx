import React from 'react'

const SimilarProductCard = () => {
  return (
    <div>
        <div className="group px-4 relative">
            <div
                className="card rounded-md"
            >
                
                <img
                    className="card-media object-top"
                    src={"https://m.media-amazon.com/images/I/71UsWPYsBdL._SY879_.jpg"}
                    alt=""
                />
                
            </div>
            <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
                <div className="name">
                <h1>
                    Monte Carlo
                </h1>
                <p>Black Shirt</p>

                </div>
                <div className='price flex items-center gap-3'>
                <span className='font-sans text-gray-800'>
                    ₹900
                </span>
                <span className='thin-line-through text-gray-400'>
                    ₹1499
                </span>
                <span className='text-primary-color font-semibold'>
                    60%
                </span>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default SimilarProductCard