import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './src/components/Landing';
import Profile from './src/components/Profile';

export default (
    <Switch>
        <Route exact path='/' component={landing}/>
        <Rout path='/profile' component={Profile}/>
    </Switch>
)