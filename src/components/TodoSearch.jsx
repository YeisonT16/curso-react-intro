import React from "react";

function TodoSearch({searchValue, setSearchValue}){
   

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