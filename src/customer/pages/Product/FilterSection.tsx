import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { teal } from '@mui/material/colors'
import React, { useState } from 'react'
import { colors } from '../../../data/Filter/colors'
import { useSearchParams } from 'react-router-dom'
import { price } from '../../../data/Filter/price'
import { discount } from '../../../data/Filter/discount'

const FilterSection = () => {
  const [expendColor, setExpendColor]=useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  //below three lines are pasted from gtp
  const [selectedColor, setSelectedColor] = useState('');
const [selectedPrice, setSelectedPrice] = useState('');
const [selectedDiscount, setSelectedDiscount] = useState('');

  const handleColorToggle =() =>{
    setExpendColor(!expendColor)
  }

  // const updateFilterParams =(e: any)=>{  updated from gpt below code
  //   const {value, name} = e.target;
  //   if(value){
  //     searchParams.set(name, value);
  //   }else {
  //     searchParams.delete(name);
  //   }
  //   setSearchParams(searchParams);
  // }
  const updateFilterParams = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);

    // Update internal state
    if (name === 'color') setSelectedColor(value);
    if (name === 'Price') setSelectedPrice(value);
    if (name === 'Discount') setSelectedDiscount(value);
  };


  // const clearAllFilters =()=>{  updated from gpt code 
  //   console.log("clearAllFilters", searchParams);
  //   searchParams.forEach((value:any, key:any)=>{
  //     searchParams.delete(key);
  //   });
  //   setSearchParams(searchParams);
  // }

  const clearAllFilters = () => {
    searchParams.forEach((_, key) => {
      searchParams.delete(key);
    });
    setSearchParams(searchParams);
    setSelectedColor('');
    setSelectedPrice('');
    setSelectedDiscount('');
  };

  return (
    <div className='-z-50 space-y-5 bg-white'>
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
        <p>
          Fiters
        </p>
        <Button onClick={clearAllFilters} size='small' className='text text-teal-600'>
          Clear all
        </Button>
      </div>
      <Divider/>

      <div className='px-9 space-y-6'>
        <section>
        <FormControl>
          <FormLabel sx={{
            fontSize:"16px",
            fontWeight:"bold",
            color:teal[500],
            pb:"14px"
          }} className='text-2xl font-semibold' id='color'>Color</FormLabel> 
          <RadioGroup
            aria-labelledby="color"
            defaultValue=""
            name="color"
            value={selectedColor} // putting from gpt, tracking so can revert in future
            onChange={updateFilterParams}
          >
            
            {colors.slice(0,expendColor?colors.length:5).map((items)=><FormControlLabel value={items.hex} control={<Radio />} label={
              <div className='flex items-center gap-3'>
             <p>{items.name}</p>
             <p style={{backgroundColor:items.hex}} className={`h-5 w-5 rounded-full ${items.name==="White"?"border":""}`}></p>
             </div> } />)}
            
            
          </RadioGroup>
        </FormControl>
        <div>
          <Button
          onClick={handleColorToggle}
           className='text-primary-color cursor-pointer hover:text-teal-500'>
            {expendColor?"hide":`+${colors.length-5} more`}
          </Button>
        </div>
        </section>

        <Divider/>
        
        <section>
        <FormControl>
          <FormLabel sx={{
            fontSize:"16px",
            fontWeight:"bold",
            color:teal[500],
            pb:"14px"
          }} className='text-2xl font-semibold' id='Price'>Price</FormLabel> 
          <RadioGroup
            aria-labelledby="Price"
            defaultValue=""
            name="Price"
            value={selectedPrice} // line from gpt
            onChange={updateFilterParams}
          >
            
            {price.map((items)=><FormControlLabel value={items.value} control={<Radio />} label={
              <div className='flex items-center gap-3'>
             <p>{items.name}</p>
             
             </div> } />)}
            
            
          </RadioGroup>
        </FormControl>
        
        </section>
        <Divider/>
        
        <section>
        <FormControl>
          <FormLabel sx={{
            fontSize:"16px",
            fontWeight:"bold",
            color:teal[500],
            pb:"14px"
          }} className='text-2xl font-semibold' id='Discount'>Discount</FormLabel> 
          <RadioGroup
            aria-labelledby="Discount"
            defaultValue=""
            name="Discount"
            value={selectedDiscount} // line from gpt
            onChange={updateFilterParams}
          >
            
            {discount.map((items)=><FormControlLabel value={items.value} control={<Radio />} label={
              <div className='flex items-center gap-3'>
             <p>{items.name}</p>
             
             </div> } />)}
            
            
          </RadioGroup>
        </FormControl>
        
        </section>
      </div>
    </div>
  )
}

export default FilterSection