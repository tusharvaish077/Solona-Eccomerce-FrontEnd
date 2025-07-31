import React, { useState } from 'react'
import SellerAccountForm from './SellerAccountForm';
import SellerLoginForm from './SellerLoginForm';
import { Button } from '@mui/material';
import SellerLogin from '../../../Assets/sellerLogin.jpg';
const BecomeSeller = () => {
    const [isLogin, setIsLogin] = useState(false);
    const handleShowPage =()=>{
        setIsLogin(!isLogin);
    };
  return (
    <div className='grid md:gap-10 grid-cols-3 min-h-screen'>
        <section className="lg:col-span-1 md:col-span-2 col-span-3
         p-10 shadow-lg rounded-b-md">
            {isLogin?<SellerAccountForm/>:<SellerLoginForm/>}
            <div className="mt-10 space-y-2">
                <h1 className="text-center text-sm font-medium">{isLogin?"Already have account?":"Click to Register"}</h1>
                    <Button onClick={handleShowPage} fullWidth sx={{py:"11px"}} variant='outlined'>
                        {isLogin?"Login":"Register"}
                    </Button>
               
            </div>
         </section>
         <section className='hidden md:flex md:col-span-1 lg:col-span-2 justify-center items-center'>

            <div className="relative lg:w-[70%] px-5 space-y-10">
                <div className="absolute h-[20%] top-[5%] left-[20%] space-y-2 font-bold text-center">
                    <p className="text-2xl">Join the Marketplace Revolution</p>
                    <p className='text-lg text-primary-color'>Boost Your Sales</p>
                </div>
                <img src={SellerLogin} alt='broken' className="w-[90%]
                rounded-md shadow-md"/>
            </div>
         </section>
    </div>
  )
}

export default BecomeSeller