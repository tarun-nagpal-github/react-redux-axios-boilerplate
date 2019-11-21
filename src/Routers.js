
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Base from './components/Layout/Base';
import Basepages from './components/Layout/Basepages';
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import BlankPage from './components/Custompage/Blankpage/Blankpage';
import Error from './components/Custompage/Error/Errors';
// import AnnualInvestorReport from './components/AnnualInvestor/AnnualInvestorReport';
import SyndicateInvestorReport from './components/SyndicateInvestor/SyndicateInvestorReport';
import PermissionGroupList from './components/PermissionGroupList/PermissionGroupList';
import MyProfile from './components/MyProfile/MyProfile';
import Permissions from './components/Permissions/Permissions';
import PrivateRoute from "./utils/PrivateRoute";
const listofPages = [
    '#/login',
    '#/register'

];
const Routers = () => {

    if (listofPages.indexOf(location.hash) > -1) {
        return (
            <Basepages>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Basepages>
        )
    }
    else {
        return (
            <Base>
                <Switch>
                    <PrivateRoute exact path="/" component={BlankPage} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/welcome-page" component={BlankPage} />
                    {/* <Route exact path="/annual-investor-report" component={AnnualInvestorReport}/> */}
                    <PrivateRoute exact path="/syndicate-investor-report" component={SyndicateInvestorReport} />
                    <Route exact path="/permission-group-list" component={PermissionGroupList} />
                    <PrivateRoute exact path="/my-profile" component={MyProfile} />
                    <PrivateRoute exact path="/permissions" component={Permissions} />
                    <Route exact path="/un-authorized" component={Error} />
                    <Route path='*' exact={true} component={Error} />
                </Switch>
            </Base>
        );
    }
}
export default Routers;