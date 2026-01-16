import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { useFormik } from 'formik';
import { Button, CircularProgress, TextField } from '@mui/material';
import { sendLoginSignupOtp, signup } from '../../../State/AuthSlice';

 
const RegisterForm = () => {
  const { auth } = useAppSelector(store => store);
  const dispatch = useAppDispatch();
      const formik = useFormik({
        initialValues:{
          email:"",
          otp:"",
          fullName:""
        },
        onSubmit:(values) =>{
          console.log("form data ",values);
          dispatch(signup({ fullName: values.fullName, email: values.email, otp:values.otp}))
        }
      })
      const handleSendOtp=()=>{
          dispatch(sendLoginSignupOtp({email:formik.values.email,role:"ROLE_CUSTOMER"}))
        }
  return (
    <div>
        <h1 className='text-center font-bold text-xl text-primary-color pb-8'>Signup</h1>
        <div className="space-y-5">
        <TextField fullWidth
                name="email"
                label ="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                />
          {auth.otpSent && <div className='space-y-3'>
              <div className='space-y-2'>
                  <p className="font-medium text-sm opacity-50">Enter OTP sent to your email</p>
                  <TextField fullWidth
                    name="otp"
                    label ="Otp"
                    value={formik.values.otp}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.otp && Boolean(formik.errors.otp)}
                    helperText={formik.touched.otp && formik.errors.otp}
                    />
              </div>
                <TextField fullWidth
                name="fullName"
                label ="Full Name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                helperText={formik.touched.fullName && formik.errors.fullName}
                />
            </div>}
            
            {!auth.otpSent && <Button onClick={handleSendOtp} fullWidth variant='contained' sx={{py:"11px"}}>
              Send Otp
            </Button>}
            {auth.otpSent && <Button onClick={()=>formik.handleSubmit()} fullWidth variant='contained' sx={{py:"11px"}}>
            {auth.loading ? <CircularProgress size="small"
                        sx={{ width: "27px", height: "27px" }} /> : "sent otp"}
            </Button>}
      </div>
    </div>
  )
}

export default RegisterForm