import React from 'react';

function TodoEdit(props){

    //const [todoValue, setTodoValue] = React.useState(props.text)

    const onSubmit = (event) => {
        event.preventDefault();
        // props.saveTodos(handleInputChange)        
        // props.setModalEdit(false)
        console.log(props.textValue)
    };

    const onCancel = () => {
        props.setModalEdit(false)
    }

    const handleInputChange = (event) => {
        
        const {value} = event.target;
        props.setTodos((prevTodo) => (
            {
            ...prevTodo,
            value
            }
        ));
        
        // setTodoValue(value)
        // props.saveTodos()
        
        // saveTodos(
        //     todos.map((todo) =>
        //     todo.key === key ? todos : todo
        //     )
        // );
        console.log('datos nuevos', )
    };


    const collapsibleForm = props.modalEdit ? '' : 'max-h-0 hidden'

    return (
    <form className={`flex flex-col absolute items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 content-between w-96 p-4 bg-[#392177]/90 rounded-lg border-8 border-indigo-100 text-lg font-medium ${collapsibleForm}`} onSubmit={onSubmit}>
            <label className='font-bold text-xl text-indigo-200 mb-4' htmlFor="">Edita un TODO</label>
            <textarea className='w-72 h-15 rounded-lg border resize-none outline-0 mb-8'
                placeholder='Escribe una nueva tarea..'
                value={props.textValue}
                onChange={handleInputChange}
                required
            />
        <div className='flex w-80 justify-around'>
            <button className='w-28 h-10 border border-indigo-400 rounded-lg  bg-indigo-100 text-sm font-semibold text-indigo-400 cursor-pointer hover:bg-gray-400 hover:text-[#392177]' type='button' onClick={onCancel}>
                Cancelar
            </button>
            <button className='w-28 h-10 border border-indigo-100 rounded-lg  bg-indigo-400 text-sm font-semibold text-indigo-100 cursor-pointer hover:bg-[#80d8daac]' type='button' onClick={onSubmit}>
                Agregar
            </button>
        </div>
    </form>
    )
}

export { TodoEdit }