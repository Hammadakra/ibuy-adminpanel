import React, { useState,useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './style.css';
import rec from '../../assets/images/rec.PNG';
import ApproveRecipt from '../ApprovedRecipt/ApproveRecipt';
import TextField from '@material-ui/core/TextField';
import { AndroidSharp, SettingsInputAntenna } from '@material-ui/icons';
import ReciptAppRej from '../ReciptAppRej/ReciptAppRej';
import {auth} from '../../Firebase/Firebase'
import db from '../../Firebase/Firebase'

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

  // const userRef = db.collection('ApprovedRecipt').add({
  //   id: tabledata?[0].team1.id,
  //   CustomerId: tabledata?[0].team1.CustomerName
  // });  
  // setState({
  //   id: '',
  //   CustomerId: '',
  //   CustomerName: '',
  //   ReciptId, ' '
  // });



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const [tabledata,settabledata] = useState([])

const fetchdata=()=>{
  db.collection("Recipt")
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


  useEffect(()=>{
  fetchdata()
  },[])
              
  function createData(id,RetailerName, CustomerId, ReciptId, status) {
    
    return {id, RetailerName, CustomerId, ReciptId, status };
  }

  const [newRec,setnewRec] = useState(false);
  const [currentRecord, setCurrentRecord] = useState();
  const [selectedRow,setSelectedRow] = useState(false); 
  const [upIndex,setUpIndex] =useState(currentRecord?.id);   
  const [Approve ,setApprove] = useState();
  const [RetailerName,setRetailerName] = useState()
  const [lastFourDigit,setLastFourDigit] = useState();
  const [totalSpend,setTotalSpend] = useState();
  const [transactionDate,setTransactionDate] = useState()
    //  console.log("aa",upIndex,rows[0]?.id)
  //   console.log("Current RE",currentRecord)
  //   console.log("adsada",currentRecord?.id)
  // console.log(tabledata[0]?.team1.id)
  // createData(0,"walmart", 159, 6.0, false),
  
  const rows = 
    tabledata.map((row,i) => (
      createData(i,row?.team1.CustomerName,row?.team1.CustomerId, row?.team1.ReciptId)
      ))
  
      // console.log("The Complete Database",tabledata)
    //, <a onClick ={() => setnewRec(!newRec)}>New </a>  ,),
    //createData(1,'Metro', 237, 9.0, false),//<a onClick ={() => setnewRec(!newRec)}>New </a> ),
     //createData(2,'Amazon', 262, 16.0, false),// <a onClick ={() => setnewRec(!newRec)}>New </a> ),
     //createData(3,'eBay', 305, 3.7, false),// <a onClick ={() => setnewRec(!newRec)}>New </a> ),
     //createData(4,'Shopify', 356, 16.0, false),// <a >New</a>),
  ;
console.log("sss sel",selectedRow?.id);
console.log("sss",rows[0]?.id)
console.log("my NEW ROW ID",upIndex)
  // const sentToApprove=()=>
  // {
    
  //    // localStorage.clear();
  //   const storedArr = localStorage.getItem("appArr")
  //   const approvedArr = JSON.parse(storedArr) || [];
  //   localStorage.setItem("appArr", JSON.stringify([...approvedArr, tabledata[upIndex-1]]));
  //  }
 


const CurrentState = () => 
  {
    setnewRec(!newRec);    
  }


const givemedata=(a,b)=>
  {
  setUpIndex(b)
  setCurrentRecord(a)
  }

const incre=()=>
  {
setUpIndex(upIndex+1)
  }

   


const deleteRow = () => 
{
  db.collection("Recipt").doc(rows[upIndex]?.ReciptId).delete().then(() => {
    console.log("Document successfully deleted!");
}).catch((error) => {
    console.error("Error removing document: ", error);
});
fetchdata()
}



   const ApprovedReciptAdd = () =>{
    
    db.collection("ApprovedRecipt").doc(rows[upIndex]?.ReciptId).set({
      id: rows[upIndex]?.id,
      CustomerName: rows[upIndex]?.RetailerName,
      ReciptId: rows[upIndex]?.ReciptId,
      CustomerId: rows[upIndex]?.CustomerId,
      
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
    }
    
    const RejectReciptAdd= () =>{
    
      db.collection("RejectRecipt").doc(rows[upIndex]?.ReciptId).set({
        id: rows[upIndex]?.id,
        CustomerName: rows[upIndex]?.RetailerName,
        ReciptId: rows[upIndex]?.ReciptId,
        CustomerId: rows[upIndex]?.CustomerId,
        
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
      }
      console.log("The length of Index",rows[upIndex]?.RetailerName.length)

  return ( <div className='container'>
      <h1>NEW RECIPT</h1>

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Retailer Name</StyledTableCell>
            <StyledTableCell align="right">Customer Id</StyledTableCell>
            <StyledTableCell align="right">Recipt Id</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
           
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>

            
              <StyledTableCell >
                {row.id}
              </StyledTableCell>
            

              <StyledTableCell component="th" scope="row">
                {row.RetailerName}
              </StyledTableCell>
            
              
              <StyledTableCell align="right">{row.CustomerId}</StyledTableCell>
              <StyledTableCell align="right">{row.ReciptId}</StyledTableCell>
              {/* <StyledTableCell align="right" onClick ={ () => setCurrentRecord(row)} */}
            <StyledTableCell align="right" onClick ={ () => givemedata(row,row.id)}
            >New</StyledTableCell>
          
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>

    <p>{rows.RetailerName}</p>
    
    {/* {currentRecord ? <ReciptAppRej  Allrow = {rows} row ={currentRecord} />:""} */}

            <div>

            <div className='mainContainer'>
        
  
        <div class="square">
      <form noValidate autoComplete="off">
      <br></br>
      <br></br>
  
      <h1 style={{textAlign:'center'}}>Recipt Information</h1>
        <div className='subSquare'>
        <div class="content">
            <form>
        <div className='FormData'>
          <TextField 
            required
            label="Customer Id"
            id="outlined-required"
            defaultValue="CustomerId"
            value={rows[upIndex]?.CustomerId}
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Retailer Name"
            variant="outlined"
            value={rows[upIndex]?.RetailerName}
            
            variant="outlined"
          />
          <br></br>
          <br></br>
          
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue='Transaction Data'
            value={transactionDate}
            variant="outlined"
            onChange={(e)=>setTransactionDate(e.target.value)}
          
          />
        
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue='Total Spend'
            value={totalSpend}
            variant="outlined"
            onChange={(e)=>setTotalSpend(e.target.value)}
          />
          <br></br>
          <br></br>
        
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Last 4 Digit"
            value={lastFourDigit}
            variant="outlined"
            onChange={(e)=>setLastFourDigit(e.target.value)}
          />
            
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Retailer Name"
            variant="outlined"
            value={rows[upIndex]?.RetailerName}
          />
        </div>
        </form>
    </div>
  
         <div className="ReciptPic" >
          <img src={rec}/>
         </div>
        </div>
  
  
  
    <div className="buttons">
    <div className= 'HomeNext' >

      { lastFourDigit?.length > 0 && totalSpend?.length > 0  && totalSpend?.length > 0 && rows[upIndex]?.RetailerName.length > 0?
      (
          <button type="button" class="btn btn-success" name="button"
          onClick ={()=> {ApprovedReciptAdd() ; deleteRow()} } > Approve </button>)

          :
          (   <button type="button" disabled class="btn btn-success" name="button" 
          onClick ={()=> {ApprovedReciptAdd() ; deleteRow()} } >Approve </button>)}

          <button type="button" class="btn btn-red" name="button"  onClick ={()=> {RejectReciptAdd() ; deleteRow()} }>Reject </button>
        </div>
    
  
        <div className= 'HomeNext' >
          <button type="button" class="btn btn-primary" name="button" onClick={ ()=>setUpIndex(0) }>Home</button>
          <button type="button" class="btn btn-primary" name="button" onClick= {incre} >next</button>
        </div>
    </div>      
      
     </form>
         </div>
  
  {/* <div className="ReciptPic"></div> */}
   
  
      {/* row[count] */}
        <div style={{visibility:"hidden"}}>
        { selectedRow || <ApproveRecipt ApproveRow = {Approve} />   }
        </div>
      </div>
            </div>
    </div>
  );
}
