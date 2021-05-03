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
import db from '../../Firebase/Firebase'
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
  const [tabledata,settabledata] = useState([])
//    const {ApproveRow}  = props;
//   var ApprovedRows=JSON.parse( localStorage.getItem('appArr'))
// console.log("The Data storage data",ApprovedRows)
useEffect(()=>{
  db.collection("RejectRecipt")
    // .orderBy("date")
    // .limit(10)
    .get()
    .then(querySnapshot => {
      const Matches = [];
      querySnapshot.forEach(function(doc) {
        Matches.push({
          team1: doc.data(),
        });
      });
  
      settabledata(Matches);
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
  }
  ,[])
// console.log("app Data",appdata)
  function createData(id,RetailerName, customerID, receiptID, status) {  
    return { id,RetailerName, customerID, receiptID, status };
  }

  const [newRec,setnewRec] = useState(false);
  const [currentRecord, setCurrentRecord] = useState();
  // console.log("In Approved",ApproveRow)

  const rows = 
  tabledata?.map((row,i) => (
      createData(i,row?.team1.retailerName,row?.team1.customerID, row?.team1.receiptID,false)
      ))
    if (newRec)
    {  
    const selected = rows.find(r => r.status);
    console.log("Hello",selected.RetailerName,selected.CustomerId,selected.ReciptId,selected.status);
    }
  return ( <div className='container'>
      <h1 style={{textAlign:"center"}}>REJECTED RECIPT</h1>
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
               <StyledTableCell >{row.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{row.RetailerName}</StyledTableCell>
              <StyledTableCell align="right">{row.customerID}</StyledTableCell>
              <StyledTableCell align="right">{row.receiptID}</StyledTableCell>
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