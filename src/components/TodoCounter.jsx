import React from "react";


function TodoCounter({ totalTodos, completedTodos }){
    

    return(
        <h1 className="text-2xl font-bold text-indigo-200 mb-7">
            Has completado {completedTodos} de {totalTodos}  Tareas
        </h1>
    );
}

export { TodoCounter };