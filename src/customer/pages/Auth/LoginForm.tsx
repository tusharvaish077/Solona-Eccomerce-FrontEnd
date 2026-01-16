import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { useFormik } from 'formik';
import { Button, CircularProgress, TextField } from '@mui/material';
import { sendLoginSignupOtp, signin } from '../../../State/AuthSlice';

const LoginForm = () => {
  const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false)
    const [timer, setTimer] = useState<number>(30); // Timer state
    const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const {auth} = useAppSelector(store=>store);
    const formik = useFormik({
      initialValues:{
        email:"",
        otp:""
      },
      onSubmit:(values) =>{
        console.log("form data ",values);
        dispatch(signin(values));
      }
    })
    const handleSendOtp=()=>{
        dispatch(sendLoginSignupOtp({email:"signing_"+formik.values.email, role:"ROLE_CUSTOMER"}))
      }
    const handleResendOTP = () => {
        // Implement OTP resend logic
        dispatch(sendLoginSignupOtp({ email: "signing_"+formik.values.email, role:"ROLE_CUSTOMER" }))
        console.log('Resend OTP');
        setTimer(30);
        setIsTimerActive(true);
    };

    const handleSentOtp = () => {
        setIsOtpSent(true);
        handleResendOTP();
    }

    const handleLogin = () => {
        formik.handleSubmit()
    }

  

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        if (isTimerActive) {
            interval = setInterval(() => {
                setTimer(prev => {
                    if (prev === 1) {
                        clearInterval(interval);
                        setIsTimerActive(false);
                        return 30; // Reset timer for next OTP request
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isTimerActive]);


  return (
    <div>
      <h1 className='text-center font-bold text-xl text-primary-color pb-8'>Login</h1>
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
          {auth.otpSent && <div className="space-y-2">
                    <p className="font-medium text-sm">
                        * Enter OTP sent to your mobile number
                    </p>
                    <TextField fullWidth
                       name="otp"
                      label ="OTP"
                      value={formik.values.otp}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.otp && Boolean(formik.errors.otp)}
                      helperText={formik.touched.otp && formik.errors.otp}
                    />
                    <p className="text-xs space-x-2">
                        {isTimerActive ? (
                            <span>Resend OTP in {timer} seconds</span>
                        ) : (
                            <>
                                Didn’t receive OTP?{" "}
                                <span
                                    onClick={handleResendOTP}
                                    className="text-teal-600 cursor-pointer hover:text-teal-800 font-semibold"
                                >
                                    Resend OTP
                                </span>
                            </>
                        )}
                    </p>
                    {formik.touched.otp && formik.errors.otp && <p>{formik.errors.otp as string}</p>}
                </div>}
             {auth.otpSent? <Button   disabled={auth.loading} onClick={()=>formik.handleSubmit()} fullWidth variant='contained' sx={{py:"11px"}}>
              Login
            </Button>:
            <Button  disabled={auth.loading} onClick={handleSendOtp} fullWidth variant='contained' sx={{py:"11px"}}>

              {auth.loading?<CircularProgress /> :"Send Otp"}
             
            </Button>}
             
      </div>
    </div>
  )
}

export default LoginForm