import React, { useEffect, useState } from 'react'
import bannerImage from "../../../Assets/BanerImg.png";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Alert, Button, Snackbar } from '@mui/material';
import { useAppSelector } from '../../../State/Store';
const Auth = () => {
  const { auth } = useAppSelector(store => store);
  const [isLogin, setIsLogin] = useState(true);
   const handleCloseSnackbar = () => setSnackbarOpen(false);
   const [snackbarOpen, setSnackbarOpen] = useState(false);

   useEffect(() => {

        if (auth.otpSent || auth.error) {
            setSnackbarOpen(true);
            console.log("store ", auth.error)
        }

    }, [auth.otpSent,auth.error])
  return (
    <div className="flex items-center justify-center bg-gray-50 px-4 py-10">
  <div className="flex w-full max-w-5xl rounded-xl overflow-hidden shadow-xl bg-white">
    
    {/* LEFT BANNER */}
    <div className="hidden md:flex w-1/2 bg-gray-100 max-h-[420px]">
      <img
        src={bannerImage}
        alt="Auth Banner"
        className="object-cover w-full h-full"
      />
    </div>

    {/* RIGHT FORM */}
    <div className="w-full md:w-1/2 px-8 py-8">
      <h2 className="text-xl font-semibold text-center mb-4">
        {isLogin ? "Welcome Back" : "Create Account"}
      </h2>

      {isLogin ? <LoginForm /> : <RegisterForm />}

      <div className="flex items-center justify-center gap-1 mt-4 text-sm">
        <span>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </span>
        <Button size="small" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Create Account" : "Login"}
        </Button>
      </div>
    </div>
  </div>

  {/* Snackbar */}
  <Snackbar
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    open={snackbarOpen}
    autoHideDuration={6000}
    onClose={handleCloseSnackbar}
  >
    <Alert
      onClose={handleCloseSnackbar}
      severity={auth.error ? "error" : "success"}
      variant="filled"
      sx={{ width: '100%' }}
    >
      {auth.error ? auth.error : "OTP sent to your email!"}
    </Alert>
  </Snackbar>
</div>

  )
}

export default Auth