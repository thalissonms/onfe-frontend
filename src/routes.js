import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'
import Adm from './pages/Adm'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/adm' component={Adm}></Route>
            </Switch>
        </BrowserRouter>
    )
}