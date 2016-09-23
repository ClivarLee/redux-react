/**
 * Created by lichangjun on 16/9/22.
 */
import React,{Component,PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../action'

class App extends Component{

    render(){
        const {todos,actions} = this.props

        return (
            <div>
                <Header addTodo={actions.addTodo} />
                <MainSection deleteTodo={actions.deleteTodo} todos={todos} actions={actions} />
            </div>
        )
    }
}

App.propTypes={
    todos:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired
}

function mapStateToProps(state){
    return { todos : state.todos}
}

function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(TodoActions,dispatch)
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(App)