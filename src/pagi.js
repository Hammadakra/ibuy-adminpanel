// import React, { useState, useEffect } from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import './style.css';
// // import rec from '../../assets/images/rec.PNG';
// // import rec from '../../assets/images/rec.PNG';

// // import ApproveRecipt from '../ApprovedRecipt/ApproveRecipt';
// import TextField from '@material-ui/core/TextField';
// import { AndroidSharp, SettingsInputAntenna } from '@material-ui/icons';
// // import ReciptAppRej from '../ReciptAppRej/ReciptAppRej';
// // import { auth } from '../../Firebase/Firebase'
// import db from './Firebase/Firebase'

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// // const userRef = db.collection('ApprovedRecipt').add({
// //   id: tabledata?[0].team1.id,
// //   CustomerId: tabledata?[0].team1.CustomerName
// // });  
// // setState({
// //   id: '',
// //   CustomerId: '',
// //   CustomerName: '',
// //   ReciptId, ' '
// // });



// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

// export default function CustomizedTables() {
//   const classes = useStyles();
//   const [tabledata, settabledata] = useState([])

//   const fetchdata = () => {
//     db.collection("admin")
//       .get()
//       .then(querySnapshot => {
//         const Matches = [];

//         querySnapshot.forEach(function (doc) {
//           Matches.push({
//             team1: doc.data(),
//           });
//         });
//         console.log("Data FROM ADMIN", Matches, querySnapshot)

//         settabledata(Matches);
//       })
//       .catch(function (error) {
//         console.log("Error getting documents: ", error);
//       });
//   }


//   useEffect(() => {
//     fetchdata()
//   }, [])

//   function createData(id, retailerName, customerID, recieptID, imageUrl, status) {

//     return { id, retailerName, customerID, recieptID, imageUrl, status };
//   }

//   const [newRec, setnewRec] = useState(false);
//   const [currentRecord, setCurrentRecord] = useState();
//   const [selectedRow, setSelectedRow] = useState(false);
//   const [upIndex, setUpIndex] = useState(currentRecord?.id);
//   const [Approve, setApprove] = useState();
//   const [RetailerName, setRetailerName] = useState()
//   const [lastFourDigit, setLastFourDigit] = useState();
//   const [totalSpend, setTotalSpend] = useState();
//   const [transactionDate, setTransactionDate] = useState();
//   const [imageURL, setImageURL] = useState();
//   //  console.log("aa",upIndex,rows[0]?.id)
//   //   console.log("Current RE",currentRecord)
//   //   console.log("adsada",currentRecord?.id)
//   // console.log(tabledata[0]?.team1.id)
//   // createData(0,"walmart", 159, 6.0, false),

//   const rows =
//     tabledata.map((row, i) => (
//       createData(i, row?.team1.retailerName, row?.team1.customerID, row?.team1.recieptID, row?.team1.imageUrl)

//     ))

//     // console.log("The Complete Database",tabledata)
//     //, <a onClick ={() => setnewRec(!newRec)}>New </a>  ,),
//     //createData(1,'Metro', 237, 9.0, false),//<a onClick ={() => setnewRec(!newRec)}>New </a> ),
//     //createData(2,'Amazon', 262, 16.0, false),// <a onClick ={() => setnewRec(!newRec)}>New </a> ),
//     //createData(3,'eBay', 305, 3.7, false),// <a onClick ={() => setnewRec(!newRec)}>New </a> ),
//     //createData(4,'Shopify', 356, 16.0, false),// <a >New</a>),
//     ;

//   console.log(rows)
//   // const sentToApprove=()=>
//   // {

//   //    // localStorage.clear();
//   //   const storedArr = localStorage.getItem("appArr")
//   //   const approvedArr = JSON.parse(storedArr) || [];
//   //   localStorage.setItem("appArr", JSON.stringify([...approvedArr, tabledata[upIndex-1]]));
//   //  }



//   const CurrentState = () => {
//     setnewRec(!newRec);
//   }


//   const givemedata = (a, b) => {
//     setUpIndex(b)
//     setCurrentRecord(a)
//   }

//   const incre = () => {
//     setUpIndex(upIndex + 1)
//   }




//   const deleteRow = () => {
//     // db.collection("userData").doc('j0lixUNEYZgqT1EufdlbMEoKXG12').collection("url")
//     db.collection("admin").doc(rows[upIndex]?.recieptID).delete().then(() => {
//       console.log("Document successfully deleted!");
//     }).catch((error) => {
//       console.error("Error removing document: ", error);
//     });
//     fetchdata()
//   }



//   const ApprovedReciptAdd = () => {

//     db.collection("ApprovedRecipt").doc(rows[upIndex]?.recieptID).set({
//       id: rows[upIndex]?.id,
//       retailerName: rows[upIndex]?.retailerName,
//       recieptID: rows[upIndex]?.recieptID,
//       customerID: rows[upIndex]?.customerID,
//       lastFourDigit: lastFourDigit,
//       TransactionDate: transactionDate,
//       TotalSpend: totalSpend,
//     })
//       .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//       })
//       .catch((error) => {
//         console.error("Error adding document: ", error);
//       });
//   }


