import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Gallery from '../containers/Gallery'
import ABVote from '../containers/ABVote'

const NotFound404 = () => (
    <div>
        <img 
            src='https://cdn.dribbble.com/users/135873/screenshots/2961766/error404.png'
            width="90%"
            margin="auto"
        />
        <Link to="/">
            <button >Go Home</button>
        </Link>
        
    </div>
)

const App = () => (   
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Gallery} />
            <Route path='/usabbble' component={ABVote} />
            <Route component={NotFound404} />
        </Switch>
    </BrowserRouter>
)

export default App