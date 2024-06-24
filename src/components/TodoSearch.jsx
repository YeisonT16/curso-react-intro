import React from "react";
import { TodoContext } from './TodoContext.jsx'

function TodoSearch(){
   
    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    
    return(
       <input className="" placeholder="Cortar cebolla" onChange={(event) => {
            console.log('escribiste la letra', event.target.value);
            setSearchValue(event.target.value)
            
       }}
        value={searchValue}
       />
    );
}

export { TodoSearch };