import React from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodoItem }  from '../components/TodoItem';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../components/TodoModal';
import { TodoForm } from '../components/TodoForm';
import { TodoHeader } from '../components/TodoHeader';
import { TodoError } from '../components/TodoError';
import { TodoLoading } from '../components/TodoLoading';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoEmptyResults } from '../components/TodoEmptyResults';


function App() {

  const {
    loading,
    error,
    searchedTodos,
    finalicedTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <div className="relative flex flex-col w-screen h-screen bg-indigo-700 justify-center items-center" >

    <TodoHeader>
      <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </TodoHeader>

    <TodoList
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}
      searchText={searchValue}
      onError={() => <TodoError />}
      onLoading={() => <TodoLoading />}
      onEmptyTodos={() => <EmptyTodos />}
      onEmptySearchResults={(searchText) => 
      <TodoEmptyResults 
        searchText={searchText}
      />}
      // render={todo => (
      //   <TodoItem
      //       key={todo.text}
      //       text={todo.text}
      //       completed={todo.completed}
      //       onFinaliced={() => finalicedTodo(todo.text)}
      //       onDelete={() => deleteTodo(todo.text)}
      //   />
      // )}
    >
      {todo => (
        <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onFinaliced={() => finalicedTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
        />
      )}
    </TodoList>

    
    
  TodoList
      {/*loading && <p>Estamos cargando...</p>}
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
      })
         */}
      TodoList

    <CreateTodoButton
    
      setOpenModal={setOpenModal}
    />

    {openModal && ( //&& funciona como un if (si openModal es true 'esta abierto')
      <Modal>
      la funcionalidad de agregar Todos
      <TodoForm
        addTodo={addTodo}
        setOpenModal={setOpenModal}
      />
      </Modal>
    )}
    </div>
  );
}

export { App };
