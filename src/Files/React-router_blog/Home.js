import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch("http://192.168.0.200:3000/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      });
  }, [count]);

  return (
    <>
      <ListGroup>
        {posts.map((e) => {
          return (
            <ListGroupItem>
              <img src={e.poster} alt="" />
              <h4>{e.title}</h4>
              <Link to={`/posts/${e.id}`}>Read more</Link>{" "}
            </ListGroupItem>
          );
        })}
      </ListGroup>
      <Button variant="outline-success" onClick={()=>setCount(count+1)}>New news</Button>
    </>
  );
}
