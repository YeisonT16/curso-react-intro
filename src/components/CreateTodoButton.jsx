import React from "react";
import { PlusIcon } from "./PlusIcon";

function CreateTodoButton({ setOpenModal, loading }){

    const buttonDisabled = loading ? 'hidden' : 'grid absolute'
    
    return(
    
        <div className={`justify-items-stretch -top-6 bg-indigo-200 border rounded-full size-16 ${buttonDisabled}`}>
            <button className={`bg-indigo-200 size-16 rounded-full border-indigo-500 text-indigo-500 font-normal`}
            onClick={ () => setOpenModal(state => !state)}

            >
            <PlusIcon
                whith={'64px'}
                height={'64px'}
                strokeWidth={'1'}
            />
            </button>
        </div>
    );
}

export { CreateTodoButton };