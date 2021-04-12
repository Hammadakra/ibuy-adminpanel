import React, { useEffect, useState } from 'react';
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

export default function RejectRecipt(props) {
  const classes = useStyles();
  const [appdata,setappdata]=useState();
   const {ApproveRow}  = props;
  var ApprovedRows=JSON.parse( localStorage.getItem('appArr'))
console.log("The Data storage data",ApprovedRows)

useEffect(()=>{
setappdata(ApprovedRows)
},[])
console.log("app Data",appdata)
  function createData(id,RetailerName, CustomerId, ReciptId, status) {  
    return { id,RetailerName, CustomerId, ReciptId, status };
  }

  const [newRec,setnewRec] = useState(false);
  const [currentRecord, setCurrentRecord] = useState();
  console.log("In Approved",ApproveRow)

  const rows = 
  appdata?.map((row) => (
      createData(row?.team1.id,row?.team1.CustomerName,row?.team1.CustomerId, row?.team1.ReciptId,false)
      ))
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
          {rows?.map((row) => (
            <StyledTableRow key={row.name}>
               <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.RetailerName}</StyledTableCell>
              <StyledTableCell align="right">{row.CustomerId}</StyledTableCell>
              <StyledTableCell align="right">{row.ReciptId}</StyledTableCell>
              <StyledTableCell align="right" onClick={() => {
                setCurrentRecord(row);
              }}>Reject</StyledTableCell>
          
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>

    
    
    {/* {currentRecord ? <ReciptAppRej row={rows} />:""} */}
    
    </div>
  );
}