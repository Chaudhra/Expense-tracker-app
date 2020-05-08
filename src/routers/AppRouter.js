import React from 'react';
import {Router, Route, Switch, Link,NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import LoginPage from '../components/LoginPage.js';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () =>{
    return (

        // We are using our own history, that is why we use Router instead of  BrowserRouter
        // Using our own history allows us to have access to it anywhere else we use javascript
        <Router history={history}>
            <div>
               
                <Switch>
                    <PublicRoute exact path="/" component={LoginPage} />
                    <PrivateRoute exact path ="/dashboard" component={ExpenseDashboardPage} />
                    <PrivateRoute exact path = "/create" component={AddExpensePage} />
                    <PrivateRoute exact path = "/edit/:id" component={EditExpensePage} />
                    
                    <Route component = {NotFoundPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;
