// import React, { useEffect, useState } from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import './style.css'
// // import ReciptAppRej from './ReciptAppRej'
// import db from '../../Firebase/Firebase'
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

// export default function RejectRecipt(props) {
//   const classes = useStyles();
//   const [appdata,setappdata]=useState();
//   const [tabledata,settabledata] = useState([])
// //    const {ApproveRow}  = props;
// //   var ApprovedRows=JSON.parse( localStorage.getItem('appArr'))
// // console.log("The Data storage data",ApprovedRows)
// useEffect(()=>{
//   db.collection("revisionRecipt")
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
// // console.log("app Data",appdata)
//   function createData(id,retailerName, customerID, recieptID, status) {  
//     return { id,retailerName, customerID, recieptID, status };
//   }

//   const [newRec,setnewRec] = useState(false);
//   const [currentRecord, setCurrentRecord] = useState();
//   // console.log("In Approved",ApproveRow)

//   const rows = 
//   tabledata?.map((row,i) => (
//       createData(i,row?.team1.retailerName,row?.team1.customerID, row?.team1.recieptID,false)
//       ))
//     if (newRec)
//     {  
//     const selected = rows.find(r => r.status);
//     console.log("Hello",selected.retailerName,selected.CustomerId,selected.recieptID,selected.status);
//     }
//   return ( <div className='container'>
//       <h1 style={{textAlign:"center"}}>REVISION RECIPT</h1>
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
//                <StyledTableCell >{row.id}</StyledTableCell>
//               <StyledTableCell component="th" scope="row">{row.retailerName}</StyledTableCell>
//               <StyledTableCell align="right">{row.customerID}</StyledTableCell>
//               <StyledTableCell align="right">{row.recieptID}</StyledTableCell>
//               <StyledTableCell align="right" onClick={() => {
//                 setCurrentRecord(row);
//               }}>Revision</StyledTableCell>
          
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
      
//     </TableContainer>

    
    
//     {/* {currentRecord ? <ReciptAppRej row={rows} />:""} */}
    
//     </div>
//   );
// }
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
// import {auth} from '../../Firebase/Firebase'
import db from '../../Firebase/Firebase';

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

useEffect(()=>{
  db.collection("revisionRecipt")
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
console.log("app Data",tabledata)
  function createData(id,retailerName, customerID, recieptID, status) {  
    return { id,retailerName, customerID, recieptID, status };
  }

  const rows = 
  tabledata?.map((row,i) => (
      createData(i,row?.team1.retailerName,row?.team1.customerID, row?.team1.recieptID,false)
      ))

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
        <h1 style={{textAlign:"center"}}>REVISION RECIPT</h1>
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
                      <TableCell align="right">Revision</TableCell>
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
    </div>
  );
}