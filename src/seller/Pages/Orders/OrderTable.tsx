import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { fetchSellerOrders, updateOrderStatus } from '../../../State/seller/sellerOrderSlice';
import { Button, Menu, MenuItem } from '@mui/material';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const orderStatus = [
  { color: '#FFA500', label: 'PENDING' }, 
  { color: '#F5BCBA', label: 'PLACED' }, 
  { color: '#F5BCBA', label: 'CONFIRMED' },
  { color: '#1E90FF', label: 'SHIPPED' }, 
   { color: '#32CD32', label: 'DELIVERED' }, 
   { color: '#FF0000', label: 'CANCELLED' },

];

const orderStatusColor = {
  PENDING: { color: '#FFA500', label: 'PENDING' }, // Orange
  CONFIRMED:{ color: '#F5BCBA', label: 'CONFIRMED' },
  PLACED:{ color: '#F5BCBA', label: 'PLACED' }, 
  SHIPPED: { color: '#1E90FF', label: 'SHIPPED' }, // DodgerBlue
  DELIVERED: { color: '#32CD32', label: 'DELIVERED' }, // LimeGreen
  CANCELLED: { color: '#FF0000', label: 'CANCELLED' } // Red
};


export default function OrderTable() {
  const dispatch = useAppDispatch();
  const {sellerOrder} = useAppSelector(store=>store);
  React.useEffect(() => {
    dispatch(fetchSellerOrders(localStorage.getItem("jwt")|| ""))
  }, []);
  const [anchorEl, setAnchorEl] = React.useState<{ [key: number]: HTMLElement | null }>({});

  const handleClick = (event: React.MouseEvent<HTMLElement>, orderId: number) => {
    setAnchorEl((prev) => ({ ...prev, [orderId]: event.currentTarget }));
  };

  const handleClose = (orderId: number) => {
    setAnchorEl((prev) => ({ ...prev, [orderId]: null }));
  };
    const handleUpdateOrder = (orderId: number, orderStatus: any) => {
    dispatch(updateOrderStatus({
      jwt: localStorage.getItem("jwt") || "",
      orderId,
      orderStatus,
    }));
    handleClose(orderId);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{bgcolor:'teal'}}>
          <TableRow>
            <TableCell sx={{ color: 'white' }}>Order Id</TableCell>
            <TableCell sx={{ color: 'white' }}>Product</TableCell>
            <TableCell sx={{ color: 'white' }} align="right">Shipping Address</TableCell>
            <TableCell sx={{ color: 'white' }} align="right">Order Status</TableCell>
            <TableCell sx={{ color: 'white' }} align="right">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellerOrder.orders.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell >
                <div className="flex gap-1 flex-wrap">
                      {
                        item.orderItems.map((orderItem) => (
                        <div key={orderItem.id} className='flex gap-5'>
                          <img className='w-20 rounded-md'
                            src={orderItem.product.images[0]}  
                            alt='' 
                          />
                          <div className='flex flex-col justify-between py-2'>
                            <h1>Title: {orderItem.product.title}</h1>
                            <h1>Selling Price: {orderItem.product.sellingPrice}</h1>
                            <h1>Color: {orderItem.product.color}</h1>

                          </div>
                        </div>
                      ))}
                  </div>
              </TableCell>
              <TableCell align="right">
                 <div className='flex flex-col gap-y-2'>
                    <h1>{item.shippingAddress.name}</h1>
                    <h1>{item.shippingAddress.address}, {item.shippingAddress.city}</h1>
                    <h1>{item.shippingAddress.state} - {item.shippingAddress.pinCode}</h1>
                    <h1><strong>Mobile:</strong> {item.shippingAddress.mobile}</h1>
                  </div>
              </TableCell>
              <TableCell align="right">
                <span className='px-5 py-2 border rounded-full text-primary-color border-primary-color'>{item.orderStatus}</span>
              </TableCell>
              <TableCell align="right">
               <Button
                    size='small'
                    onClick={(e) => handleClick(e, item.id)}
                    color='primary'
                    className='bg-primary-color'>
                    Status
                  </Button>
                  <Menu
                    id={`status-menu ${item.id}`}
                    anchorEl={anchorEl[item.id]}
                    open={Boolean(anchorEl[item.id])}
                    onClose={() => handleClose(item.id)}
                    MenuListProps={{
                      'aria-labelledby': `status-menu ${item.id}`,
                    }}
                  >
                    {orderStatus.map((status) =>
                      <MenuItem 
                      key={status.label} 
                      onClick={() => handleUpdateOrder(item.id, status.label)}>
                        {status.label}</MenuItem>
                    )}
                  </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
