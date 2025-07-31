import React from 'react'
import ProfileFieldCard from '../../components/ProfileFieldCard'
import { Divider } from '@mui/material'

const UserDetails = () => {
  return (
    <div className='flex justify-center py-10'>

        <div className="w-full lg:w-[70%]">
            <div className="flex items-center pb-3 justify-between">
                <h1 className='text-2xl font-bold text-gray-600 '>Personal Details</h1>            
            </div>

            <div>
                <ProfileFieldCard label='Name' value={'Sanjay Gandhi'} />
                <Divider/>
                <ProfileFieldCard label='Email' value={'sanj@gmail.com'} />
                <Divider/>
                <ProfileFieldCard label='Mobile' value={'57356345'} />
            </div>
        </div>
    </div>
  )
}

export default UserDetails