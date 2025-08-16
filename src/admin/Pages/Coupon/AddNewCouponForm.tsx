import { Box, Button, Grid, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useFormik } from 'formik'
import React from 'react'


interface CouponFormValues{
  code:string,
  discountPercentage:number,
  validityStartDate: dayjs.Dayjs | null;
  validityEndDate:dayjs.Dayjs| null,
  minimumOrderValue:number
}
const AddNewCouponForm = () => {
   const formik = useFormik<CouponFormValues>({
    initialValues: {
      code: "",
      discountPercentage: 0,
      validityStartDate: null,
      validityEndDate: null,
      minimumOrderValue: 0,
    },
    onSubmit: (values) => {
      
      const formattedValues = {
        ...values,
        validityStartDate:values.validityStartDate?.toISOString(),
        validityEndDate:values.validityEndDate?.toISOString()
      }
      console.log('Form submitted with values:', values,formattedValues);
    }
  });

  return (
    <div>
        <h1 className='text-2xl font-bold pb-5 text-primary-color text-center'>Create New Coupon</h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box component={"form"} onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid size={{xs:12, sm:6}}>
                     <TextField fullWidth
                        name='code'
                        label='Coupon Code'
                        value={formik.values.code}
                        onChange={formik.handleChange}
                        error={formik.touched.code && Boolean(formik.errors.code)}
                        helperText={formik.touched.code && formik.errors.code}
                      />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                     <TextField fullWidth
                        name='discountPercentage'
                        label='Discount Percentage'
                        value={formik.values.discountPercentage}
                        onChange={formik.handleChange}
                        error={formik.touched.discountPercentage && Boolean(formik.errors.discountPercentage)}
                        helperText={formik.touched.discountPercentage && formik.errors.discountPercentage}
                      />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <DatePicker 
                    sx={{width:"100%"}}
                    label="Validity Start Date"
                    name='validityStartDate'
                    onChange={(value) => formik.setFieldValue('validityStartDate', value)}
                    value ={formik.values.validityStartDate}
                    />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <DatePicker 
                    sx={{width:"100%"}}
                    label="Validity End Date"
                    name='validityEndDate'
                    onChange={(value) => formik.setFieldValue('validityEndDate', value)}
                    value ={formik.values.validityEndDate}
                    />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                     <TextField fullWidth
                        name='minimumOrderValue'
                        label='Minimum Order Value'
                        value={formik.values.minimumOrderValue}
                        onChange={formik.handleChange}
                        error={formik.touched.minimumOrderValue && Boolean(formik.errors.minimumOrderValue)}
                        helperText={formik.touched.minimumOrderValue && formik.errors.minimumOrderValue}
                      />
                </Grid>
                <Grid size={{xs:12}}>
                     <Button fullWidth variant='contained'>
                        Create Coupon
                     </Button>
                </Grid>
              </Grid>
          </Box>
        </LocalizationProvider>
    </div>
  )
}

export default AddNewCouponForm