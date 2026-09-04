import React, { useState } from 'react'
import { useEffect } from "react";
import { fetchBrands } from "../../../Brand/redux/brandAsyncThunk";
import { useAppSelector } from '../../../State/Store'
import { menLevelTwo } from '../../../data/category/level two/menLevelTwo'
import { furnitureLevelTwo } from '../../../data/category/level two/furnitureLevelTwo'
import { womenLevelTwo } from '../../../data/category/level two/womenLevelTwo'
import { electronicsLevelTwo } from '../../../data/category/level two/electronicsLevelTwo'
import { menLevelThree } from '../../../data/category/level three/menLevelThree'
import { womenLevelThree } from '../../../data/category/level three/womenLevelThree'
import { electronicsLevelThree } from '../../../data/category/level three/electronicsLevelThree'
import { useFormik } from 'formik'
import { Button, CircularProgress, FormControl, FormHelperText, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { AddPhotoAlternate } from '@mui/icons-material'
import { uploadToCloudinary } from '../../../Util/uploadToCoudinary'
import CloseIcon from '@mui/icons-material/Close';
import { colors } from '../../../data/Filter/colors'
import { sizes } from '../../../data/Filter/sizes'
import { mainCategory } from '../../../data/category/mainCategory'
import { useAppDispatch } from '../../../State/Store'
import { createProduct } from '../../../State/seller/sellerProductSlice'
import { fetchCategories } from '../../../Admins/Catalog/redux/categoryAsyncThunks';


const categoryTwo: {[key:string]:any[]} = {
    men:menLevelTwo,
    women:womenLevelTwo,
    kids:[],
    home_furniture:furnitureLevelTwo,
    beauty:[],
    electronics: electronicsLevelTwo
}

const categoryThree: {[key:string]: any[]}={
    men: menLevelThree,
    women:womenLevelThree,
    kids:[],
    home_furniture:[],
    electronics:electronicsLevelThree
}


const AddProduct = () => {
    const [uploadImage, setUploadImage] = useState(false);
    const [snackbarOpen, setsnackbarOpen] = useState(false);

    const dispatch = useAppDispatch();
    const { categories } = useAppSelector(
        state => state.category
    );
    const { brands } = useAppSelector(state => state.brand);

    useEffect(() => {
        dispatch(fetchBrands());
         dispatch(fetchCategories(localStorage.getItem("jwt") || ""));
    }, [dispatch]);
    const formik = useFormik({
    initialValues:{
        title:"",
        description:"",
        mrpPrice:"",
        sellingPrice:"",
        quantity:"",
        color:"",
        images:[],
        category:"",
        category2:"",
        category3:"",
        sizes:"",
        brandId: null
    },
    onSubmit: (values) => {

    // const request = {
    //     title: values.title,
    //     description: values.description,

    //     mrpPrice: Number(values.mrpPrice),
    //     sellingPrice: Number(values.sellingPrice),
    //     quantity: Number(values.quantity || 0),

    //     color: values.color,
    //     images: values.images,

    //     categoryId: Number(values.category3),

    //     sizes: values.sizes,

    //     brandId: Number(values.brandId)
    // };
    const request = {
    title: values.title,
    description: values.description,
    mrpPrice: values.mrpPrice,
    sellingPrice: values.sellingPrice,
    quantity: values.quantity,
    color: values.color,
    images: values.images,
    sizes: values.sizes,

    categoryId: Number(values.category3),

    brandId: Number(values.brandId)
};

    console.log("REQUEST => ", request);

    dispatch(
        createProduct({
            request,
            jwt: localStorage.getItem("jwt")
        })
    );
}
});
    
    const childCategory =(category:any, parentCategoryId:any)=>{
        return category.filter((child:any)=>{
            return child.parentCategoryId == parentCategoryId;
        });
    }
    const handleCloseSnackbar =()=>{
        setsnackbarOpen(false);
    }
    const handleImageChange = async(event:any)=>{
        const file =event.target.files[0];
        setUploadImage(true);
        const image = await uploadToCloudinary(file);
        console.log("response of the image uplaode"+image);
        formik.setFieldValue("images",[...formik.values.images, image]);
        setUploadImage(false);
    }
    const handleRemoveImage =(index:number) => {
        const updatedImages =[...formik.values.images];
        updatedImages.splice(index,1);
        formik.setFieldValue("images", updatedImages);
    }
    const rootCategories = categories.filter(
        category => category.parentId === null
    );

    const level2Categories = categories.filter(
        category =>
            category.parentId === Number(formik.values.category)
    );

    const level3Categories = categories.filter(
        category =>
            category.parentId === Number(formik.values.category2)
    );

  return (
    <div>
        <form onSubmit={formik.handleSubmit} className='space-y-4 p-4'>
        <Grid container spacing={2}>
            <Grid className='flex flex-wrap gap-5' size={{xs:12}}>
                <input 
                    type='file'
                    accept='image/*'
                    id='fileInput'
                    style={{display:"none"}}
                    onChange={handleImageChange}
                />
                <label className='relative' htmlFor="fileInput">
                    <span className="w-24 h-24 cursor-pointer flex items-center justify-center
                     p-4 border rounded-md border-gray-400">
                        <AddPhotoAlternate className='text-gray-700'/>
                    </span>
                    {uploadImage && (
                        <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24
                         flex justify-center items-center'>
                            <CircularProgress/>
                        </div>
                    )}
                </label>
                <div className="flex flex-wrap gap-2">
                    {
                        formik.values.images.map((image, index)=>(
                            <div className='relative'>
                                <img className='w-24 h-24 object-cover'
                            key={index}
                            src={image}
                            alt={`productImage ${index+1}`}/>
                            <IconButton 
                                onClick={()=>handleRemoveImage(index)}
                                className=''
                                size='small'
                                color='error'
                                sx={{
                                    position:"absolute",
                                    top:0,
                                    right:0,
                                    outline:"none",
                                }}>
                                    <CloseIcon sx={{fontSize:"1rem"}}/>
                            </IconButton>
                            </div>

                        ))}
                </div>
            </Grid>
            <Grid size={{xs:12, md:4 , lg:4}}>
                <TextField fullWidth
                    multiline
                    id='title'
                    name='title'
                    label='Title'
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    required
                />
            </Grid>
            <Grid size={{xs:12}}>
                <TextField fullWidth
                    multiline
                    rows={4}
                    id='description'
                    name='description'
                    label='Description'
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                    required
                />
            </Grid>
            <Grid size={{xs:12, md:4, lg:3}}>
                <TextField
                fullWidth
                id='mrpPrice'
                name='mrpPrice'
                label='MRP Price'
                type='number'
                value={formik.values.mrpPrice}
                onChange={formik.handleChange}
                error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
                helperText={formik.touched.mrpPrice && formik.errors.mrpPrice}
                required
                />
            </Grid>
            <Grid size={{xs:12, md:4, lg:3}}>
                <TextField fullWidth
                    id='sellingPrice'
                    name='sellingPrice'
                    label='Selling Price'
                    type='number'
                    value={formik.values.sellingPrice}
                    onChange={formik.handleChange}
                    error={formik.touched.sellingPrice && Boolean(formik.errors.sellingPrice)}
                    helperText={formik.touched.sellingPrice && formik.errors.sellingPrice}
                    required
                />
            </Grid>
            <Grid size={{xs:12, md:4, lg:3}}>
                <FormControl
                fullWidth
                error={formik.touched.color && Boolean(formik.errors.color)}
                required >
                <InputLabel id='color-label'>Color</InputLabel>
                <Select
                    labelId='color-label'
                    id='color'
                    name='color'
                    value={formik.values.color}
                    onChange={formik.handleChange}
                    label="Color">
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {colors.map((color,index)=><MenuItem value={color.name}>
                            <div className="flex gap-3">
                                <span style={{backgroundColor: color.hex}}
                                className={`h-5 w-5 rounded-full ${color.name =="White" ? "border":""}`} >

                                </span>
                                <p>{color.name}</p>
                            </div>
                        </MenuItem>)}
                </Select>
                {formik.touched.color && formik.errors.color && (<FormHelperText>{formik.errors.color}</FormHelperText>)}
                </FormControl>
            </Grid>

            <Grid size={{xs:12, md:4, lg:3}}>
                <FormControl
                fullWidth
                error={formik.touched.sizes && Boolean(formik.errors.sizes)}
                required >
                <InputLabel id='sizes-label'>Sizes</InputLabel>
                <Select
                    labelId='sizes-label'
                    id='sizes'
                    name='sizes'
                    value={formik.values.sizes}
                    onChange={formik.handleChange}
                    label="Size">
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {sizes.map((size,index)=><MenuItem value={size.name}>
                            <p>{size.value}</p>
                        </MenuItem>)}
                </Select>
                {formik.touched.sizes && formik.errors.sizes && (<FormHelperText>{formik.errors.sizes}</FormHelperText>)}
                </FormControl>
            </Grid>
            <Grid size={{ xs: 12, md: 4, lg: 3 }}>

                <FormControl fullWidth required>

                    <InputLabel id="brand-label">
                        Brand
                    </InputLabel>

                    <Select
                        labelId="brand-label"
                        id="brandId"
                        name="brandId"
                        value={formik.values.brandId ?? ""}
                        onChange={formik.handleChange}
                        label="Brand"
                    >

                        <MenuItem value="">
                            <em>Select Brand</em>
                        </MenuItem>

                        {brands.map((brand) => (

                            <MenuItem
                                key={brand.id}
                                value={brand.id}
                            >
                                {brand.name}
                            </MenuItem>

                        ))}

                    </Select>

                </FormControl>

            </Grid>
            <Grid size={{xs:12, md:4, lg:4}}>
                <FormControl fullWidth>
                    <InputLabel>Main Category</InputLabel>

                    <Select
                        name="category"
                        value={formik.values.category}
                        onChange={(e) => {
                            formik.setFieldValue("category", e.target.value);
                            formik.setFieldValue("category2", "");
                            formik.setFieldValue("category3", "");
                        }}
                    >
                        {rootCategories.map(category => (
                            <MenuItem
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid size={{xs:12, md:4, lg:4}}>
                <FormControl fullWidth>
                    <InputLabel>Sub Category</InputLabel>

                    <Select
                        name="category2"
                        value={formik.values.category2}
                        onChange={(e) => {
                            formik.setFieldValue("category2", e.target.value);
                            formik.setFieldValue("category3", "");
                        }}
                    >
                        {level2Categories.map(category => (
                            <MenuItem
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid size={{xs:12, md:4, lg:4}}>
               <FormControl fullWidth>
                <InputLabel>Child Category</InputLabel>

                <Select
                    name="category3"
                    value={formik.values.category3}
                    onChange={formik.handleChange}
                >
                    {level3Categories.map(category => (
                        <MenuItem
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            </Grid>
            <Grid size={{xs:12}}>
                <Button sx={{p:"14px"}}
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    >
                        {false ? <CircularProgress size="small" sx={{width:"27px", height:"27px"}}/> : "Add Product"}
                    </Button>
            </Grid>
            
        </Grid>
        </form>
    </div>
  )
}

export default AddProduct