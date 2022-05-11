import React, {useState, useEffect} from "react";


export default function Users (props){
    const [user, setUser] = useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${props.post.id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUser(data);
        });
    })

    return (
        <h3>{user.name}</h3>
    )
}