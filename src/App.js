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
  const completedTodos = todos.filter((item) => !!item.completed  //!! la doble negacion se usa para convertir en boolean el parametro a evaluar y asi obtener una respuesta mas clara, ya sea true o false 
  ).length;
  const totalTodos = todos.length;

  //Estado para establecer y actualizar la busqueda de todos cada vez que se escibe un caracter en la barra de busqueda
  const [searchValue, setSearchValue] = React.useState('')

  //Estado derivado para filtrar los todos de nuestra lista que coincidan con el o los carecteres que escribamos en la barra del searchTodo
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();   // Convertimos el texto en el todo a minusculas
    const searchText = searchValue.toLowerCase(); // Convertimos el texto de labusqueda a minusculas
    return todoText.includes(searchText);// Devolvemos la lista de todos que coincidieron con los caracteres de busqueda
  })
  //Estado derivado para cambiar la propiedad completed de false a true dentro de la lista(array) de todos 
  const finalicedTodo = (text) => {
    const newTodos = [...todos]; //Nos traemos una copia de la lista de todos
    const todoIndex = newTodos.findIndex((todo) => //Buscamos el index del todo que coinsida con el texto del todo
    todo.text === text);
    newTodos[todoIndex].completed = true; //Accedemos a la propiedad completed del todo que coincidio con la busqueda y canbiamos su propiedad de false a true
    setTodos(newTodos); //Actualizamos el estado de (setTodos) con la nueva lista de todos (newTodos)
  }
 //Estado derivado para eliminar un TODO de nuestra lista de TODOS
  const deleteTodo = (text) => {
    const newTodos = [...todos];// Nos traemos una copia del array de todos
    const todoIndex = newTodos.findIndex((todo) => //Buscamos el indice que coincida con el texto en la lista de todos
    todo.text === text);
    newTodos.splice(todoIndex, 1) //Con el metodo splice sacamos el ToDo en la lista de todos que esta en la variable constante (todoIndex) y el numero indica cuatos items vamos a sacar, en este caso solo uno por que ademas es el unico que deberia encontrar.
    setTodos(newTodos);//Actualizamos el estado de (setTodos) con la nueva lista de todos (newTodos)
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
