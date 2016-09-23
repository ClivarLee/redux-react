/**
 * Created by lichangjun on 16/9/21.
 */
import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import App from './app/containers/App'
import configureStore from './app/store/configureStore'
import './css/todos.css'

const store   = configureStore();

render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
)