//   const RejectReciptAdd = () => {

//     db.collection("RejectRecipt").doc(rows[upIndex]?.recieptID).set({
//       id: rows[upIndex]?.id,
//       retailerName: rows[upIndex]?.retailerName,
//       recieptID: rows[upIndex]?.recieptID,
//       customerID: rows[upIndex]?.customerID,
//       lastFourDigit: lastFourDigit,
//       TransactionDate: transactionDate,
//       TotalSpend: totalSpend,
//     })
//       .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//       })
//       .catch((error) => {
//         console.error("Error adding document: ", error);
//       });
//   }
//   // FirebaseError: Function DocumentReference.set() called with invalid data. Unsupported field value:
//   //  undefined (found in field retailerName in document notification/u40K0SiVHfZyloxTl06E/data/Daa)

//   let newDate = new Date()
//   let date = newDate.getDate();
//   let month = newDate.getMonth() + 1;
//   let year = newDate.getFullYear();
//   console.log("Today Date", date, month, year)

//   const NotificationAddDataApprove = () => {

//     db.collection("notification").doc(rows[upIndex]?.customerID).collection("data").add({
//       id: rows[upIndex]?.id,
//       retailerName: rows[upIndex]?.retailerName,
//       recieptID: rows[upIndex]?.recieptID,
//       customerID: rows[upIndex]?.customerID,
//       lastFourDigit: lastFourDigit,
//       TransactionDate: transactionDate,
//       TotalSpend: totalSpend,
//       ApprovalStatus: 0,
//       timeStamp: newDate,
//       notificationbanner:0

//     })
//       .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//       })
//       .catch((error) => {
//         console.error("Error adding document: ", error);
//       });
//   }

//   const NotificationAddDataReject = () => {

//     db.collection("notification").doc(rows[upIndex]?.customerID).collection("data").add({
//       id: rows[upIndex]?.id,
//       retailerName: rows[upIndex]?.retailerName,
//       recieptID: rows[upIndex]?.recieptID,
//       customerID: rows[upIndex]?.customerID,
//       lastFourDigit: lastFourDigit,
//       TransactionDate: transactionDate,
//       TotalSpend: totalSpend,
//       ApprovalStatus: 1,
//       timeStamp: newDate,
//       notificationbanner:0


//     })
//       .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//       })
//       .catch((error) => {
//         console.error("Error adding document: ", error);
//       });
//   }
//   const RevisionReciptAdd = () => {

//     db.collection("revisionRecipt").doc(rows[upIndex]?.customerID).set({
//       id: rows[upIndex]?.id,
//       retailerName: rows[upIndex]?.retailerName,
//       recieptID: rows[upIndex]?.recieptID,
//       customerID: rows[upIndex]?.customerID,
//       lastFourDigit: lastFourDigit,
//       TransactionDate: transactionDate,
//       TotalSpend: totalSpend,
//     })
//       .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//       })
//       .catch((error) => {
//         console.error("Error adding document: ", error);
//       });
//   }

//   const RevisedReciptAdd = () => {

//     db.collection("revisedRecipt").doc(rows[upIndex]?.recieptID).set({
//       id: rows[upIndex]?.id,
//       retailerName: rows[upIndex]?.retailerName,
//       recieptID: rows[upIndex]?.recieptID,
//       customerID: rows[upIndex]?.customerID,
//       lastFourDigit: lastFourDigit,
//       TransactionDate: transactionDate,
//       TotalSpend: totalSpend,
//     })
//       .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//       })
//       .catch((error) => {
//         console.error("Error adding document: ", error);
//       });
//   }

//   return (<div className='container'>
//     <h1>NEW RECIPT</h1>

//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Id</StyledTableCell>
//             <StyledTableCell>Retailer Name</StyledTableCell>
//             <StyledTableCell align="right">Customer Id</StyledTableCell>
//             <StyledTableCell align="right">Recipt Id</StyledTableCell>
//             <StyledTableCell align="right">Status</StyledTableCell>


//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.name}>


//               <StyledTableCell >
//                 {row.id}
//               </StyledTableCell>


//               <StyledTableCell component="th" scope="row">
//                 {row.retailerName}
//               </StyledTableCell>


//               <StyledTableCell align="right">{row.customerID}</StyledTableCell>
//               <StyledTableCell align="right">{row.recieptID}</StyledTableCell>
//               {/* <StyledTableCell align="right" onClick ={ () => setCurrentRecord(row)} */}
//               <StyledTableCell align="right" onClick={() => givemedata(row, row.id)}
//               >New</StyledTableCell>

//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>

//     </TableContainer>


// import React, { useEffect, useState } from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import './style.css';
// import {auth} from '../../Firebase/Firebase'
// import db from '../../Firebase/Firebase';
// // import ReciptAppRej from './ReciptAppRej'
// import { SettingsInputAntenna } from '@material-ui/icons';
// import ReciptAppRej from '../ReciptAppRej/ReciptAppRej';

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);



// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

// export default function CustomizedTables(props) {
//   const classes = useStyles();
//   const [appdata,setappdata]=useState();
//   const [tabledata,settabledata] = useState([])
//   //  const {ApproveRow}  = props;
//   // var ApprovedRows=JSON.parse( localStorage.getItem('appArr'))
// // console.log("The Data storage data",ApprovedRows)

// useEffect(()=>{
//   db.collection("ApprovedRecipt")
//     // .orderBy("date")
//     // .limit(10)
//     .get()
//     .then(querySnapshot => {
//       const Matches = [];
//       querySnapshot.forEach(function(doc) {
//         Matches.push({
//           team1: doc.data(),
//         });
//       });
  
//       settabledata(Matches);
//     })
//     .catch(function(error) {
//       console.log("Error getting documents: ", error);
//     });
//   }
//   ,[])
// console.log("app Data",tabledata)
//   function createData(id,retailerName, customerID, receiptID, status) {  
//     return { id,retailerName, customerID, receiptID, status };
//   }

//   const [newRec,setnewRec] = useState(false);
//   const [currentRecord, setCurrentRecord] = useState();
//   // console.log("In Approved",ApproveRow)

//   const rows = 
//   tabledata?.map((row,i) => (
//       createData(i,row?.team1.retailerName,row?.team1.customerID, row?.team1.receiptID,false)
//       ))
  


//   return ( <div className='container'>
//       <h1 style={{textAlign:"center"}}>APPROVED RECIPT</h1>
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="customized table">
//         <TableHead>
//           <TableRow>
            
//             <StyledTableCell>ID</StyledTableCell>
//             <StyledTableCell>Retailer Name</StyledTableCell>
//             <StyledTableCell align="right">Customer Id</StyledTableCell>
//             <StyledTableCell align="right">Recipt Id</StyledTableCell>
//             <StyledTableCell align="right">Status</StyledTableCell>
           
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows?.map((row) => (
//             <StyledTableRow key={row.name}>
//                <StyledTableCell>{row.id}</StyledTableCell>
               
//               <StyledTableCell component="th" scope="row">{row.retailerName}</StyledTableCell>
//               <StyledTableCell align="right">{row.customerID}</StyledTableCell>
//               <StyledTableCell align="right">{row.receiptID}</StyledTableCell>
//               <StyledTableCell align="right" onClick={() => {
//                 setCurrentRecord(row);
//               }}>Approve</StyledTableCell>
          
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
      
//     </TableContainer>

    
    
//     {/* {currentRecord ? <ReciptAppRej row={rows} />:""} */}
    
//     </div>
//   );
// }
import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import TextField from '@material-ui/core/TextField';
// import {auth} from '../../Firebase/Firebase'
import db from './Firebase/Firebase';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
// function createData(id,retailerName, customerID, receiptID, status) {  
//     return { id,retailerName, customerID, receiptID, status };
//   }
const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'id' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Retailer name' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Customer id' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Recipt id' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Status' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    
    <TableHead>
      <TableRow>
        {/* <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell> */}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {/* {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Nutrition
        </Typography>
      )} */}

      {/* {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )} */}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  
  const [appdata,setappdata]=useState();
  const [tabledata,settabledata] = useState([])
  //  const {ApproveRow}  = props;
  // var ApprovedRows=JSON.parse( localStorage.getItem('appArr'))
// console.log("The Data storage data",ApprovedRows)



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
console.log("app Data",tabledata)
  function createData(id,retailerName, customerID, recieptID,imageUrl, status) {  
    return { id,retailerName, customerID, recieptID, imageUrl,status };
  }

  const rows = 
  tabledata?.map((row,i) => (
      createData(i,row?.team1.retailerName,row?.team1.customerID, row?.team1.recieptID,row?.team1.imageUrl,false)
      ))


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
          notificationbanner:0
    
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
          ApprovalStatus: 1,
          timeStamp: newDate,
          notificationbanner:0
    
    
        })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      }
      const RevisionReciptAdd = () => {
    
        db.collection("revisionRecipt").doc(rows[upIndex]?.customerID).set({
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
    
    
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
        <h1 style={{textAlign:"center"}}>APPROVE RECIPT</h1>
      <Paper className={classes.paper}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      {/* <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell> */}
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.retailerName}</TableCell>
                      <TableCell align="right">{row.customerID}</TableCell>
                      <TableCell align="right">{row.recieptID}</TableCell>
                      <TableCell align="right" onClick={() => givemedata(row, row.id)}>Approved</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    
  

  
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
                <img style={{width:400,height:400}} src={rows[upIndex]?.imageUrl} />
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
        {/* <div style={{ visibility: "hidden" }}> */}
          {/* {selectedRow || <ApproveRecipt ApproveRow={Approve} />} */}
        {/* </div> */}
      </div>
    </div>
  </div>
  );
}
