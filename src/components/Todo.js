import React from 'react';

const Todo = props => {
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input id={props.id} type="checkbox" defaultChecked={props.isCompleted} />
                <label className="todo-label" htmlFor="todo-0">{props.name}</label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">Edit
                    <span className="visual-hidden"> {props.name}</span></button>
                <button type="button" className="btn btn__danger">Delete
                    <span className="visual-hidden"> {props.name}</span></button>
            </div>
        </li>
    );
};

export default Todo;