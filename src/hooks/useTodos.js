import React from "react";
import { useLocalStorage } from "./useLocalStorage";



function useTodos() {
     //Estado para mostrar el estado de los TODOS completados y el total de TODOS en el componente TodoCounter
  const {
    item: todos,
    setItem: setTodos,
    saveItem: saveTodos,
    loading,
    error,    
  } = useLocalStorage('TODOS_V1', [])
  

  const completedTodos = Array.isArray(todos) ? todos.filter(todo => todo.completed).length : [];
  // const completedTodos = todos.filter((item) => !!item.completed//!! la doble negacion se usa para convertir en boolean el parametro a evaluar y asi obtener una respuesta mas clara, ya sea true o false 
  // ).length;


  const totalTodos = todos.length; //TODO: resolver problema con esta variable

  //Estado para establecer y actualizar la busqueda de todos cada vez que se escibe un caracter en la barra de busqueda
  const [searchValue, setSearchValue] = React.useState('')

   //Estado para abrir el modal al dar click en el boton +
  const [openModal, setOpenModal] = React.useState(false)

  const [modalDialog, setModalDialog] = React.useState(false)

  const [modalEdit, setModalEdit] = React.useState(false)

  const [showTodo, setShowTodo] = React.useState('')

  const [filteredTodos, setFilteredTodos] = React.useState([])

  // console.log('filtered-todos:',filteredTodos);
  
  React.useEffect(() => {
    if(searchValue){
      setFilteredTodos(filtered(todos, searchValue))
    } else {
      setFilteredTodos(todos)
    }
  }, [todos, searchValue])

  
  
  //Estado derivado para filtrar los todos de nuestra lista que coincidan con el o los carecteres que escribamos en la barra del searchTodo
  const filtered = (items, searchedItems) => {
    return items.filter((item) => item.text.toLowerCase().includes(searchedItems.toLowerCase())  
  )
  }

//   const searchedTodos = todos.filter((todo) => {
//     const todoText = todo.text.toLowerCase();   // Convertimos el texto en el todo a minusculas
//     const searchText = searchValue.toLowerCase(); // Convertimos el texto de labusqueda a minusculas
//     return todoText.includes(searchText);// Devolvemos la lista de todos que coincidieron con los caracteres de busqueda
//   }
// )

  const generateRandomId = () => {
    const randomPart = Math.random().toString(36).substring(2, 9);
    const timePart = Date.now().toString(36);
    return `${randomPart}-${timePart}`
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
      id:generateRandomId()
    });
    saveTodos(newTodos)
    console.log(newTodos);
        
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
    console.log(todoIndex);        
    newTodos.splice(todoIndex, 1) //Con el metodo splice sacamos el ToDo en la lista de todos que esta en la variable constante (todoIndex) y el numero indica cuatos items vamos a sacar, en este caso solo uno por que ademas es el unico que deberia encontrar.
    saveTodos(newTodos);//Actualizamos el estado de (setTodos) con la nueva lista de todos (newTodos)
  }
  
  const findTodo =(id) =>{
    const foundTodo = todos.find(item => item.id === id)
    setShowTodo(foundTodo)
  }

    return {
          todos,
          setTodos,
          //idTodo,
          loading,
          error,
          completedTodos,
          totalTodos,
          saveTodos,
          searchValue,
          setSearchValue,
          //searchedTodos,
          addTodo,
          finalicedTodo,
          deleteTodo,
          openModal,
          setOpenModal,
          modalDialog,
          setModalDialog,
          modalEdit,
          setModalEdit,
          findTodo,
          showTodo,
          filteredTodos
        }
    
}

export { useTodos };