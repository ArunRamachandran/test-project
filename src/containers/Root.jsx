import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../store/store';
import { HomeView } from './HomeView';

export const Root = () => {

    return (
        <div>
            <h1>This is title</h1>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomeView} />
                    <Route exact path="/abc" component={HomeView} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}