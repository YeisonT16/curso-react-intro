import React from "react";

function TodoSearch(){
   
    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    
    return(
       <input placeholder="Cortar cebolla" onChange={(event) => {
            console.log('escribiste la letra', event.target.value);
            setSearchValue(event.target.value)
            
       }}
        value={searchValue}
       />
    );
}

export { TodoSearch };