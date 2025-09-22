import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../State/Store'
import { discount } from '../../../data/Filter/discount'
import { Category } from '@mui/icons-material'
import { createDeal } from '../../../State/admin/DealSlice'

const CreateDealForm = () => {
    const dispatch = useAppDispatch();
    const {home} = useAppSelector(store => store);
    console.log(home);
    const formik = useFormik({
            initialValues:{
                discount:0,
                category:"",
            },
            onSubmit:(values)=>{
                console.log("submit ",values)
                const reqData = {
                    discount:values.discount,
                    Category:{
                        id:values.category
                    }
                }
                dispatch(createDeal(reqData));
            }
           
        })
  return (
    <Box component={"form"} onSubmit={formik.handleSubmit} className='space-y-6'>
        <Typography variant='h4' className='text-center'>Create Deal</Typography>
         <TextField fullWidth
            name='discount'
            label='discount'
            value={formik.values.discount}
            onChange={formik.handleChange}
            error={formik.touched.discount && Boolean(formik.errors.discount)}
            helperText={formik.touched.discount && formik.errors.discount}
        />
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formik.values.category}
            label="Category"
            onChange={formik.handleChange}
        >       
            {/* <MenuItem value="50">50</MenuItem> */}
            
            {home.homePageData?.dealCategories?.map((item)=><MenuItem value={item.id}>{item.name}</MenuItem>)};
        </Select>
        </FormControl>
        <Button fullWidth sx={{py:".9rem"}} type="submit" variant='contained'>
             Create Deal
        </Button>
    </Box>
  )
}

export default CreateDealForm