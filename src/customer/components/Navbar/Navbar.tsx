import { Avatar, Box, Button, Icon, IconButton,useTheme,useMediaQuery } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AddShoppingCart, Favorite, FavoriteBorder } from '@mui/icons-material';
const Navbar = () => {
    const theme = useTheme();

    const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
        <Box>
            <div className='flex items-center justify-between px-5 lg:px-20 h-[70px]
            border-b'>
                <div className='flex items-center gap-9'>
                    <div className='flex item-center gap-2'>
                    {!isLarge && <IconButton>
                        <MenuIcon/>
                    </IconButton>}
                    <h1 className="logo cursor-pointer text-lg md:text-xl lg:text-[1.4rem] text-primary-color">Solona Ecommerce</h1>
                    </div>

                    <ul className='flex items-center font-medium text-gray-800 gap-1'>
                        {["Men","Women","Home & Furniture","Electronics"].map(
                            (items)=><li className='mainCategory cursor-pointer hover:text-primary-color
      hover:border-b-2 border-primary-color pb-8 pt-8
      h-7 px-2 py-2 text-xs sm:text-sm md:text-sm lg:text-base
      flex items-center'>
                               {items}</li>)}
                    </ul>
                </div>
                    <div className='flex gap-1 lg:gap-6 items-center'>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                        {
                            true?<Button className='flex items-center gap-2'>
                                <Avatar
                                sx={{width:29, height:29 }}
                                 src="/Icons/Screenshot 2025-07-09 211247.png"
                                 />
                                <h1 className='font-semibold hidden lg:block'>Tushar</h1>
                                </Button>:
                            <Button variant='contained'>Login</Button>
                        }
                        <IconButton>
                           <FavoriteBorder sx={{ fontSize: 29 }} />
                        </IconButton>
                        <IconButton>
                           <AddShoppingCart className='text-gray-700' sx={{ fontSize: 29 }} />
                        </IconButton>
                        { isLarge && <Button variant='outlined'>
                            Become Seller
                        </Button>}
                    </div>
            </div>
        </Box>
    </>
  )
}

export default Navbar