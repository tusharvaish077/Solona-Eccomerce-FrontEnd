import { Box, Button, FormControlLabel, Modal, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import AddressCard from './AddressCard'
import AddressForm from './AddressForm';
import PricingCard from '../Cart/PricingCard';

import razorpayLogo from '../../../Assets/razorpay-logo.png';
import stripeLogo from '../../../Assets/stripe.png';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const paymentGatewayList = [
    {
        value: "RAZORPAY",
        image: razorpayLogo,
        label: "Razorpay"
    },
    {
        value: "STRIPE",
        image: stripeLogo,
        label: "Stripe"
    }
];
const Checkout = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [paymentGateway, setpaymentGateway] = useState("RAZORPAY");
    
    const handlePaymentChange =(event:any)=>{
        setpaymentGateway(event.target.value);
    }
    return (
        <>
            <div className='pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen'>

                <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
                    <div className="col-span-2 space-y-5">


                        <div className="flex justify-between items-center">
                            <h1 className="font-semibold">Select Address</h1>
                            <Button onClick={handleOpen}>Add new Address</Button>
                        </div>


                        <div className="text-xs font-medium space-y-5">
                            <p>Saved Address</p>
                            <div className='space-y-3'>{
                                [1, 1, 1].map((item) => <AddressCard />)
                            }
                            </div>
                        </div>
                        <div className='py-4 px-5 mt-4 rounded-md border'>
                            <Button onClick={handleOpen}>
                                Add new Address
                            </Button>
                        </div>
                    </div>
                    <div>
                            <div className='space-y-3 border p-5 rounded-md mb-3'>
                                <h1 className='text-primary-color font-medium pb-2 text-center'>Choose Payment Gateway</h1>
                                <RadioGroup row
                                 className='flex justify-between pr-0'
                                 onChange={handlePaymentChange}
                                 value={paymentGateway}>
                                    {paymentGatewayList.map((items) => (
                                        <FormControlLabel
                                            className='border w-[45%] pr-2 rounded-md'
                                            key={items.value}
                                            value={items.value}
                                            control={<Radio />}
                                            label={
                                                <img
                                                    className={`${items.value === "STRIPE" ? "w-14" : ""} object-cover`}
                                                    src={items.image}
                                                    alt={items.label}
                                                />
                                            }
                                        />
                                    ))}
                                </RadioGroup>
                            </div>
                        <div className='border rounded-md'>

                            <PricingCard />
                            <div className='p-5'>
                                <Button fullWidth
                                    variant='contained'
                                    sx={{ py: "11px" }}>Checkout</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AddressForm />
                </Box>
            </Modal>
        </>
    )
}

export default Checkout