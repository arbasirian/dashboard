import React from 'react'
import TodoList from 'components/todo-list/todo-list.component';
import NewTodo from 'components/new-todo/new-todo.component';

const TodoPage = () => {
    return (
        <div className="todo-page">
            <NewTodo />
            <TodoList />
        </div>
    )
}

export default TodoPage;
