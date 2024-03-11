import React from 'react';
import { TodoItem }  from '../components/TodoItem';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from '../components/TodoContext';
import { Modal } from '../components/TodoModal';


function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    finalicedTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)

    return (
        <div className="App" >
    
        <TodoCounter/>
        <TodoSearch/>

        <TodoList>
          {loading && <p>Estamos cargando...</p>}
          {error && <p>Ups. Algo salio mal...</p>}
          {(!loading && searchedTodos.length === 0) && <p>¡Crea tu primer TODO!</p>}

          {searchedTodos.map(todo => {
            return <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onFinaliced={() => finalicedTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
          })}
          </TodoList>

        <CreateTodoButton />

        {openModal && ( //&& funciona como un if (si openModal es true 'esta abierto')
          <Modal>
          la funcionalidad de agregar Todos
          </Modal>
        )}
        </div>
      );
}

export { AppUI };