import { Box, TextField } from '@mui/material'
import React from 'react'

  const path = "businessDetails";
const BecomeSellerFormStep4 = ({formik}:any) => {
  return (
     <Box>
      <h1 className="text-center mb-5 font-semibold">Supplier Details</h1>
      <div className="space-y-5">
        <TextField
          fullWidth
          name={`${path}.businessName`}
          label="Business Name"
          value={formik.values.businessDetails.businessName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <TextField
          fullWidth
          name="sellerName"
          label="Seller Name"
          value={formik.values.sellerName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <TextField
          fullWidth
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
    </Box>
  )
}

export default BecomeSellerFormStep4