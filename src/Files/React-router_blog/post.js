
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

export default function Post(props) {
  const [post, setPost] = useState({});
  let { id } = useParams();
  useEffect(() => {
    fetch(`http://192.168.0.200:3000/posts/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPost(data);
      });
  }, []);

  return (
    <>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    <Link to={"/"} className='btn btn-primary'  role="button">Back</Link> 
      </div>
    </>
  );
}
