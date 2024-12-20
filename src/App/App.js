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
import { TodoContainer } from '../components/TodoContainer';
import { ModalDialog } from '../components/ModalDialog';
import { TodoEdit } from '../components/TodoEdit';


function App() {

  const arrLoading = [0, 1, 2, 3, 4];
  const renderLoading = () => (
      arrLoading.map((_,index) => 
      <TodoLoading 
        key={index}
      />
      )
    )

  const {
    todos,
    setTodos,
    loading,
    error,
    searchedTodos,
    finalicedTodo,
    saveTodos,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    modalDialog,
    setModalDialog,
    modalEdit,
    setModalEdit,
    findTodo,
    showTodo,
    filteredTodos
  } = useTodos();

  return (
    <>
      <div className="z-0 relative flex flex-col w-full bg-gradient-to-r from-[#80d8daac] to-[#392177] h-auto justify-center items-center p-10 min-h-screen" >

      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          loading={loading}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
        />
      </TodoHeader>
      <TodoContainer>
      <TodoList
        error={error}
        todos={todos}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        filteredTodos={filteredTodos}
        onError={() => <TodoError />}
        onLoading={renderLoading}
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
              key={todo.id}
              id={todo.id}
              text={todo.text}
              todos={todos}
              setTodos={setTodos}
              saveTodos={saveTodos}
              completed={todo.completed}
              openModal={openModal}
              setOpenModal={setOpenModal}
              onFinaliced={() => finalicedTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              findTodo={findTodo}
              setModalDialog={setModalDialog}
              modalEdit={modalEdit}
              setModalEdit={setModalEdit}
              showText={showTodo}
          />
        )}

        </TodoList>

        <CreateTodoButton    
        setOpenModal={setOpenModal}
        loading={loading}
        openModal={openModal}
        />

      </TodoContainer>

      
      
    
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
      
      

      {openModal && ( //&& funciona como un if (si openModal es true 'esta abierto')
        <Modal>
        <TodoForm
          addTodo={addTodo}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        </Modal>
      )}
      
      {modalDialog && (
        <Modal>
          
          <ModalDialog
              todos={todos}
              modalDialog={modalDialog}
              setModalDialog={setModalDialog}
              onDelete={deleteTodo}
              showTodo={showTodo}
          />
        </Modal>
      )}

      {modalEdit && (
        <Modal>
          <TodoEdit
            selectTodo={showTodo}  
            text={showTodo.text}        
            modalEdit={modalEdit}
            todos={todos}
            setTodos={setTodos}
            setModalEdit={setModalEdit}
            saveTodos={saveTodos}
          />
        </Modal>
      )}
      </div>
    </>
  );
}

export { App };
