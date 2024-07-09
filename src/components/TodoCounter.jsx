import React from "react";



function TodoCounter({ totalTodos, completedTodos, loading }){
    
    const stayleDisabled = 'opacity-50'
    return(
        <h1 className={`text-2xl font-bold text-indigo-200 mb-7 ${!!loading && stayleDisabled}`}
           
        >
            Has completado {completedTodos} de {totalTodos}  Tareas
        </h1>
    );
}

export { TodoCounter };