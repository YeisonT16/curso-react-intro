import React from "react";
import { TodoContext } from "./TodoContext";

function TodoCounter(){
    const {completedTodos, totalTodos} = React.useContext(TodoContext)

    return(
        <h1>
            Has completado {completedTodos} de {totalTodos}  Tareas
        </h1>
    );
}

export { TodoCounter };