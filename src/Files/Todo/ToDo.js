import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./style.css";
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";

export default function ToDo(props) {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function changeText(e) {
    setText(e.target.value);
  }

  function handleAdd() {
    const quest = {
      textQuest: text,
      status: true,
    };
    console.log(quest);
    quest.textQuest.length <= 0
      ? setTodos([...todos])
      : setTodos([...todos, quest]);
  }

  function deleteTodo(ind) {
    setTodos(todos.filter((el, index) => (ind === index ? "" : el)));
  }

  function updateStatus(ind) {
    setTodos(
      todos.map((el, index) =>
        ind === index
          ? {
              ...el,
              status: el.status ? false : true,
            }
          : el
      )
    );
  }

  return (
    <div className="conta">
      <AddTodo onAdd={handleAdd} onSetText={changeText} />

      <Table striped bordered hover className="table_todo">
        <thead>
          <tr>
            <th>No</th>
            <th>Qeast</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <ShowTodo
            onUpdate={updateStatus}
            onDelete={deleteTodo}
            todos={todos}
          />
        </tbody>
      </Table>
    </div>
  );
}
