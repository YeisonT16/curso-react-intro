import React from "react";

function CreateTodoButton(){
    return(
       <button onClick={(event) => {
            console.log(event, 'click')
       }}>X</button>
    );
}

export { CreateTodoButton };