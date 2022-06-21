import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("http://192.168.0.200:8080/rating")
    .then( response => response.json())
    .then( data => {
      for( let key in data ) {
        
      }
    })
})

  return <div></div>;
}

export default App;
//  192.168.0.200:8080/rating
