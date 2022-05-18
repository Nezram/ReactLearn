import React from "react";
import { Button } from "react-bootstrap";

export default function ShowTodo(props) {
  return (
    <>
      {props.todos.map((e, i) => (
        <tr>
          <td>{i + 1}</td>
          <td className={!e.status ? "strike" : ""}>{e.textQuest}</td>
          <td>{e.status ? "inprogress" : "completed"}</td>
          <td>
            <Button variant="success" onClick={() => props.onUpdate(i)}>
              Success
            </Button>{" "}
            <Button variant="danger" onClick={() => props.onDelete(i)}>
              Delete
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
}
