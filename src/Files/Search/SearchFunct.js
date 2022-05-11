import React, {useState} from "react";
import ShowTable from "./Search_show";
function Search (props){
  const [text, setText] = useState(``)
    return (
      <div>
       <input type="text" onChange={(e)=> setText(e.target.value)} />
        <ShowTable text={text}/>
      </div>
    )
}

export default Search

