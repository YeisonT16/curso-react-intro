import React from 'react';

function TodoForm({ addTodo, openModal, setOpenModal,}){

    const [newTodoValue, setNewTodoValue] = React.useState('')
    const [formErrors, setFormErrors] = React.useState({
        text: false,
    })

    const validateForm = () => {
        const errors = {}
        errors.text = newTodoValue === ''
        setFormErrors(errors)
        
        return !errors.text
        
        //TODO: Pasar el estado de error y la función validateForm a useTodos
    }

    const onSubmit = (event) => {
        if(validateForm()){
            event.preventDefault();
            addTodo(newTodoValue)
            setOpenModal(false)
        }else {
            console.log('error en el formulario');
            
        }
    };

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
        setFormErrors({
        text: false,
    })

    }

    const collapsibleForm = openModal ? 'transition-[max-height-240px] delay-150 ease-in-out duration-300' : 'max-h-0 hidden'
    
    const alert = formErrors.text ?  'border-2 border-red-600': ''

    return (
        <>        
            <form className={`flex flex-col absolute items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 content-between w-96 p-4 bg-[#392177]/90 rounded-lg border-8 border-indigo-100 text-lg font-medium ${collapsibleForm}`} onSubmit={onSubmit}>
                    <div className='flex flex-col items-center content-center size-full min-h-16'>
                        <label className='font-bold text-xl text-indigo-200 pb-4' htmlFor="">Agrega un nuevo TODO</label>
                        <p className='text-red-500 font-medium text-base mb-2'>{formErrors.text ? '*¡Este campo no puede quedar vacío!' : ''}</p>
                    </div>
                    <textarea className={`w-72 h-fit rounded-lg border resize-none outline-0 mb-7 pl-1 ${alert}`}
                        placeholder='Escribe una nueva tarea..'
                        value={newTodoValue}
                        onChange={onChange}
                        required
                    />
                
                <div className='flex min-w-[350px]  w-fit justify-around'>
                    <button className='w-28 h-10 border border-indigo-100 rounded-lg  bg-gray-400 text-sm font-semibold text-indigo-100 cursor-pointer hover:bg-indigo-100 hover:text-[#392177]' type='button' onClick={onCancel}>
                        Cancelar
                    </button>
                    <button className='w-28 h-10 border border-indigo-100 rounded-lg  bg-indigo-400 text-sm font-semibold text-indigo-100 cursor-pointer hover:bg-[#80d8daac]' type='button' onClick={onSubmit}>
                        Agregar
                    </button>
                </div>
            </form>
        </>
    )
}

export { TodoForm }