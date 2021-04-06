import './App.css';
import  Homepage from './Homepage/index' ;
import  Signup from './Homepage/Signup/Signup' ;
import { HashRouter } from "react-router-dom";
import Header from './components/header/header';
import ReciptMain from './pages/ReciptMain/ReciptMain';
import ReciptAppRej from './pages/ReciptAppRej/ReciptAppRej';
import Rejected from './pages/RejectedRecipt/RejectedRecipt';
import Approve from './pages/ApprovedRecipt/ApproveRecipt';
import SubmittedForRev from './pages/ReciptSubmitForRevision/ReciptSubmitForRevision';
import RevisedRecipt from './pages/RevisedRecipt/RevisedRecipt';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (  
<>
  {/* <Homepage/> */}
  {/* <HashRouter> */}
    <Router>
      <Header/>
  <Switch>
  <Route path="/" exact component={Homepage} />
  <Route path="/signup" exact component={Signup} />
  <Route path="/ReciptMain" exact component={ReciptMain} />
  <Route path="/ReciptAppRej" exact component={ReciptAppRej} />
  <Route path="/Approve" exact component={Approve} />
  <Route path="/SubmittedForRev" exact component={SubmittedForRev} />
  <Route path="/Rejected" exact component={Rejected} />
  <Route path="/RevisedRecipt" exact component={RevisedRecipt} />
  
  
  </Switch>
  </Router>
  {/* </HashRouter> */}
  </>
  )
}

export default App;
