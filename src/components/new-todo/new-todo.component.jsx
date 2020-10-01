import React, { useState } from 'react';
import './new-todo.styles.scss';

import Modal from 'antd/lib/modal/Modal';
import NewTodoForm from 'components/new-todo-form/new-todo-form.component';
import { connect } from 'react-redux';
import { addNewTodo } from 'redux/todo/todo.actions';

const NewTodo = ({ addTodo }) => {
    const [showUpdate, setShowUpdate] = useState(false);
    const newItem = (item) => {
        addTodo(item);
        setShowUpdate(false);
    }
    return (
        <div className="new-todo">
            <button className="btn new-btn" onClick={() => setShowUpdate(true)}>New Todo Item</button>
            <Modal
                visible={showUpdate}
                centered
                footer={false}
                width="80%"
                onCancel={() => setShowUpdate(false)}
            >
                <NewTodoForm onAddItem={(item) => newItem(item)} />
            </Modal>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addTodo: (user) => dispatch(addNewTodo(user)),
})
export default connect(null, mapDispatchToProps)(NewTodo);
