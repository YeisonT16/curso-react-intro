import React from "react";

function CreateTodoButton({ setOpenModal }){
    return(
    <button onClick={ () => setOpenModal(state => !state)   
    }
    
    
    >X</button>
    );
}

export { CreateTodoButton };