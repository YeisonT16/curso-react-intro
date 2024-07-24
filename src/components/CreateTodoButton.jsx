import React from "react";
import { PlusIcon } from "./PlusIcon";

function CreateTodoButton({ setOpenModal }){
    return(
    <button className={`border rounded-full size-20 bg-indigo-200 border-indigo-500 text-indigo-500 font-bold`}
            onClick={ () => setOpenModal(state => !state)   
    }
    >
    <PlusIcon
        className={`size-16`}
    />
    </button>
    );
}

export { CreateTodoButton };