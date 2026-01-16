import { Button, Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react'
import BecomeSellerFormStep1 from './BecomeSellerFormStep1';
import { useFormik } from 'formik';
import BecomeSellerFormStep2 from './BecomeSellerFormStep2';
import BecomeSellerFormStep4 from './BecomeSellerFormStep4';
import BecomeSellerFormStep3 from './BecomeSellerFormStep3';
import { useDispatch } from 'react-redux';
import { createSeller } from '../../../State/seller/sellerAuthSlice';
import { useAppDispatch } from '../../../State/Store';

const steps=[
    "Tax Details & Mobile",
    "Pickup Address",
    "Bank Details",
    "Supplier Details"
]
const SellerAccountForm = () => {
    const [activeStep, setActiveStep] = useState(1);
    const dispatch = useAppDispatch();
    const handleStep=(value:number)=>{
        ((activeStep>0 && value == -1) || activeStep<steps.length-1) && setActiveStep(activeStep+value);
        
         activeStep == steps.length-1 && handleCreateAccount();
    }
    const handleCreateAccount =()=>{
        console.log("Create Account");
        formik.handleSubmit();
    }
    const formik = useFormik(
        {
          initialValues: {
            mobile: '',
            otp:'',
            gstin:'',
            pickupAddress:{
                name:'',
                mobile:'',
                pincode:'',
                address:'',
                locality:'',
                city:'',
                state:'',
            },
            bankDetails:{
                accountNumber:'',
                ifscCode:'',
                accountHolderName:''
            },
            sellerName:'',
            email:'',
            businessDetails:{
                businessName:'',
                businessEmail:'',
                businessMobile:'',
                logo:'',
                banner:'',
                businessAddress:''
            },
            password:''
          },
        //   validationSchema: AddressFormSchema,
          onSubmit: (values) => {
            console.log(values, "formik submitted")
            console.log('active step ', activeStep)
            dispatch(createSeller(formik.values));
          }
        }
      )
  return (
    <div>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, items)=>(
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
        <section className='space-y-3'>
            <div>
                 {activeStep ==0 && <BecomeSellerFormStep1 formik={formik}/>} 
                 {activeStep ==1 && <BecomeSellerFormStep2 formik={formik}/>}
                 {activeStep ==2 && <BecomeSellerFormStep3 formik={formik}/>}
                 {activeStep ==3 && <BecomeSellerFormStep4 formik={formik}/>}
            </div>
                    
            <div className="flex item-center justify-between">
                <Button onClick={()=>handleStep(-1)} variant='contained' disabled ={activeStep ===0}>
                    Back
                </Button>
                <Button onClick={()=>handleStep(1)} variant='contained'>
                    {activeStep === (steps.length-1)?"Create Account":"Next" }
                </Button>
            </div>
        </section>
    </div>
  )
}

export default SellerAccountForm