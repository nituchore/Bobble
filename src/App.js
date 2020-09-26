import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignUp from "./formcontainer/signup.formcontainer";

function App() {
  return (<Router>
		   <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
	<div className="App">
    	<header className="App-header">
			<nav class="navbar navbar-light">
        		<img src={logo} className="App-logo" alt="logo" />
			</nav>
			<hr class="pt" />
      	</header>
		  <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div>
	</Router>
  );
}

export default App;
