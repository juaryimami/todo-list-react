import React from "react"
import ReactDOM from "react-dom"
// componet file is imported below.
import TodoContainer fron './components/TodoContainer'


ReactDOM.render(<React.StrictMode>
    <TodoContainer />
  </React.StrictMode> ,
   document.getElementById("root"))
