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
import {auth} from '../../Firebase/Firebase'
import {db} from '../../Firebase/Firebase'

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

export default function CustomizedTables(props) {
  const classes = useStyles();
  const {ApproveRow}  = props;
  
const [ap,setAp]=useState(ApproveRow)
  function createData(id,RetailerName, CustomerId, ReciptId, status) {  
    return { id,RetailerName, CustomerId, ReciptId, status };
  }


  const [newRec,setnewRec] = useState(false);
  const [currentRecord, setCurrentRecord] = useState();
  console.log("In  osam Approved",ApproveRow)
  const rows = [
    createData(ApproveRow?.id,ApproveRow?.RetailerName, 159, 6.0, false),
    // createData(2,'Metro', 237, 9.0, false),
    // createData(3,'Amazon', 262, 16.0, false),
    // createData(4,'eBay', 305, 3.7, false),
    // createData(5,'Shopify', 356, 16.0, false),
  ];


    if (newRec)
    {  
    const selected = rows.find(r => r.status);
    console.log("Hello",selected.RetailerName,selected.CustomerId,selected.ReciptId,selected.status);
    }
  return ( <div className='container'>
      <h1 style={{textAlign:"center"}}>APPROVED RECIPT</h1>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Retailer Name</StyledTableCell>
            <StyledTableCell align="right">Customer Id</StyledTableCell>
            <StyledTableCell align="right">Recipt Id</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
               <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.RetailerName}</StyledTableCell>
              <StyledTableCell align="right">{row.CustomerId}</StyledTableCell>
              <StyledTableCell align="right">{row.ReciptId}</StyledTableCell>
              <StyledTableCell align="right" onClick={() => {
                setCurrentRecord(row);
              }}>Approve</StyledTableCell>
          
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>

    
    
    {/* {currentRecord ? <ReciptAppRej row={rows} />:""} */}
    
    </div>
  );
}