import React, { Component } from 'react';
import App from '../App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageNotFound from '../components/PageNotFound';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={App} exact={true} />
                        <Route path="/create" component={AddExpense} />
                        <Route path="/edit/:id" component={EditExpense} />
                        <Route path="/help" component={HelpPage} />
                        <Route component={PageNotFound} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRouter;

