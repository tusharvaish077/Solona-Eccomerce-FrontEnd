import React from 'react'

const SellerDashboard = () => {
  return (
    <div>
        <div className="lg:flex lg-[90vh]">
            <section className="hidden lg:block h-full">
                sellerDrawerList
            </section>
            <section className='p-10 w-full lg:w-[80%] overflow-y-auto'>
                seller routes
            </section>
        </div>
    </div>
  )
}

export default SellerDashboard