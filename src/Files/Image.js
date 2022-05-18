import React, { useState, useEffect } from "react";

export default function Image(props) {
  const [photo, setPhoto] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${props.post}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPhoto(data.url);
      });
  });

  return <img src={photo}></img>;
}
