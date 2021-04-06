import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';
import rec from '../../assets/images/rec.PNG';
import {
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SaveIcon from "@material-ui/icons/Save";
import { lightGreen, blue, purple, pink } from "@material-ui/core/colors";



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },

    margin: {
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    spacer: {
      marginBottom: theme.spacing(10)
    }
    
  },

}));

export default function ReciptAppRej(props) {
  const classes = useStyles();
  const { row } = props;
  // const {rows} = props;
    // console.log(row);

    const [count ,setCount] = useState(0);
    
    const nextRows = () => 
    {
      console.log("Data from Recipt Main",row[count]);
    }



    console.log("Data from OutSide the function",row[count]);
 
  return (
    <div className='mainContainer'>
        
  
      <div class="square">
    <form noValidate autoComplete="off">
    <br></br>
    <br></br>

    <h1 style={{textAlign:'center'}}>Recipt Information</h1>
      <div className='subSquare'>
      <div class="content">

      <div className='FormData'>
        <TextField 
          required
          label="Customer Id"
          id="outlined-required"
          value={row[count].CustomerId}
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Retailer Name"
          value={row[count].RetailerName}
          variant="outlined"
        />
        <br></br>
        <br></br>
        
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Transaction Date"
          variant="outlined"
        />
      
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Total Spend"
          variant="outlined"
        />
        <br></br>
        <br></br>
      
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Last 4 digits"
          variant="outlined"
        />
          
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Retailer Name"
          variant="outlined"
        />
      </div>
      {/* <div className="appRej">
        <button type="button" class="btn btn-success" name="button"> Approve</button>
        <button type="button" class="btn btn-red" name="button">Reject</button>
      </div>  */}
  </div>

       <div className="ReciptPic" >
        <img src={rec}/>
       </div>
      </div>




  <div className="buttons">
  <div className= 'HomeNext' >
        <button type="button" class="btn btn-success" name="button">Approve</button>
        <button type="button" class="btn btn-red" name="button" >Reject </button>
      </div>
  

      <div className= 'HomeNext' >
        <button type="button" class="btn btn-primary" name="button">Home</button>
        <button type="button" class="btn btn-primary" name="button" onClick={ () => setCount(count+1)}>next</button>
      </div>
  </div>      
    
   </form>
       </div>

{/* <div className="ReciptPic"></div> */}
 

    




    </div>
  );
}
