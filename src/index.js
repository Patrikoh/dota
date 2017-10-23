import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './styles/main.scss';
import App from './App';
import rootReducer from './reducers/rootReducer'
import injectTapEventPlugin from 'react-tap-event-plugin'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(rootReducer)

injectTapEventPlugin()

ReactDOM.render(
        <Provider store={store}>
                <MuiThemeProvider>
                        <App />
                </MuiThemeProvider>
        </Provider>,
        document.getElementById('root')
);

registerServiceWorker();
