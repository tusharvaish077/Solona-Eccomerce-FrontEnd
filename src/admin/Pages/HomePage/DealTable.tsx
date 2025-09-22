import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { useEffect } from 'react';
import { getAllDeals } from '../../../State/admin/DealSlice';

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

export default function DealTable() {
  const dispatch = useAppDispatch();
  const deal = useAppSelector((state) => state.deal);


  useEffect(() => {
    dispatch(getAllDeals());    
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{bgcolor:'teal'}}>
          <TableRow>
            <TableCell sx={{ color: 'white' }}>No</TableCell>
            <TableCell sx={{ color: 'white' }} >Image</TableCell>
            <TableCell sx={{ color: 'white' }} >Category</TableCell>
            <TableCell sx={{ color: 'white' }} align="right">Discount</TableCell>
            <TableCell sx={{ color: 'white' }} align="right">Update</TableCell>
            <TableCell sx={{ color: 'white' }} align="right">Delete</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {deal.deals.map((item,index) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell >
                <img className='w-20 rounded-md' src={item.category.image} alt="" />
              </TableCell>
              <TableCell>{item.category.categoryId}</TableCell>
              <TableCell align="right">{item.discount}</TableCell>
              <TableCell align="right">
                            <Button>
                                <Edit/>
                            </Button>
                          </TableCell>
            <TableCell align="right">
                            <IconButton>
                                <Delete sx={{color:"red"}}/>
                            </IconButton>
                          </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
