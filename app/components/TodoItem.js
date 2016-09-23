/**
 * Created by lichangjun on 16/9/21.
 */
import React,{Component,PropTypes} from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

class TodoItem extends Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            editing :false
        }
    }

    handleClick(e){
        const deletId = this.props.todo.id
        this.props.onDelete(deletId)
    }

    render() {
        const { keyid,todo } = this.props


        let element

        if(this.state.editing){
            element = (
                <TodoTextInput text={todo.text} />
            )
        }else {
            element = (
                <div className="view">
                    <input className="toggle"
                           type="checkbox"
                           checked={todo.completed} />
                    <label>
                        {todo.text}
                    </label>
                    <button onClick={this.handleClick.bind(this)} className="destroy" />
                </div>
            )
        }

        return (
            <li ref="list" className={
                classnames({
                    completed : todo.completed,
                    editing : this.state.editing
                })
            }>
                {element}
            </li>
        )
    }
}

TodoItem.propTypes = {
    keyid:PropTypes.string.isRequired,
    todo : PropTypes.object.isRequired
}

export default TodoItem



