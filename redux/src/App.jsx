import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {
    Home
} from './pages'
import stores from './stores'

const App = () => {
    return (
        <Provider store={stores}>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
)