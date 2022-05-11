import React, { useEffect, useState } from "react";
import Users from "./Users";

export default function ShowComments(props) {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${props.post}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setComment(data);
      });
  });

  return (
    <ul>
      {comment.map((e) => (
        <li>
          <Users post = {e}/>
          <p>{e.body}</p>
        </li>
      ))}
    </ul>
  );
}
