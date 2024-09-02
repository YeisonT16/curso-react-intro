import React from 'react';

function TodoForm({ addTodo, openModal, setOpenModal,}){

    const [newTodoValue, setNewTodoValue] = React.useState('')

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

    const collapsibleForm = openModal ? 'transition-[max-height-240px] delay-150 ease-in-out duration-300' : 'max-h-0 hidden'

    return (
    <form className={`flex flex-col absolute items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 content-between w-96 p-4 bg-indigo-300/90 rounded-lg border-8 border-indigo-100 text-lg font-medium ${collapsibleForm}`} onSubmit={onSubmit}>
            <label className='font-bold text-xl text-indigo-500 mb-4' htmlFor="">Escribe un nuevo TODO</label>
            <textarea className='w-72 h-15 rounded-lg border resize-none outline-0 mb-8'
                placeholder='Escribe una nueva tarea..'
                value={newTodoValue}
                onChange={onChange}
                required
            />
        <div className='flex w-80 justify-around'>
            <button className='w-28 h-10 border border-indigo-400 rounded-lg  bg-indigo-100 text-sm font-semibold text-indigo-400 cursor-pointer' type='button' onClick={onCancel}>
                Cancelar
            </button>
            <button className='w-28 h-10 border border-indigo-100 rounded-lg  bg-indigo-600 text-sm font-semibold text-indigo-100 cursor-pointer' type='button' onClick={onSubmit}>
                Agregar
            </button>
        </div>
    </form>
    )
}

export { TodoForm }