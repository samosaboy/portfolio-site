import * as React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter } from 'react-router-dom'
import { configure } from 'mobx'
import { Provider } from 'mobx-react'
import { App } from '@containers'

configure({
    enforceActions: 'always',
})

ReactDOM.render(
    <Provider>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('app')
)
