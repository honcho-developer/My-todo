import React from 'react';
const TodoItems = (props) => {
  return(
    <div>
    { props.individualItem }
    <button onClick={()=>props.handleRemoveOneItem(props.individualItem)}>Remove</button>
  </div>
  )
  
  }
  export default TodoItems