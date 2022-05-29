import React, {useState} from 'react';

function AddTodo({addTodo}) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  }
  return (
    <div className="addTodo">
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          value={text}
          placeholder={"Name"}
          onChange={handleChange}
        />
        <input type="submit" value="Add"/>
      </form>
    </div>
  );
}

export default AddTodo;
