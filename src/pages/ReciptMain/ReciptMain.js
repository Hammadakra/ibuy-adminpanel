import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './style.css';
// import rec from '../../assets/images/rec.PNG';
// import rec from '../../assets/images/rec.PNG';

import ApproveRecipt from '../ApprovedRecipt/ApproveRecipt';
import TextField from '@material-ui/core/TextField';
import { AndroidSharp, SettingsInputAntenna } from '@material-ui/icons';
import ReciptAppRej from '../ReciptAppRej/ReciptAppRej';
import { auth } from '../../Firebase/Firebase'
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
  const [tabledata, settabledata] = useState([])

  const fetchdata = () => {
    db.collection("admin")
      .get()
      .then(querySnapshot => {
        const Matches = [];

        querySnapshot.forEach(function (doc) {
          Matches.push({
            team1: doc.data(),
          });
        });
        console.log("Data FROM ADMIN", Matches, querySnapshot)

        settabledata(Matches);
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }


  useEffect(() => {
    fetchdata()
  }, [])

  function createData(id, retailerName, customerID, recieptID, imageUrl, status) {

    return { id, retailerName, customerID, recieptID, imageUrl, status };
  }

  const [newRec, setnewRec] = useState(false);
  const [currentRecord, setCurrentRecord] = useState();
  const [selectedRow, setSelectedRow] = useState(false);
  const [upIndex, setUpIndex] = useState(currentRecord?.id);
  const [Approve, setApprove] = useState();
  const [RetailerName, setRetailerName] = useState()
  const [lastFourDigit, setLastFourDigit] = useState();
  const [totalSpend, setTotalSpend] = useState();
  const [transactionDate, setTransactionDate] = useState();
  const [imageURL, setImageURL] = useState();
  //  console.log("aa",upIndex,rows[0]?.id)
  //   console.log("Current RE",currentRecord)
  //   console.log("adsada",currentRecord?.id)
  // console.log(tabledata[0]?.team1.id)
  // createData(0,"walmart", 159, 6.0, false),

  const rows =
    tabledata.map((row, i) => (
      createData(i, row?.team1.retailerName, row?.team1.customerID, row?.team1.recieptID, row?.team1.imageUrl)

    ))

    // console.log("The Complete Database",tabledata)
    //, <a onClick ={() => setnewRec(!newRec)}>New </a>  ,),
    //createData(1,'Metro', 237, 9.0, false),//<a onClick ={() => setnewRec(!newRec)}>New </a> ),
    //createData(2,'Amazon', 262, 16.0, false),// <a onClick ={() => setnewRec(!newRec)}>New </a> ),
    //createData(3,'eBay', 305, 3.7, false),// <a onClick ={() => setnewRec(!newRec)}>New </a> ),
    //createData(4,'Shopify', 356, 16.0, false),// <a >New</a>),
    ;

  console.log(rows)
  // const sentToApprove=()=>
  // {

  //    // localStorage.clear();
  //   const storedArr = localStorage.getItem("appArr")
  //   const approvedArr = JSON.parse(storedArr) || [];
  //   localStorage.setItem("appArr", JSON.stringify([...approvedArr, tabledata[upIndex-1]]));
  //  }



  const CurrentState = () => {
    setnewRec(!newRec);
  }


  const givemedata = (a, b) => {
    setUpIndex(b)
    setCurrentRecord(a)
  }

  const incre = () => {
    setUpIndex(upIndex + 1)
  }




  const deleteRow = () => {
    // db.collection("userData").doc('j0lixUNEYZgqT1EufdlbMEoKXG12').collection("url")
    db.collection("admin").doc(rows[upIndex]?.recieptID).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
    fetchdata()
  }



  const ApprovedReciptAdd = () => {

    db.collection("ApprovedRecipt").doc(rows[upIndex]?.recieptID).set({
      id: rows[upIndex]?.id,
      retailerName: rows[upIndex]?.retailerName,
      recieptID: rows[upIndex]?.recieptID,
      customerID: rows[upIndex]?.customerID,
      lastFourDigit: lastFourDigit,
      TransactionDate: transactionDate,
      TotalSpend: totalSpend,
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }


  const RejectReciptAdd = () => {

    db.collection("RejectRecipt").doc(rows[upIndex]?.recieptID).set({
      id: rows[upIndex]?.id,
      retailerName: rows[upIndex]?.retailerName,
      recieptID: rows[upIndex]?.recieptID,
      customerID: rows[upIndex]?.customerID,
      lastFourDigit: lastFourDigit,
      TransactionDate: transactionDate,
      TotalSpend: totalSpend,
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
  // FirebaseError: Function DocumentReference.set() called with invalid data. Unsupported field value:
  //  undefined (found in field retailerName in document notification/u40K0SiVHfZyloxTl06E/data/Daa)

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  console.log("Today Date", date, month, year)

  const NotificationAddDataApprove = () => {

    db.collection("notification").doc(rows[upIndex]?.customerID).collection("data").add({
      id: rows[upIndex]?.id,
      retailerName: rows[upIndex]?.retailerName,
      recieptID: rows[upIndex]?.recieptID,
      customerID: rows[upIndex]?.customerID,
      lastFourDigit: lastFourDigit,
      TransactionDate: transactionDate,
      TotalSpend: totalSpend,
      ApprovalStatus: 0,
      timeStamp: newDate,

    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  const NotificationAddDataReject = () => {

    db.collection("notification").doc(rows[upIndex]?.customerID).collection("data").add({
      id: rows[upIndex]?.id,
      retailerName: rows[upIndex]?.retailerName,
      recieptID: rows[upIndex]?.recieptID,
      customerID: rows[upIndex]?.customerID,
      lastFourDigit: lastFourDigit,
      TransactionDate: transactionDate,
      TotalSpend: totalSpend,
      ApprovalStatus: 0,
      timeStamp: date, month, year,

    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
  const RevisionReciptAdd = () => {

    db.collection("revisionRecipt").doc(rows[upIndex]?.customerID).doc(rows[upIndex]?.recieptID).set({
      id: rows[upIndex]?.id,
      retailerName: rows[upIndex]?.retailerName,
      recieptID: rows[upIndex]?.recieptID,
      customerID: rows[upIndex]?.customerID,
      lastFourDigit: lastFourDigit,
      TransactionDate: transactionDate,
      TotalSpend: totalSpend,
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  const RevisedReciptAdd = () => {

    db.collection("revisedRecipt").doc(rows[upIndex]?.recieptID).set({
      id: rows[upIndex]?.id,
      retailerName: rows[upIndex]?.retailerName,
      recieptID: rows[upIndex]?.recieptID,
      customerID: rows[upIndex]?.customerID,
      lastFourDigit: lastFourDigit,
      TransactionDate: transactionDate,
      TotalSpend: totalSpend,
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  return (<div className='container'>
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
                {row.retailerName}
              </StyledTableCell>


              <StyledTableCell align="right">{row.customerID}</StyledTableCell>
              <StyledTableCell align="right">{row.recieptID}</StyledTableCell>
              {/* <StyledTableCell align="right" onClick ={ () => setCurrentRecord(row)} */}
              <StyledTableCell align="right" onClick={() => givemedata(row, row.id)}
              >New</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>




    {/* {currentRecord ? <ReciptAppRej  Allrow = {rows} row ={currentRecord} />:""} */}

    <div>

      <div className='mainContainer'>


        <div class="square">
          <form noValidate autoComplete="off">
            <br></br>
            <br></br>

            <h1 style={{ textAlign: 'center' }}>Recipt Information</h1>
            <div className='subSquare'>
              <div class="content">
                <form>
                  <div className='FormData'>
                    <TextField
                      required
                      label="Customer Id"
                      id="outlined-required"
                      // defaultValue="CustomerId"
                      defaultValue={0}
                      value={rows[upIndex]?.customerID}
                      variant="outlined"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Retailer Name"
                      // defaultValue="Retailer Name"
                      variant="outlined"
                      defaultValue="none"
                      value={rows[upIndex]?.retailerName}

                      variant="outlined"
                    />
                    <br></br>
                    <br></br>

                    <TextField
                      required
                      id="outlined-required"
                      label="Transaction Date"
                      // defaultValue='Transaction Date'
                      value={transactionDate}
                      variant="outlined"
                      onChange={(e) => setTransactionDate(e.target.value)}

                    />

                    <TextField
                      required
                      id="outlined-required"
                      label="Total Spend"
                      // defaultValue='Total Spend'
                      value={totalSpend}
                      variant="outlined"
                      onChange={(e) => setTotalSpend(e.target.value)}
                    />
                    <br></br>
                    <br></br>

                    <TextField
                      required
                      id="outlined-required"
                      label="Last 4 Digit"
                      defaultValue="none"
                      value={lastFourDigit}
                      variant="outlined"
                      onChange={(e) => setLastFourDigit(e.target.value)}
                    />

                    <TextField
                      required
                      id="outlined-required"
                      label="Retailer Name"
                      // defaultValue="Retailer Name"
                      value={rows[upIndex]?.retailerName}
                      variant="outlined"
                    // value={rows[upIndex]?.RetailerName}
                    />
                  </div>
                </form>
              </div>

              <div className="ReciptPic" >
                <img src={rows[upIndex]?.imageUrl} />
              </div>
            </div>



            <div className="buttons">

              <div className='HomeNext' >

                {lastFourDigit?.length > 0 && totalSpend?.length > 0 && transactionDate?.length > 0 && rows[upIndex]?.retailerName.length > 0 ?
                  (
                    <button type="button" class="btn btn-success" name="button"
                      onClick={() => { ApprovedReciptAdd(); NotificationAddDataApprove() }} > Approve </button>)

                  :
                  (<button type="button" disabled class="btn btn-success" name="button"
                    onClick={() => { ApprovedReciptAdd(); NotificationAddDataApprove() }} >Approve </button>)}


                {lastFourDigit?.length > 0 && totalSpend?.length > 0 && transactionDate?.length > 0 && rows[upIndex]?.retailerName.length > 0 ?
                  (<button type="button" class="btn btn-red" name="button" onClick={() => { RejectReciptAdd(); NotificationAddDataReject() }}>Reject </button>) : (<button type="button" class="btn btn-red" name="button" disabled onClick={() => { RejectReciptAdd(); NotificationAddDataReject() }}>Reject </button>)}

                <br></br>

                <br></br>
                {lastFourDigit?.length > 0 && totalSpend?.length > 0 && transactionDate?.length > 0 && rows[upIndex]?.retailerName.length > 0 ?
                  (
                    <button type="button" class="btn btn-success" name="button"
                      onClick={() => { RevisionReciptAdd(); deleteRow(); }} > Revision </button>)

                  :
                  (<button type="button" disabled class="btn btn-success" name="button"
                    onClick={() => { RevisionReciptAdd(); deleteRow() }} >Revision </button>)}
                {lastFourDigit?.length > 0 && totalSpend?.length > 0 && transactionDate?.length > 0 && rows[upIndex]?.retailerName.length > 0 ?
                  (
                    <button type="button" class="btn btn-success" name="button"
                      onClick={() => { RevisedReciptAdd(); deleteRow() }} > Revised </button>)

                  :
                  (<button type="button" disabled class="btn btn-success" name="button"
                    onClick={() => { RevisedReciptAdd(); deleteRow() }} >Revised </button>)}

              </div>


              <div className='HomeNext' >
                <button type="button" class="btn btn-primary" name="button" onClick={() => setUpIndex(0)}>Home</button>
                <button type="button" class="btn btn-primary" name="button" onClick={incre} >next</button>
              </div>
            </div>

          </form>
        </div>

        {/* <div className="ReciptPic"></div> */}


        {/* row[count] */}
        <div style={{ visibility: "hidden" }}>
          {selectedRow || <ApproveRecipt ApproveRow={Approve} />}
        </div>
      </div>
    </div>
  </div>
  );
}
