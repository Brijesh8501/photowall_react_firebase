import React from 'react'
import ReactDOM from 'react-dom'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Components/App'
import thunk from 'redux-thunk'
import database from './database/config'


const mystore = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk))

//const h1tag = React.createElement('h1',null,'Hello Brijesh to your first react app');

//ReactDOM.render(h1tag, document.getElementById('root'));


/*const liTagCreate = React.createElement('ol',null,
    liData.map((ardata,index) => React.createElement('li',{key:index},ardata) )

 );*/

ReactDOM.render(<Provider store = {mystore}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'));