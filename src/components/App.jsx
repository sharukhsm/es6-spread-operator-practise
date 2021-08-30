import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState(""); //Step 1.0
  const [items, setItems] = useState([]);

  //Step 1.2
  function handleChange(event) {
    const value = event.target.value;
    setInputText(value);
  }

  //Step 2.2
  function addItem() {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        {/* //Step 1.1 */}
        <input onChange={handleChange} value={inputText} type="text" />
        {/* //Step 2.1 */}
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* //Step 2.0 */}
          {items.map((toDoItem) => {
            return <li>{toDoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
