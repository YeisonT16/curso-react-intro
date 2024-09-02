
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";


function TodoItem(props){

    const styleClickCheckIcon = props.completed ? 'bg-green-600 text-indigo-100' : 'cursor-pointer text-sky-600/85 bg-gray-700'
    const styleClickDeleteIcon = props.completed ? 'text-red-900 bg-stone-800' : 'text-red-600/85 bg-stone-700'
    const styleCompleted = props.completed ? 'opacity-50 bg-gray-900 text-white' : 'text-indigo-200 bg-indigo-800 hover:bg-indigo-500 hover:text-indigo-100 hover:scale-105 duration-300'

    return (
        <div className={`relative w-72 h-auto min-h-6 p-2 text-mdrounded-xl font-semibold border-4 mb-2 rounded-xl border-zinc-600 ${styleCompleted}`}>
            <span className={`absolute -left-2 -top-2 rounded-full hover:bg-green-600 hover:text-indigo-100 ${styleClickCheckIcon}`} onClick={props.onFinaliced}><CompleteIcon /></span>
            <p>{props.text}</p>
            <span className={`absolute -right-2 -top-2 rounded-full cursor-pointer hover:text-indigo-100 hover:bg-red-900 ${styleClickDeleteIcon}`} 
                onClick={()=> {
                        props.setModalDialog(true)      
                }
                }>
                    <DeleteIcon />
            </span>
        </div>
    )
}


export { TodoItem };