
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';

const AccountStatus =[
  {status:"PENDING_VERIFICATION",title:"Pending Verification",description:"Account is under verification"},
  {status:"ACTIVE",title:"Active",description:"Account is active and in good state"},
  {status:"SUSPENDED",title:"Suspended",description:"Account is temporarily Suspended"},
  {status:"DEACTIVATED",title:"Deactivated",description:"Account is deactivated"},
  {status:"BANNED",title:"Banned",description:"Account is permanently banned from the platform"},
  {status:"CLOSED",title:"Closed",description:"Account is permanently closed"},
  
]
const SellerTable = () => {
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
      <div className="pb-5 w-60">
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Account Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={accountStats}
          label="Account Status"
          onChange={handleChange}
        >
          {AccountStatus.map((item)=><MenuItem value={item.status}>{item.title}</MenuItem>)}
                    
        </Select>
      </FormControl>
      </div>
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{bgcolor:'teal'}}>
              <TableRow>
                <TableCell sx={{ color: 'white' }}>Seller Name</TableCell>
                <TableCell sx={{ color: 'white' }}>Email</TableCell>
                <TableCell sx={{ color: 'white' }} align="right">Mobile</TableCell>
                <TableCell sx={{ color: 'white' }} align="right">GSTIN</TableCell>
                <TableCell sx={{ color: 'white' }} align="right">Bussiness Name</TableCell>
                <TableCell sx={{ color: 'white' }} align="right">Account Status</TableCell>
                <TableCell sx={{ color: 'white' }} align="right">Change Status</TableCell>
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
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">
                    <Button>Change</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  )
}

export default SellerTable