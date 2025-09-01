import React, { useState } from 'react'
import bannerImage from "../../../Assets/BannerImage.jpg";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Button } from '@mui/material';
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='flex justify-center h-[90vh] items-center mt-20 mb-5'>
      <div className="max-w-md rounded-md border shadow-lg">
        <img className='w-full rounded-t-md' src={bannerImage} alt="" />
        <div className='mt-8 px-10'>
          {isLogin? <LoginForm/>:<RegisterForm/>}
          <div className="flex item-center gap-1 justify-center mt-5">
            <p>{isLogin && "Don't "}have Account</p>
            <Button size='small' onClick={()=>setIsLogin(!isLogin)}>{isLogin?"Create Account":"login"}</Button>
          </div>
        </div>    
      </div>
    </div>
  )
}

export default Auth