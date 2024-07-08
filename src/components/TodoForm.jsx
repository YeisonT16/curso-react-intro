import React from 'react';

function TodoForm({ addTodo, setOpenModal,}){

    const [newTodoValue,setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    };

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)

    }

    return (
    <form className='flex flex-col items-center content-between w-80 h-52 p-4 bg-indigo-300/80 rounded-lg border-8 border-indigo-100 text-lg font-medium' onSubmit={onSubmit}>
            <label className='font-bold text-xl text-indigo-500 mb-4' htmlFor="">Escribe un nuevo TODO</label>
            <textarea className='w-60 h-15 rounded-lg border resize-none outline-0 mb-4'
                placeholder='Finalizar el portafolio de proyectos'
                value={newTodoValue}
                onChange={onChange}
                required
            />
        <div className='flex w-80 justify-around'>
            <button className='w-20 h-8 border border-indigo-400 rounded-lg  bg-indigo-100 text-lg font-semibold text-indigo-400 cursor-pointer' type='button' onClick={onCancel}>
                Cancelar
            </button>
            <button className='w-20 h-8 border border-indigo-100 rounded-lg  bg-indigo-600 text-lg font-semibold text-indigo-100 cursor-pointer' type='button' onClick={onSubmit}>
                Agregar
            </button>
        </div>
    </form>
    )
}

export { TodoForm }