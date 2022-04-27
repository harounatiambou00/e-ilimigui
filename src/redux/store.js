import {createStore} from 'redux';
import reducers from './reducers/index';

const store = (
    reducers, 
    {},
    //This line will add the redux devtools extention to the browser.
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;