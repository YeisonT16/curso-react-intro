import React from 'react';
import { TodoContext } from './TodoContext';

function TodoForm(){

    const {
        addTodo,
        setOpenModal,       
    } = React.useContext(TodoContext);

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
    <form onSubmit={onSubmit}>
            <label htmlFor="">Escribe un nuevo TODO</label>
            <textarea
                placeholder='Finalizar el portafolio de proyectos'
                value={newTodoValue}
                onChange={onChange}
                required
            />
        <div>
            <button type='button' onClick={onCancel}>
                Cancelar
            </button>
            <button type='button'>
                Agregar
            </button>
        </div>
    </form>
    )
}

export { TodoForm }