import React from "react";
import { Button } from "react-bootstrap";

export default function AddTodo(props) {
  return (
    <div>
      <input onChange={(e) => props.onSetText(e)} type="text" placeholder="Enter you quest" />
      <Button variant="primary" onClick={() => props.onAdd()}>
        Add
      </Button>{" "}
    </div>
  );
}
