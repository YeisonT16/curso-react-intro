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
  //Estado para mostrar el estado de los TODOS completados y el total de TODOS en el componente TodoCounter
  const [todos, setTodos] = React.useState(defaultTodos)
  const completedTodos = todos.filter((item) => !!item.completed
  ).length;
  const totalTodos = todos.length;

  //Estado para mostrar los todos que constengan la letra o el texto escrito en el placehoder
  const [searchValue, setSearchValue] = React.useState('')
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  })
  //Estado para cambiar la propiedad completed de false a true dentro de la lista(array) de todos 
  const finalicedTodo = () => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => 
    todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = () => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => 
    todo.text === text);
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos);
  }


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
        onFinaliced={() => finalicedTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
        />
      })}
    </TodoList>

    <CreateTodoButton />
    </div>
  );
}

export default App;
