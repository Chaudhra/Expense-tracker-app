import React from 'react';
import {BrowserRouter, Route, Switch, Link,NavLink} from 'react-router-dom';
import Header from '../components/Header.js'
import NotFoundPage from '../components/NotFoundPage.js';
import HelpPage from '../components/HelpPage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';


const AppRouter = () =>{
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={ExpenseDashboardPage} />
                    <Route exact path = "/create" component={AddExpensePage} />
                    <Route exact path = "/edit/:id" component={EditExpensePage} />
                    <Route exact path = "/help" component={HelpPage} />
                    <Route component = {NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;
