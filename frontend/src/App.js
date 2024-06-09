import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Campaigns from './components/Campaigns';
import CreateCampaign from './components/CreateCampaign';
import Login from './components/Login';

function App() {
    return (
        <GoogleOAuthProvider clientId="4888696175-d4i6bosn0m6m3f8ktjtnju2bhiiihsoh.apps.googleusercontent.com">
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/create-campaign" component={CreateCampaign} />
                        <Route path="/" component={Login} />
                    </Switch>
                </div>
            </Router>
        </GoogleOAuthProvider>
    );
}

export default App;
