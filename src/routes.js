import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'

export default function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}></Route>
            </Switch>
        </BrowserRouter>
    )
}