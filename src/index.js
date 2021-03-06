import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './scss/main.scss'
import Firebase, { FirebaseContext } from './components/Firebase/auth';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import pagination from './components/store/reducers/pagination';
import contact from './components/store/reducers/contact';
import registry from './components/store/reducers/registry';
import logIn from './components/store/reducers/logIn';
import logOut from './components/store/reducers/logOut';
import giveStuffForms from './components/store/reducers/giveStuffForms';


const rootReducer = combineReducers({
    pag: pagination,
    con: contact,
    reg: registry,
    logIn:logIn,
    logOut:logOut,
    formsVal: giveStuffForms
});

const logger = store => {
    return next => {
        return action => {
            const result = next(action);
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));


ReactDOM.render
    (
        <Provider store={store}>
            <FirebaseContext.Provider value={new Firebase()}>
                <App />
            </FirebaseContext.Provider>
        </Provider>
        , document.getElementById('root')
    );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
