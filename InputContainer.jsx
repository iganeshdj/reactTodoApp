import React from "react";
const InputContainer = ({ inputVal, writeTodo, addTodo }) => {
  return (
    <div className="input_container">
      <input
        type="text"
        placeholder="Enter a Task"
        value={inputVal}
        onChange={writeTodo}
      />
      <button onClick={addTodo}>+</button>
    </div>
  );
};

export default InputContainer;
