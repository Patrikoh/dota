import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReactDOM from 'react-dom';
import Application from './application'
import app from './reducers/rootReducer'
import injectTapEventPlugin from 'react-tap-event-plugin'

require('./styles/main.scss');

let store = createStore(app)

injectTapEventPlugin()

ReactDOM.render(
        <Provider store={store}>
                <MuiThemeProvider>
                        <Application />
                </MuiThemeProvider>
        </Provider>,
        document.getElementById('root')
);
