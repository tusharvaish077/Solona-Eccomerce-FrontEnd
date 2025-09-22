import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { fetchTransactionsBySeller } from '../../../State/seller/transactionSlice';

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

export default function Transaction() {
  const dispatch = useAppDispatch();
  const {transaction} = useAppSelector(store=>store);
  React.useEffect(() => {
    
    dispatch(fetchTransactionsBySeller(localStorage.getItem("jwt") || ""))
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{bgcolor:'teal'}}>
          <TableRow>
            <TableCell sx={{ color: 'white' }}>Date</TableCell>
            <TableCell sx={{ color: 'white' }}>Customer Details</TableCell>
            <TableCell sx={{ color: 'white' }} align="right">Order</TableCell>
            <TableCell sx={{ color: 'white' }} align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transaction.transactions.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.customer.email}
              </TableCell>
              <TableCell align="right">{item.order.id}</TableCell>
              <TableCell align="right">{item.order.totalSellignPrice}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
