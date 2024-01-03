import { TodoItem }  from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  {
    text: 'Cortar cebolla',
    completed: true
  },
  {
    text: 'Tomar el curso de Intro a Reat.js',
    completed: false
  },
  {
    text: 'Llorar con la Llorona',
    completed: false
  },
  {
    text: 'Conseguir trabajo como programador',
    completed: false
  },
  {
    text:'LALALALALA',
    completed: true
  }
];




function App() {
  //estado para mostrar los TODOS completados y el total de TODOS en el todoCounter
  const [todos, setTodos] = React.useState(defaultTodos)
  const completedTodos = todos.filter((item) => !!item.completed
  ).length;
  const totalTodos = todos.length;
  //Estado para mostrar en consola cada letra concatenada escrita en el placehoder
  const [searchValue, setSearchValue] = React.useState('')
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  })
  console.log('Los usuarios buscan todos de ' + searchValue)

  return (
    <div className="App" >

    <TodoCounter 
      completed={completedTodos}
      total={totalTodos}
    />
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />

    <TodoList>
      {searchedTodos.map(todo => {
       return <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        />
      })}
    </TodoList>

    <CreateTodoButton />
    </div>
  );
}

export default App;
