import React, {useState} from 'react';

const Todo = props => {
  const [isEditing, setEditing] = useState(false);
  const editingTemplate = (
    <form className="stack-small">
      <div className="">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input id={props.id} className="w3-animate-input" type="text"/>
      </div><br/>
      <div className="btn-group">
        <button type="button" className="w3-btn" onClick={()=> setEditing(false)}>
          Cancel
          <span className="visually-hidden"> renaming {props.name}</span>
        </button>
        <button type="submit" className="w3-btn w3-black">
          Save
          <span className="visually-hidden"> new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          className="w3-check"
          type="checkbox"
          defaultChecked={props.isCompleted}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div><br/>
      <div className="btn-group">
        <button type="button" className="w3-btn w3-border w3-border-black" onClick={() => setEditing(true)}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="w3-btn w3-border w3-border-black w3-red"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return (
    <li className="w3-ul">
      {isEditing ? editingTemplate : viewTemplate}
      {/*<div>*/}
      {/*  <input className="w3-check" id={props.id} type="checkbox" defaultChecked={props.isCompleted}*/}
      {/*         onChange={() => props.toggleTaskCompleted(props.id)}/>*/}
      {/*  <label className="" htmlFor="todo-0">{props.name}</label>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <button type="button" className="w3-button w3-blue">Edit*/}
      {/*  </button>*/}
      {/*  <button type="button" className="w3-button w3-red" onClick={() => props.deleteTask(props.id)}>Delete*/}
      {/*  </button>*/}
      {/*</div>*/}
    </li>
  );
};

export default Todo;