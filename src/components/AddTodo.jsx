import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [duedate, setDueDate] = useState();

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, duedate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              value={todoName}
              name="Todo"
              placeholder="Enter Todo Here"
              id=""
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              value={duedate}
              name=""
              id=""
              onChange={handleDateChange}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success kg-btn"
              onClick={handleAddButtonClicked}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
