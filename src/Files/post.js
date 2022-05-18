import React from "react";
import Image from "./Image";
import ShowComments from "./Comment";

function Post(props) {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
      <Image post={props.post.id} />
      <ShowComments post={props.post.id} />
    </div>
  );
}

export default Post;
