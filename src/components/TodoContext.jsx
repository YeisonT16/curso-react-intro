import React from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";


const TodoContext = React.createContext()

function TodoProvider(children) {
     //Estado para mostrar el estado de los TODOS completados y el total de TODOS en el componente TodoCounter
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,    
  } = useLocalStorage('TODOS_V1', [])
  const completedTodos = todos.filter((item) => !!item.completed  //!! la doble negacion se usa para convertir en boolean el parametro a evaluar y asi obtener una respuesta mas clara, ya sea true o false 
  ).length;
  const totalTodos = todos.length;

  //Estado para establecer y actualizar la busqueda de todos cada vez que se escibe un caracter en la barra de busqueda
  const [searchValue, setSearchValue] = React.useState('')

   //Estado para abrir el modal al dar click en el boton +
  const [openModal, setOpenModal] = React.useState(false)


  //Estado derivado para filtrar los todos de nuestra lista que coincidan con el o los carecteres que escribamos en la barra del searchTodo
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();   // Convertimos el texto en el todo a minusculas
    const searchText = searchValue.toLowerCase(); // Convertimos el texto de labusqueda a minusculas
    return todoText.includes(searchText);// Devolvemos la lista de todos que coincidieron con los caracteres de busqueda
  })

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos)
  }
  //Estado derivado para cambiar la propiedad completed de false a true dentro de la lista(array) de todos 
  const finalicedTodo = (text) => {
    const newTodos = [...todos]; //Nos traemos una copia de la lista de todos
    const todoIndex = newTodos.findIndex((todo) => //Buscamos el index del todo que coinsida con el texto del todo
    todo.text === text);
    newTodos[todoIndex].completed = true; //Accedemos a la propiedad completed del todo que coincidio con la busqueda y canbiamos su propiedad de false a true
    saveTodos(newTodos); //Actualizamos el estado de (setTodos) con la nueva lista de todos (newTodos)
  }
 //Estado derivado para eliminar un TODO de nuestra lista de TODOS
  const deleteTodo = (text) => {
    const newTodos = [...todos];// Nos traemos una copia del array de todos
    const todoIndex = newTodos.findIndex((todo) => //Buscamos el indice que coincida con el texto en la lista de todos
    todo.text === text);
    newTodos.splice(todoIndex, 1) //Con el metodo splice sacamos el ToDo en la lista de todos que esta en la variable constante (todoIndex) y el numero indica cuatos items vamos a sacar, en este caso solo uno por que ademas es el unico que deberia encontrar.
    saveTodos(newTodos);//Actualizamos el estado de (setTodos) con la nueva lista de todos (newTodos)
  }

 
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            finalicedTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>

    )
}

export { TodoContext, TodoProvider };