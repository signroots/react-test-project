import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Form from './components/Form';
import './App.css';

import About from './components/Table/About';
import Home from './components/Table/Home';
import 'bootstrap/dist/css/bootstrap.min.css'

{/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link> */}



const App = () => {
  return(
     <div style={{maxWidth: "30rem",margin: "4rem auto"}}>
       <Router>
         
         <Switch>
            <Route exact path="/" component={Form} />
           
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
                
          
        </Switch>
       </Router>
       

     </div>
  )
  
}

export default App

