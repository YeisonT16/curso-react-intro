import React from 'react'

// CUSTOM HOOK PARA LOCALSTORAGE Y PESISTENCIA DE DATOS
// Según la documentación de React, si observas un useEffect muy usado o con mucha lógica, lo más seguro es que puedas abstraerlo en un custom Hook


export function useLocalStorage(itemName, initialValue){
  const [item, setItem] = React.useState(initialValue); // Estado de todos y saveTodos
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
  setTimeout(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
    
        if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
        }else{
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem)
        }
  
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    
  }, 2000);
  }, []);    
  
    const saveItem = (newItem) => { //Actualizador de react como de localStorage
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem)
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }


  /*const defaultTodos = [
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
];*/