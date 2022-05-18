import React from "react";
import { Button } from "react-bootstrap";

export default function ShowTodo(props) {
  return (
    <>
      {todos.map((e, i) => (
        <tr>
          <td>{i + 1}</td>
          <td className={!e.status ? "strike" : ""}>{e.textQuest}</td>
          <td>{e.status ? "inprogress" : "completed"}</td>
          <td>
            <Button variant="success" onClick={() => props.onUpdate(i, false)}>
              Success
            </Button>{" "}
            <Button variant="danger">Danger</Button>
          </td>
        </tr>
      ))}
    </>
  );
}
