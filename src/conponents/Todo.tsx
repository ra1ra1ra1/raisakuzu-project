import { getStickyHeaderDates } from "@fullcalendar/core/internal";
import React, { useState } from "react";
//変数を保存する部分
function Todo() {
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const [inputDate, setInputDate] = useState("");

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
    date: string;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  };
  const dateChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDate(e.target.value)
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //新しいTodoを作成
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
      date: inputDate
    };


    setTodos([newTodo, ...todos]);
    setInputValue("");
  };
  const dateEdit = (id: number, inputDate: string,) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.date = inputDate;
      }
      
      return todo;
    });
    setTodos(newTodos)
  };
  const handleEdit = (id: number, inputValue: string,) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      
      return todo;
    });
    setTodos(newTodos)
  };
  const handleChecked = (id: number, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });
    setTodos(newTodos)
  };
  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }
  function handle(id: number): void {
    throw new Error("Function not implemented.");
  }

  return (

    <div style={{ background: "White", width: 300, margin: "auto" }}><h2 id="todo-heading" style={{ color: 'black', textAlign: "center" }}>Todoリスト</h2>


      <form style={{ textAlign: "center" }} onSubmit={(e) => handleSubmit(e)}>
        <input type="text"
          onChange={(e) => handleChange(e)}
          className="inputtext"
          value={inputValue}
        />
        <input type="submit" style={{}} value="追加" className="submitButton" />
      </form>
      <input type="date" onChange={(e) => dateChange(e)}
        className="inputDate"
        value={inputDate}>
      </input>
      <ul className="todoList">
        {todos.map((todo) => (
          <li key={todo.id}>

            <input type="text"

              onChange={(e) => handleEdit(todo.id, e.target.value)}
              className="inputtext"
              value={todo.inputValue}
              disabled={todo.checked}
            />
          




            <input type="checkbox"
              onChange={() => handleChecked(todo.id, todo.checked)}



            />
            <input type="date"
              onChange={(e) => dateEdit(todo.id, e.target.value)}
              className="inputdate"
              value={todo.date}
              disabled={todo.checked}
            />


            <button onClick={() => handleDelete(todo.id)}>削除</button>


          </li>



        ))}

      </ul>
 </div>
  )
}



export default Todo

function Getfullyear() {
  throw new Error("Function not implemented.");
}
