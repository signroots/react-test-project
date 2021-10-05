import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Login from './Login';
import Table from './Table';
import Data from './Data'



function App() {
  return (
    <div className="App">
     
      <Router>
         
         <Switch>
            <Route exact path="/" component={Login} />
           
            <Route path="/table" component={Table} />
            <Route path="/data" component={Data} />

          
                
          
        </Switch>
       </Router>
    </div>
  );
}

export default App;
