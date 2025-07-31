import { TextField } from '@mui/material'
import React from 'react'

const BecomeSellerFormStep4 = ({formik}:any) => {
  return (
    <div className='space-y-4'>
        <h1 className='text-center mb-5 font-semibold'>Supplier Details</h1>
        <TextField fullWidth
        name="backDetails.businessName"
        label ="Business Name"
        value={formik.values.bankDetails.businessName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.bankDetails?.businessName && Boolean(formik.error.bankDetails?.businessName)}
        helperText={formik.touched.bankDetails?.businessName && formik.errors.bankDetails?.businessName}
        />
        <TextField fullWidth
        name="backDetails.sellerName"
        label ="Seller Name"
        value={formik.values.bankDetails.sellerName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.bankDetails?.sellerName && Boolean(formik.error.bankDetails?.sellerName)}
        helperText={formik.touched.bankDetails?.sellerName && formik.errors.bankDetails?.sellerName}
        />

        <TextField fullWidth
        name="backDetails.email"
        label ="Email"
        value={formik.values.bankDetails.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.bankDetails?.email && Boolean(formik.error.bankDetails?.email)}
        helperText={formik.touched.bankDetails?.email && formik.errors.bankDetails?.email}
        />
        <TextField fullWidth
        name="backDetails.password"
        label ="Password"
        value={formik.values.bankDetails.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.bankDetails?.password && Boolean(formik.error.bankDetails?.password)}
        helperText={formik.touched.bankDetails?.password && formik.errors.bankDetails?.password}
        />
    </div>
  )
}

export default BecomeSellerFormStep4