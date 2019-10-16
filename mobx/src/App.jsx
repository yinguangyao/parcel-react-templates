import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
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
        <Router>
            <Provider store={stores}>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Provider>
        </Router>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('app')
)