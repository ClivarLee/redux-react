/**
 * Created by lichangjun on 16/9/21.
 */
import React , {Component, PropTypes} from 'react'
import TodoTextInput from './TodoTextInput'

class Header extends Component{

    handleSave(text) {
        if(text.length !== 0){
            this.props.addTodo(text)
        }
    }

    render(){
        return (
            <header className="header">
                <h1>todos</h1>
                <TodoTextInput newTodo
                               onSave = {this.handleSave.bind(this)}
                               placeholder = "What the fuck" />
            </header>
        )
    }
}
export default Header