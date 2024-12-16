import React from 'react';
import { initialValue } from '../constans';

function TodoEdit({ selectTodo, setModalEdit, todos, setTodos, modalEdit, saveTodos}){

    const [todoValue, setTodoValue] = React.useState(initialValue)

    React.useEffect( () => {        
            const dataTodo = selectTodo;
            setTodoValue(dataTodo)   
    }, [selectTodo])


    const onCancel = () => {
        setModalEdit(false)
    }

    const handleInputChange = (event) => {
        
        const {value} = event.target;
            setTodoValue((prevTodo) => (
            {
            ...prevTodo,
            text: value,
            }
        ));

        
    };

    const editTodo = () => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => 
                todo.id === todoValue.id ? todoValue : todo
            )
        )

        saveTodos(
            todos.map((todo) => 
            todo.id === todoValue.id ? todoValue : todo
            )
        )
        setTodoValue(initialValue)
        setModalEdit(false)        
    }

    
    
    const collapsibleForm = modalEdit ? '' : 'max-h-0 hidden'

    return (
    <form className={`flex flex-col absolute items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 content-between w-96 p-4 bg-[#392177]/90 rounded-lg border-8 border-indigo-100 text-lg font-medium ${collapsibleForm}`}>
            <label className='font-bold text-xl text-indigo-200 mb-4' htmlFor="">Editar TODO</label>
            <textarea className='w-72 h-fit pl-1 rounded-lg border resize-none outline-0 mb-8'
                placeholder='Escribe una nueva tarea..'
                name='text'
                value={todoValue.text}
                onChange={handleInputChange}
            />
        <div className='flex w-80 justify-around'>
            <button className='w-28 h-10 border border-indigo-400 rounded-lg  bg-slate-300 text-base font-semibold text-[#392188] cursor-pointer hover:bg-slate-50 hover:text-indigo-500' type='button' onClick={onCancel}>
                Cancelar
            </button>
            <button className='w-28 h-10 border border-indigo-100 rounded-lg  bg-indigo-400 text-base font-semibold text-indigo-100 cursor-pointer hover:bg-[#80d8daac] hover:text-white' type='button' onClick={editTodo}>
                Editar
            </button>
        </div>
    </form>
    )
}

export { TodoEdit }