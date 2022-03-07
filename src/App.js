import React, { Component } from 'react';
import Contacts from './components/contacts';
import ContactsSingle from './components/contactssingle';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class App extends Component {  
    render() {
        
        return (
            <Router>
                <div>        
                <ul>
                    <li>
                    <Link to="/users">Users</Link>
                    </li>
                    <li>
                    <Link to="/single">Single</Link>
                    </li>                                       
                </ul>                                       
                <Switch>
                <Route exact path="/users" component={Contacts} />                
                <Route exact path="/single" component={ContactsSingle} />                
                </Switch>       
                </div>       
            </Router>                        
        )
    }

}

export default App;
