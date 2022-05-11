import React, { Fragment, useState, useEffect } from "react";
import Post from "./post";

export default function Blog() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPost(data);
      });
  });

  return (
    <Fragment>
      {posts.map((e) => (
        <Post post={e} />
      ))}
    </Fragment>
  );
}
