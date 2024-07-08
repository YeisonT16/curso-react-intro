import React from "react";


function TodoSearch({ searchValue, setSearchValue }){

    
    
    return(
    <input className="rounded-2xl w-52 px-2 h-8 border-neutral-600 bg-indigo-100 text-indigo-700 font-semibold border outline-0 mb-6" placeholder="Cortar cebolla..." onChange={(event) => {
            console.log('escribiste la letra', event.target.value);
            setSearchValue(event.target.value)
            
    }}
        value={searchValue}
    />
    );
}

export { TodoSearch };