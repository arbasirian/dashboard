import React, { useState } from 'react';

import deleteIcon from 'assets/images/delete.png';
import editIcon from 'assets/images/edit.png';

import Modal from 'antd/lib/modal/Modal';
import { connect } from 'react-redux';
import { deleteTodo, updateTodo } from 'redux/todo/todo.actions';
import { selectTodoList } from 'redux/todo/todo.selectors';
import { createStructuredSelector } from 'reselect';
import UpdateTodo from 'components/update-todo/update-todo.component';

const TodoList = ({ todoList, deleteTodo, updateTodoData }) => {
    const [showUpdate, setShowUpdate] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const onUpdate = (user) => {
        setShowUpdate(true)
        setSelectedTodo(user)
    }
    const updateData = (todoItem) =>  {
        updateTodoData(todoItem)
        setShowUpdate(false);
    }
    const seemMore = (text, length = 50) =>  text && text.length > length ? text.substring(0, length) + '...' : text;

    return (
        <div className="user-list">
            <table className="table-design ">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoList?.length > 0 ? todoList.map(({ id, title, description }, index) =>
                            <tr key={index}>
                                <td>{seemMore(title)}</td>
                                <td>{seemMore(description, 60)}</td>
                                <td>
                                    <button className="btn action-btn" onClick={ () => onUpdate({ id, title, description }) }><img src={editIcon} alt="" /></button>
                                    <button className="btn action-btn" onClick={() => deleteTodo(id)}><img src={deleteIcon} alt="" /></button>
                                </td>
                            </tr>
                        ) :
                            <tr>
                                <td colSpan="3">No Item Found</td>
                            </tr>
                    }

                </tbody>
            </table>
            <Modal
                visible={showUpdate}
                centered
                footer={false}
                width="80%"
                onCancel={ () => setShowUpdate(false) }
            >
                <UpdateTodo todoInfo={ selectedTodo }  onUpdateTodo={ (item) => updateData(item) }  />
            </Modal>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    todoList: selectTodoList
});

const mapDispatchToProps = dispatch => ({
    deleteTodo: (username) => dispatch(deleteTodo(username)),
    updateTodoData: (user) => dispatch(updateTodo(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
