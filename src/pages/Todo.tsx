import React, { useState } from "react";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [point , setPoint] = useState<number>(0);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setInputValue(e.target.value)
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //新しいTodoを作成
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false
    };
    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  const handleEdit = (id: number, inputValue: string) => {
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
        const updated = { ...todo, checked: !checked };
        if (!checked) {
          setPoint((prev) => prev + 1); // チェック時にポイント加算
        } else {
          setPoint((prev) => Math.max(prev - 1, 0)); // チェック解除で減算
        }
        return updated;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
       
  return (

    <div style={{ background: "White", width: 300, margin: "auto" }}><h2 id="todo-heading" style={{ color: 'black', textAlign: "center" }}>Todoリスト</h2>
　　　　 <div style={{display: 'flex',
                     gap: '10px',
                     justifyContent: 'center',
                     alignItems: 'center',
                     padding: '5px'}}>  

        <button style=
                {{
                    border : 'solid 2px red',
                    backgroundColor: '#00ffff',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '10px',
                    width: '140px',
                    height: '80px',
                    position: 'fixed',
                    bottom : '15px',
                    left : '150px',
                    cursor : 'default'
                }}
            >
                <span>現在のポイント</span>
                <span style={{
                 fontSize: '1.2em', 
                 fontWeight: 'bold' }}>
                {point}</span> 
            </button>
        </div>

      <form style={{ textAlign: "center" }} onSubmit={(e) => handleSubmit(e)}>
        <input type="text"
          onChange={(e) => handleChange(e)}
          className="inputtext"
          value={inputValue}
        />

        <input type="submit" style={{ background: "Black" }} value="追加" className="submitButton" />
      </form>
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
            <button onClick={() => handleDelete(todo.id)}>削除</button>

          </li>

        ))}
      </ul></div>
  )
}



export default Todo