import React from "react";


function TodoSearch({ searchValue, setSearchValue, loading }){

    const onSearchValueChange = (event) => {
        console.log('escribiste la letra', event.target.value);
        setSearchValue(event.target.value)
        
}
    const stayleDisabled = loading ? 'opacity-50' : ''
    
    
    return (
    <input 
        className={`rounded-2xl w-64 px-2 h-9 border-neutral-600 bg-indigo-100 text-indigo-700 font-semibold border outline-0 mb-14 ${stayleDisabled}`} 
        placeholder="Cortar cebolla..." 
        onChange={onSearchValueChange}
        value={searchValue}
        disabled={loading}
    />
    );
}

export { TodoSearch };