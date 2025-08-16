import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { fetchSellerProducts } from '../../../State/seller/sellerProductSlice';
import { AppDispatch, useAppSelector } from '../../../State/Store';
import { Product } from '../../../types/ProuductTypes';
import { Button, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ProductTable() {
  const dispatch = useDispatch<AppDispatch>();
  const {sellerProduct} = useAppSelector(store=>store);
  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      dispatch(fetchSellerProducts(token));
    }
  }, []);
  // console.log("Redux sellerProduct:", sellerProduct);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{bgcolor:'teal'}}>
          <TableRow>
            <TableCell sx={{ color: 'white' }}>Images</TableCell>
            <TableCell sx={{ color: 'white' }}>Title</TableCell>
            <TableCell sx={{ color: 'white' }} align="right">MRP</TableCell>
            <TableCell sx={{ color: 'white' }} align="right">Selling Price</TableCell>
            <TableCell sx={{ color: 'white' }} align="right">Color</TableCell>
            <TableCell sx={{ color: 'white' }} align="right">Update Stock</TableCell>
            <TableCell sx={{ color: 'white' }} align="right">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellerProduct.products.map((item:Product) => { console.log("Rendering product:", item); return(
            
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className='flex gap-1 flex-wrap'>
                  {item?.images?.map((image, idx) => (
                    <img className='w-20 rounded-md' key={idx} src={image} alt=""/>
                  ))}
                </div>
              </TableCell>
              <TableCell >{item.title }</TableCell>
              <TableCell align="right">{item.mrpPrice}</TableCell>
              <TableCell align="right">{item.sellingPrice}</TableCell>
              <TableCell align="right">{item.color}</TableCell>
              <TableCell align="right">
                <Button size='small'>
                  in_stock
                </Button>
              </TableCell>
              <TableCell align="right">
                <IconButton color ='primary' size='small'>
                  <Edit/>
                </IconButton>
              </TableCell>
            </TableRow>
          )}
        )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
