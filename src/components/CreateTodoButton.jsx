import React from "react";

function CreateTodoButton({ setOpenModal }){
    return(
    <button className="" 
            onClick={ () => setOpenModal(state => !state)   
    }
    
    
    >X</button>
    );
}

export { CreateTodoButton };