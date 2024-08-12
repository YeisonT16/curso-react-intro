import React from "react";
import { PlusIcon } from "./PlusIcon";

function CreateTodoButton({ setOpenModal, loading, openModal }){

    const buttonDisabled = loading ? 'hidden' : 'grid absolute'
    const modalOpen = openModal ? 'transition ease-in-out delay-150 rotate-45' : ''
    
    return(
    
        <div className={`justify-items-stretch -top-6 bg-indigo-200 border rounded-full size-fit ${buttonDisabled}`}>
            <button className={`bg-indigo-200 size-16 rounded-full border-indigo-500 text-indigo-500 font-normal  hover:bg-indigo-500 hover:opacity-50 hover:text-indigo-200 hover:scale-110 ${modalOpen}`}
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