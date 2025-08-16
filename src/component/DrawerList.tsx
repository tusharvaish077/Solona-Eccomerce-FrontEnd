import { Divider, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../State/Store'
import { logout } from '../State/AuthSlice'

interface menuItem{
      name:string,
      path:string,
      icon: any,
      activeIcon:any
}
interface DrawerListProps{
  menu:menuItem[],
  menu2:menuItem[],
  toggleDrawer:()=>void

}
const DrawerList = ({menu, menu2, toggleDrawer}:DrawerListProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout =() =>{
    dispatch(logout(navigate));
  }
  return (
    <div className='h-full'>
        <div className="flex flex-col justify-between h-full border-r py-5 w-[300px]">
            
              <div className="space-y-2">
                {   
                  menu.map((item, index:any)=>{
                  return <div onClick={
                          ()=>{
                            
                                navigate(item.path);
                                
                            }
                  } className='pr-9 cursor-pointer' key={index}>

                    <div className={`${item.path == location.pathname?
                      "bg-primary-color text-white":" text-primary-color"} flex
                      items-center px-5 py-3 rounded-r-full`}>

                      <ListItemIcon>
                        {item.path==location.pathname?item.activeIcon:item.icon}
                      </ListItemIcon>

                      <ListItemText primary={item.name}/>
                    </div>

                  </div>})
                }
              </div>
              <Divider/>
              <div className="space-y-2">
                {
                  menu2.map((item, index:any)=>{
                  return <div onClick={()=>{
                        console.log("Generic path: "+item.path);
                        if(item.path =="/") {
                          console.log("current path: "+item.path);
                          handleLogout();
                          
                        }
                        navigate(item.path)
                    }
                  } className='pr-9 cursor-pointer' key={index}>

                    <div className={`${item.path == location.pathname?
                      "bg-primary-color text-white":" text-primary-color"} flex
                      items-center px-5 py-3 rounded-r-full`}>

                      <ListItemIcon>
                        {item.path==location.pathname?item.activeIcon:item.icon}
                      </ListItemIcon>

                      <ListItemText primary={item.name}/>
                    </div>

                  </div>})
                }
              </div>
            
        </div>
    </div>
  )
}

export default DrawerList