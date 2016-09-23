/**
 * Created by lichangjun on 16/9/21.
 */
import React,{Component,PropTypes} from 'react'
import TodoItem from './TodoItem'
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFiters'

const TODO_FILTERS = {
    [SHOW_ALL] : ()=> true,
    [SHOW_ACTIVE]: todo => !todo.completed,
    [SHOW_COMPLETED]: todo => todo.completed
}

class MainSection extends Component{
    constructor(props,context){
        super(props,context)
        this.state={filter:SHOW_ALL}
    }

    deleteList(id){
        this.props.deleteTodo(id)

    }

    render(){
        const {todos,actions} = this.props
        const {filter} = this.state
        const filterTodos = todos.filter(TODO_FILTERS[filter])
        return(
            <section className="main">
                <ul className="todo-list">
                    {filterTodos.map(todo=>
                        <TodoItem onDelete={this.deleteList.bind(this)}
                                  keyid={todo.id}
                                  todo={todo} {...actions} />
                    )}
                </ul>
            </section>
        )

    }
}

MainSection.propTypes={
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    deleteTodo:PropTypes.func.isRequired
}
export default MainSection