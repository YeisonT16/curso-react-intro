
import React from "react";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import { ModalDialog } from "./ModalDialog"
import { TodoEdit } from "./TodoEdit";


function TodoItem(props){
    

    const styleClickCheckIcon = props.completed ? 'bg-green-600 text-indigo-100' : 'cursor-pointer text-sky-600/85 bg-gray-700'
    const styleClickDeleteIcon = props.completed ? 'text-red-900 bg-stone-800' : 'text-red-600/85 bg-stone-700'
    const styleCompleted = props.completed ? 'opacity-50 bg-gray-900 text-white' : 'text-indigo-200 bg-[#392177] hover:bg-[#80d8daac] hover:text-[#392177] hover:scale-105 duration-300'

            

    //Función para pasarle las props al componente ModalDialog sin renderizarlo
    const showModal = () => {
        <ModalDialog             

        />
        props.setModalDialog(true)
    }
        
    // console.log(props.showText);
    const showModalEdit = () => {
        <TodoEdit        
        />
        
        props.setModalEdit(true)
    }

    return (
        <div className={`relative w-72 h-auto min-h-6 p-2 text-mdrounded-xl cursor-pointer font-semibold border-4 mb-2 rounded-xl border-zinc-600 ${styleCompleted}`} >
            <span className={`absolute -left-2 -top-2 rounded-full hover:bg-green-600 hover:text-indigo-100 ${styleClickCheckIcon}`} onClick={props.onFinaliced}><CompleteIcon /></span>
            <p onClick={() => {showModalEdit(); props.findText(props.text)}}>{props.text}</p>
            <span className={`absolute -right-2 -top-2 rounded-full cursor-pointer hover:text-indigo-100 hover:bg-red-900 ${styleClickDeleteIcon}`} 
                onClick={()=>{showModal(); props.findText(props.text)}}>  
                    <DeleteIcon/>
            </span>
        </div>
    )
}


export { TodoItem };