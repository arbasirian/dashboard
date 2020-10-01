import React from 'react'

import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { selectTodoList } from 'redux/todo/todo.selectors';
import { createStructuredSelector } from 'reselect';

const NewTodoForm = ({ onAddItem, todoList }) => {
    const { register, handleSubmit, reset } = useForm();
    const updateUser = (item) => {
        const newId = Date.now()
        onAddItem({ ...item, id: newId });
        reset();
    }
    return (
        <div className="new-todo-form">
            <form className="form-design" onSubmit={handleSubmit(updateUser)}>
                <div className="input-wrapper">
                    <div className="input-item">
                        <label>Title</label>
                        <input name="title" type="text" ref={register({ required: true })} placeholder="Please enter Title" />
                    </div>
                </div>
                <div className="input-wrapper">
                    <div className="input-item">
                        <label>Description</label>
                        <textarea name="description" ref={register({ required: true })} placeholder="Please enter Description"/>
                    </div>
                </div>
                <div className="input-wrapper">
                    <button className="btn submit-btn" type="submit">Add New Item</button>
                </div>

            </form>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    todoList: selectTodoList
})

export default connect(mapStateToProps)(NewTodoForm)
