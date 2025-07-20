import { Radio } from '@mui/material'
import React from 'react'

const AddressCard = () => {
    const handleChange =(event:any) =>{
        console.log(event.target.checked)
    }
  return (
    <div className='p-5 border rounded-md flex'>
        <div>
            <Radio
            checked={true}
            onChange={handleChange}
            value=""
            name ="radio-button"/>
        </div>
        <div className='space-y-3 pt-3'>
            <h1>Rohan</h1>
            <p className='w-[320px'>
                Alpha-2 G424, Block G, Greater Noida-201310
            </p>
            <p><strong>Mobile:</strong>536234434</p>
        </div>
    </div>
  )
}

export default AddressCard