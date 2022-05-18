import React from "react";
import { Button } from "react-bootstrap";

export default function AddTodo(props) {
  return (
    <div>
      <input onChange={(e) => props.onSetText(e)} type="text" />
      <Button variant="primary" onClick={() => props.onAdd()}>
        Primary
      </Button>{" "}
    </div>
  );
}
