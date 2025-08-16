
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Delete } from '@mui/icons-material';

const AccountStatus =[
  {status:"PENDING_VERIFICATION",title:"Pending Verification",description:"Account is under verification"},
  {status:"ACTIVE",title:"Active",description:"Account is active and in good state"},
  {status:"SUSPENDED",title:"Suspended",description:"Account is temporarily Suspended"},
  {status:"DEACTIVATED",title:"Deactivated",description:"Account is deactivated"},
  {status:"BANNED",title:"Banned",description:"Account is permanently banned from the platform"},
  {status:"CLOSED",title:"Closed",description:"Account is permanently closed"},
  
]
const Coupon = () => {
    const [accountStats, setAccountStats] = React.useState("Active");

  const handleChange = (event: SelectChangeEvent) => {
    setAccountStats(event.target.value as string);
  };
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

  return (
    <>
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{bgcolor:'teal'}}>
              <TableRow>
                <TableCell sx={{ color: 'white' }}>Coupon Code</TableCell>
                <TableCell sx={{ color: 'white' }}>Start Date</TableCell>
                <TableCell sx={{ color: 'white' }}>End Date</TableCell>
                <TableCell sx={{ color: 'white' }} align="right">Minimum Order Value</TableCell>
                <TableCell sx={{ color: 'white' }} align="right">Discount</TableCell>
                <TableCell sx={{ color: 'white' }} align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell >{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell align="right">
                    <Button><Delete/></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  )
}

export default Coupon