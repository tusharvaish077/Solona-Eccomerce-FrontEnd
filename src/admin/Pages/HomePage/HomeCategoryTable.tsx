import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { HomeCategory } from '../../../types/HomeCategoryTypes';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}



export default function HomeCategoryTable({data}:{data:HomeCategory[]}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{bgcolor:'teal'}}>
          <TableRow>
            <TableCell sx={{ color: 'white' }}>No</TableCell>
            <TableCell sx={{ color: 'white' }}>Id</TableCell>
            <TableCell sx={{ color: 'white' }} align="right">Image</TableCell>
            <TableCell sx={{ color: 'white' }} align="right">Category</TableCell>
            <TableCell sx={{ color: 'white' }} align="right">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((category, index) => (
            <TableRow
              key={category.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell >{category.id}</TableCell>
              <TableCell>
                <img className='w-20 rounded-md'
                src={category.image} alt=''/>
              </TableCell>
              <TableCell align="right">{category.categoryId}</TableCell>
              <TableCell align="right">
                <Button>
                    <Edit/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
