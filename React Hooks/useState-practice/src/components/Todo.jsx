/**
 * @todo
 * Lengkapi komponen "Todo" sesuai dengan kriteri berikut:
 *  1. Dapat menambahkan to-do.
 *  2. Dapat menampilkan daftar to-do.
 *  3. Dapat menghapus daftar to-do.
 */

import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodoHandler = () => {
    setTodos((prevState) => {
      return [...prevState, { id: +new Date(), name: inputValue }];
    });

    // menghapus nilai di dalam input setelah To-do dimasukkan
    setInputValue("");
  };

  const removeTodoHandler = (id) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={inputChangeHandler} />
      <button onClick={addTodoHandler}>Add Todo</button>
      {todos.map((todo) => {
        return (
          <ul key={todo.id}>
            <li>
              {todo.name}
              <button onClick={() => removeTodoHandler(todo.id)}>X</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Todo;
