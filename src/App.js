import React, {useState} from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

const App = props => {
  const [tasks, setTasks] = useState(props.tasks);
  let uuid = crypto.randomUUID();

  const taskList = tasks.map(task => (
      <Todo id={task.id}
            name={task.name}
            isCompleted={task.isCompleted}
            key={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
      />
    )
  );

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  function addTask(name) {
    const newTask = {id: uuid, name: name, isCompleted: false}
    setTasks([...tasks, newTask])
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, isCompleted: !task.isCompleted}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  return (
    <div>
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="">
        <FilterButton/>
        <FilterButton/>
        <FilterButton/>
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <div className="w3-ul w3-border">
        <ul role="list"
            aria-labelledby="list-heading">
          {taskList}
        </ul>
      </div>

    </div>
  );
};

export default App;
