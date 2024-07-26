import React from "react";
import { PlusIcon } from "./PlusIcon";

function CreateTodoButton({ setOpenModal }){
    return(
    
        <div className="flex items-center absolute top-72 bg-indigo-200 border rounded-full size-16 ">
            <button className={`bg-indigo-200 size-fit rounded-full border-indigo-500 text-indigo-500 font-normal text-7xl`}
            onClick={ () => setOpenModal(state => !state)}
            >
            <PlusIcon/>
            </button>
        </div>
    );
}

export { CreateTodoButton };