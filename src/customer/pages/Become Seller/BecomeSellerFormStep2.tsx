import { Box, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';

import React from 'react';

const path = "pickupAddress";

const BecomeSellerFormStep2 = ({ formik }: any) => {
  return (
    <Box>
      <h1 className="text-center mb-5 font-semibold">Pickup Address</h1>
      <Grid container spacing={3}>
        
     
          <TextField
            fullWidth
            name={`${path}.name`}
            label="Name"
            value={formik.values.pickupAddress.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.pickupAddress?.name &&
              Boolean(formik.errors.pickupAddress?.name)
            }
            helperText={
              formik.touched.pickupAddress?.name &&
              formik.errors.pickupAddress?.name
            }
          />
    

        <Grid size={6}>
          <TextField
            fullWidth
            name={`${path}.mobile`}
            label="Mobile"
            value={formik.values.pickupAddress.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.pickupAddress?.mobile &&
              Boolean(formik.errors.pickupAddress?.mobile)
            }
            helperText={
              formik.touched.pickupAddress?.mobile &&
              formik.errors.pickupAddress?.mobile
            }
          />
        </Grid>

        <Grid size={6}>
          <TextField
            fullWidth
            name={`${path}.pincode`}
            label="Pincode"
            value={formik.values.pickupAddress.pincode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.pickupAddress?.pincode &&
              Boolean(formik.errors.pickupAddress?.pincode)
            }
            helperText={
              formik.touched.pickupAddress?.pincode &&
              formik.errors.pickupAddress?.pincode
            }
          />
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            name={`${path}.address`}
            label="Address"
            value={formik.values.pickupAddress.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            name={`${path}.locality`}
            label="Locality"
            value={formik.values.pickupAddress.locality}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>

        <Grid size={6}>
          <TextField
            fullWidth
            name={`${path}.city`}
            label="City"
            value={formik.values.pickupAddress.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>

        <Grid size={6}>
          <TextField
            fullWidth
            name={`${path}.state`}
            label="State"
            value={formik.values.pickupAddress.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Grid>

      </Grid>
    </Box>
  );
};

export default BecomeSellerFormStep2;
