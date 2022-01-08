import React, {useState} from 'react';

const Form = props => {
  const [name, setName] = useState("");

  function handleChange(e) {
    const {value} = e.target
    setName(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name.indexOf(""))
    if (name !== "" && !name.trim() == " ") {
      props.addTask(name);
      setName("");
    }
  }

  return (
    <form className="w3-container w3-center">
      <h2>
        <label htmlFor="new-todo-input"
               className="">
          What needs to be done?
        </label>
      </h2>
      <input type="text"
             id="new-todo-input"
             className="w3-input"
             name="text"
             autoComplete="off"
             value={name}
             onChange={handleChange}/>
      <button type="submit" onClick={handleSubmit}
              className="w3-btn w3-green">
        Add
      </button>
    </form>
  );
};

export default Form;