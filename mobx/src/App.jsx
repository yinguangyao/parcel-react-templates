import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import stores from './store'

ReactDOM.render(
    <Provider store={stores}>
        <h1>hello, world</h1>
    </Provider>,
    document.getElementById('app')
)