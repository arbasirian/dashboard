import React from 'react'
import { useForm } from 'react-hook-form';

const UpdateTodo = ({ todoInfo, onUpdateTodo }) => {
    const { id, title, description } = todoInfo;
    const { register, handleSubmit } = useForm();

    const updateItem = (item) => onUpdateTodo({...item, id});

    return (
        <div className="update-todo">
            <form className="form-design" onSubmit={handleSubmit(updateItem)}>
                <div className="input-wrapper">
                    <div className="input-item">
                        <label>Title</label>
                        <input defaultValue={title} name="title" type="text" ref={register({ required: true })} placeholder="Please enter Title" />
                    </div>
                </div>
                <div className="input-wrapper">
                    <div className="input-item">
                        <label>Description</label>
                        <textarea defaultValue={description} name="description" ref={register({ required: true })} placeholder="Please enter Description"/>
                    </div>
                </div>
                <div className="input-wrapper">
                    <button className="btn submit-btn" type="submit">Update Item</button>
                </div>

            </form>
        </div>
    )
}

export default UpdateTodo;
