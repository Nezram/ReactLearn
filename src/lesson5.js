import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import "./style.css";
import AddTodo from "./lesson5_1";
import ShowTodo from "./lesson5_2";

export default function ToDo(props) {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

function changeText (e){
    setText(e.target.value)
}

  function handleAdd() {
    const quest = {
      textQuest: text,
      status: true,
    };
    console.log(quest);
    setTodos([...todos, quest]);
  }

  function updateStatus (ind, stat){
    setTodos(
        todos.map((el, index) =>
          ind === index
            ? {
                ...el,
                status: stat,
              }
            : el
        )
      );
  }

  return (
    <div>
      <AddTodo onAdd={handleAdd} onSetText = {changeText}/>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Qeast</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         <ShowTodo onUpdate={updateStatus}/>
        </tbody>
      </Table>
    </div>
  );
}
