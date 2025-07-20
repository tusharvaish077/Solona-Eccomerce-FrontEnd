import { Button } from '@mui/material'
import React from 'react'
import AddressCard from './AddressCard'

const Checkout = () => {
  return (
    <>
        <div className='pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen'>
            <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
                <h1 className="font-semibold">Select Address</h1>
                <Button>Add new Address</Button>
            </div>

            <div className="text-xs font-medium space-y-5">
                <p>Saved Address</p>
                <div className='space-y-3'>{
                        [1,1,1].map((item)=><AddressCard/>)
                    }
                </div>
            </div>
            <div className='py-4 px-5 mt-4 rounded-md border'>
                <Button>
                    Add new Address
                </Button>
            </div>
        </div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
        </Box>
        </Modal>
    </>
  )
}

export default Checkout