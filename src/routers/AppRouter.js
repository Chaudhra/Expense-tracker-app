import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import NotFoundPage from "../components/NotFoundPage.js";
import EditExpensePage from "../components/EditExpensePage.js";
import AddExpensePage from "../components/AddExpensePage.js";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage.js";
import LoginPage from "../components/LoginPage.js";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

{
  /* React Router allows us to dynamically render pages in the browser */
}
{
  /*The url is kep up to date as we navigate, preserving the browser history*/
}
{
  /*https://reacttraining.com/react-router/web/guides/quick-start*/
}
const AppRouter = () => {
  return (
    // We are using our own history, that is why we use Router instead of  BrowserRouter
    // Using our own history allows us to have access to it anywhere else we use javascript
    <Router history={history}>
      <div>
        {/* Using switch becase we have multiple routes, and we only want to render one at a time*/}
        {/* The components can be thought of as different 'pages' in our app */}
        <Switch>
          <PublicRoute exact path="/" component={LoginPage} />
          <PrivateRoute
            exact
            path="/dashboard"
            component={ExpenseDashboardPage}
          />
          <PrivateRoute exact path="/create" component={AddExpensePage} />
          <PrivateRoute exact path="/edit/:id" component={EditExpensePage} />

          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
