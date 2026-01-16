
import { Box, TextField } from '@mui/material'
import React from 'react'

const path = "bankDetails";
const BecomeSellerFormStep3 = ({formik}:any) => {
  return (
    <Box>
      <h1 className="text-center mb-5 font-semibold">Bank Details</h1>
      <div className="space-y-6">
        <TextField
          fullWidth
          name={`${path}.accountNumber`}
          label="Account Number"
          value={formik.values.bankDetails.accountNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <TextField
          fullWidth
          name={`${path}.ifscCode`}
          label="IFSC Code"
          value={formik.values.bankDetails.ifscCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <TextField
          fullWidth
          name={`${path}.accountHolderName`}
          label="Account Holder Name"
          value={formik.values.bankDetails.accountHolderName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
    </Box>
  )
}

export default BecomeSellerFormStep3