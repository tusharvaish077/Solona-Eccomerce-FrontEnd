import React from 'react';

import {Grid, Box, Avatar, Rating, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { red } from '@mui/material/colors';

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>
      <Grid container spacing={9}>
        <Grid size={{xs:1}}>
          <Box>
            <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155FD"}}>
              Z
            </Avatar>
          </Box>
        </Grid>

        <Grid size={{xs:9}}>

          <div className='space-y-2'>
            <div>
              <p className='font-semibold text-lg'>Tushar</p>
              <p className="opacity-70">2024-07-25 12:01:45</p>
            </div>
          </div>
          <Rating
            readOnly value={4.5}
            precision={.5}
          />
          <p>value for money product , great product</p>
          <div>
            <img className='w-24 h-24 object-cover'
             src="https://m.media-amazon.com/images/I/91LCYqh3mHL._SY879_.jpg" alt="" />
          </div>
        </Grid>
      </Grid>
      <div  className='flex justify-center items-start'>
        <IconButton sx={{color:red[700]}}>
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCard;
