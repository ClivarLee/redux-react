/**
 * Created by lichangjun on 16/9/22.
 */
import React,{Component,propTypes} from 'react'
import {render} from 'react-dom'
import {router} from '../routers'

export  default class Root extends Component{
    ReactDom.render(){

        const { store , history } = this.props

        return (
            <Provider store={store}>
                <Router history={history} router={router}/>
            </Provider>
        )

    }
}

Root.propTypes = {
    history:propTypes.object.isRequired
}