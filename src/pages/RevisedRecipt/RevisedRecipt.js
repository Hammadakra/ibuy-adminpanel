import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './style.css'
// import ReciptAppRej from './ReciptAppRej'
import { SettingsInputAntenna } from '@material-ui/icons';
import ReciptAppRej from '../ReciptAppRej/ReciptAppRej';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  function createData(RetailerName, CustomerId, ReciptId, status) {
    
    return { RetailerName, CustomerId, ReciptId, status };
  }
  const [newRec,setnewRec] = useState(false);
  const [currentRecord, setCurrentRecord] = useState();
  
  {

  }

  const rows = [
    createData('Walmart', 159, 6.0, false),//, <a onClick ={() => setnewRec(!newRec)}>New </a>  ,),
    createData('Metro', 237, 9.0, false),//<a onClick ={() => setnewRec(!newRec)}>New </a> ),
    createData('Amazon', 262, 16.0, false),// <a onClick ={() => setnewRec(!newRec)}>New </a> ),
    createData('eBay', 305, 3.7, false),// <a onClick ={() => setnewRec(!newRec)}>New </a> ),
    createData('Shopify', 356, 16.0, false),// <a >New</a>),
  ];


    if (newRec)
    {  
    const selected = rows.find(r => r.status);
    console.log("Hello",selected.RetailerName,selected.CustomerId,selected.ReciptId,selected.status);
    }
  return ( <div className='container'>
      <h1 style={{textAlign:"center"}}>Revised Recipt</h1>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Retailer Name</StyledTableCell>
            <StyledTableCell align="right">Customer Id</StyledTableCell>
            <StyledTableCell align="right">Recipt Id</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.RetailerName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.CustomerId}</StyledTableCell>
              <StyledTableCell align="right">{row.ReciptId}</StyledTableCell>
              <StyledTableCell align="right" onClick={() => {
                setCurrentRecord(row);
              }}>Revision</StyledTableCell>
          
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>

    
    
    {/* {currentRecord ? <ReciptAppRej row={rows} />:""} */}
    
    </div>
  );
}